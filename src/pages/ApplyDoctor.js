import React from "react";
import Layout from "./../components/Layout";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
//rafce
const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  // const handleFinish = async (values) => {
  //   try {
  //     dispatch(showLoading());
  //     const res = await axios.post(
  //       "/api/v1/user/apply-doctor",
  //       {
  //         ...values,
  //         userId: user._id,
  //         timings: [
  //           moment(values.timings[0]).format("HH:mm"),
  //           moment(values.timings[1]).format("HH:mm"),
  //         ],
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     if (res.data.success) {
  //       message.success(res.data.message);
  //       navigate("/");
  //     } else {
  //       message.error(res.data.success);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log(error);
  //     message.error("Something went Wrong");
  //   }

  //   console.log(values);
  // };
  // const handleFinish = async (values) => {
  //   try {
  //     dispatch(showLoading());

  //     // Verifică valorile timings înainte de formatare
  //     console.log("Raw timings:", values.timings);

  //     // Formatează datele de timp
  //     const formattedTimings = values.timings.map((time) =>
  //       moment(time).format("HH:mm")
  //     );

  //     // Verifică valorile timings după formatare
  //     console.log("Formatted timings:", formattedTimings);

  //     const res = await axios.post(
  //       "/api/v1/user/apply-doctor",
  //       {
  //         ...values,
  //         userId: user._id,
  //         timings: formattedTimings,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     if (res.data.success) {
  //       message.success(res.data.message);
  //       navigate("/");
  //     } else {
  //       message.error(res.data.success);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log(error);
  //     message.error("Something went Wrong");
  //   }

  //   console.log(values);
  // };

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

      // Verifică valorile timings înainte de formatare
      console.log("Raw timings:", values.timings);

      // Formatează datele de timp
      const formattedTimings = values.timings.map((time) =>
        moment(time.toISOString()).format("HH:mm")
      );

      // Verifică valorile timings după formatare
      console.log("Formatted timings:", formattedTimings);

      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: formattedTimings,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/homepage2");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went Wrong");
    }

    console.log(values);
  };

  // Custom validation function for the "First Name" field
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
  // Custom validation function for the "Last Name" field
  const validateLastName = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Prenumele este obligatoriu"));
    }
    if (!/^[A-Z]/.test(value)) {
      return Promise.reject(
        new Error("Prenumele trebuie să înceapă cu literă mare")
      );
    }

    if (value.length <= 3) {
      return Promise.reject(
        new Error("Prenumele trebuie să fie mai lung de 3 caractere")
      );
    }
    if (/\d/.test(value)) {
      return Promise.reject(new Error("Prenumele nu trebuie să conțină cifre"));
    }

    return Promise.resolve();
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

  // Custom validation function for the "Phone No" field
  const validatePhone = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Numărul de telefon este obligatoriu"));
    }
    if (!/^\d{10}$/.test(value)) {
      return Promise.reject(
        new Error(
          "Numărul de telefon trebuie să conțină exact 10 cifre și să nu aibă litere"
        )
      );
    }
    return Promise.resolve();
  };

  return (
    <Layout>
      <h1 className="text-center">Aplica ca si specialist</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="text"> Detaliile personale :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }, { validator: validateFirstName }]}
            >
              <Input type="text" placeholder="Numele dvs."></Input>
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }, { validator: validateLastName }]}
            >
              <Input type="text" placeholder="Prenumele dvs." />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }, { validator: validatePhone }]}
            >
              <Input type="text" placeholder="Numarul de telefon" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }, { validator: validateEmail }]}
            >
              <Input type="email" placeholder="Adresa dvs de email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Adresa clinicii dvs. " />
            </Form.Item>
          </Col>
        </Row>

        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Specializarea dvs." />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Experienta dvs." />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Consultation Price"
              name="feesPerConsultation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Pret consultatie" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              {/* <TimePicker.RangePicker format="HH:mm" /> */}
              <TimePicker.RangePicker format="HH:mm" minuteStep={30} />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}></Col>
          <button className="btn btn-primary form-btn" type="submit">
            Submit
          </button>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
