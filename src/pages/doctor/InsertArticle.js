// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../../components/Layout";
// import axios from "axios";

// const InsertArticle = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     const article = { title, content };
//   //     const response = await axios.post(
//   //       "/api/v1/article/create-article",
//   //       {
//   //         method: "POST",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify(article),
//   //       },
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //         },
//   //       }
//   //     );

//   //     if (response.ok) {
//   //       navigate("/articles");
//   //     }
//   //   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const articleData = {
//       title: event.target.title.value,
//       content: event.target.content.value,
//       // alte câmpuri necesare
//     };

//     try {
//       const response = await axios.post(
//         "/api/v1/article/create-article",
//         articleData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         console.log("Article created successfully", response.data.data);
//         // redirecționează sau actualizează UI-ul după succes
//       } else {
//         console.error("Failed to create article", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error creating article:", error);
//     }
//   };
//   return (
//     <Layout>
//       <h1>Adaugă Articol</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Titlu</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Conținut</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </Layout>
//   );
// };

// export default InsertArticle;
// ----------------------------------------------------------------------------------
import React from "react";
import Layout from "../../components/Layout";
import { Col, Form, Input, Row, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";

const InsertArticle = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

      const res = await axios.post(
        "/api/v1/article/create-article",
        {
          ...values,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message || "Articol creat cu succes");
        navigate("/articles");
      } else {
        message.error(res.data.message || "A apărut o eroare");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }

    console.log(values);
  };

  return (
    <Layout>
      <h1 className="text-center">Inserare Articol</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Titlu"
              name="title"
              required
              rules={[{ required: true, message: "Titlul este obligatoriu" }]}
            >
              <Input type="text" placeholder="Titlul articolului" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Conținut"
              name="content"
              required
              rules={[
                { required: true, message: "Conținutul este obligatoriu" },
              ]}
            >
              <Input.TextArea placeholder="Conținutul articolului" rows={4} />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Autor"
              name="authorName"
              required
              rules={[{ required: true, message: "Autorul este obligatoriu" }]}
            >
              <Input type="text" placeholder="Autorul articolului" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default InsertArticle;
// -------------------------------------------------------------------------------------------asta de sus e bun
