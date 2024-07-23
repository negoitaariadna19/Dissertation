import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
// import registerImg from "../images/proba.gif";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onFinishHandler = async (values) => {
    // console.log(values);
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        //daca nu e succes
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  // Custom validation function for the "Email" field
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Adresa de email este obligatorie"));
    }
    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(value)) {
      return Promise.reject(
        new Error("Adresa de email trebuie să fie validă și să conțină '@' ")
      );
    }
    return Promise.resolve();
  };
  // Custom validation function for the "name" field
  const validateFirstName = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Numele este obligatoriu"));
    }
    if (!/^[A-Z]/.test(value)) {
      return Promise.reject(
        new Error("Numele trebuie să înceapă cu literă mare")
      );
    }

    if (value.length <= 3) {
      return Promise.reject(
        new Error("Numele trebuie să fie mai lung de 3 caractere")
      );
    }
    if (/\d/.test(value)) {
      return Promise.reject(new Error("Numele nu trebuie să conțină cifre"));
    }

    return Promise.resolve();
  };
  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Parola este obligatorie"));
    }

    // Verifica lungimea minimă
    if (value.trim().length < 3) {
      return Promise.reject(
        new Error("Parola trebuie să aibă cel puțin 3 caractere")
      );
    }

    // Verifica daca parola contine caracter special sau cifra
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return Promise.reject(
        new Error(
          "Parola trebuie să conțină cel puțin un caracter special sau o cifră"
        )
      );
    }

    return Promise.resolve();
  };
  return (
    <>
      {/* Imagine separata

      <div className="RegisterImage">
        <img src={registerImg} alt="" />
      </div> */}

      <div className="form-container2">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form2"
        >
          <h3 className="text-center">Register Form</h3>

          <Form.Item
            label="Name"
            name="name"
            required
            rules={[{ required: false }, { validator: validateFirstName }]}
          >
            <Input type="text" placeholder="Numele dvs." />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            required
            rules={[{ required: false }, { validator: validateEmail }]}
          >
            <Input type="email" placeholder="Adresa dvs de email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            required
            rules={[{ required: false }, { validator: validatePassword }]}
          >
            <Input type="password" placeholder="Introduceti o parola" />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user? Login here.
          </Link>
          <button className="btn btn-primary2" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
