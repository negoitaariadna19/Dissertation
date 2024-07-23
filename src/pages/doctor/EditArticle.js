// import React, { useEffect, useState, useCallback } from "react";
// import Layout from "../../components/Layout";
// import { Col, Form, Input, Row, message } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// import axios from "axios";
// import { hideLoading, showLoading } from "../../redux/features/alertSlice";

// const EditArticle = () => {
//   const { user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [article, setArticle] = useState({});

//   const fetchArticle = useCallback(async () => {
//     try {
//       const response = await axios.get(`/api/v1/article/get-article/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticle(response.data.data);
//       } else {
//         message.error("Failed to fetch article");
//       }
//     } catch (error) {
//       console.error("Error fetching article:", error);
//       message.error("Something went wrong");
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchArticle();
//   }, [fetchArticle]);

//   const handleFinish = async (values) => {
//     try {
//       dispatch(showLoading());

//       const res = await axios.put(
//         `/api/v1/article/update-article/${id}`,
//         {
//           ...values,
//           userId: user._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success(res.data.message);
//         navigate("/articles");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout>
//       <h1 className="text-center">Edit Article</h1>
//       <Form
//         layout="vertical"
//         onFinish={handleFinish}
//         initialValues={{
//           title: article.title,
//           content: article.content,
//           authorName: article.authorName,
//         }}
//         className="m-3"
//       >
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Title"
//               name="title"
//               required
//               rules={[{ required: true, message: "Title is required" }]}
//             >
//               <Input type="text" placeholder="Article title" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Content"
//               name="content"
//               required
//               rules={[{ required: true, message: "Content is required" }]}
//             >
//               <Input.TextArea placeholder="Article content" rows={4} />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Author"
//               name="authorName"
//               required
//               rules={[{ required: true, message: "Author is required" }]}
//             >
//               <Input type="text" placeholder="Article author" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <button className="btn btn-primary form-btn" type="submit">
//               Update Article
//             </button>
//           </Col>
//         </Row>
//       </Form>
//     </Layout>
//   );
// };

// export default EditArticle;
// -----------------------------------------------------------------de jos
// import React, { useEffect, useState } from "react";

// import { Col, Form, Input, Row, message } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// import axios from "axios";
// import { hideLoading, showLoading } from "../../redux/features/alertSlice";
// import Layout from "../../components/Layout";

// const EditArticle = () => {
//   const { user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { _id } = useParams();
//   const [article, setArticle] = useState({});

//   const fetchArticle = async () => {
//     try {
//       const response = await axios.get(`/api/v1/article/get-article/${_id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticle(response.data.data);
//       } else {
//         message.error("Failed to fetch article");
//       }
//     } catch (error) {
//       console.error("Error fetching article:", error);
//       message.error("Something went wrong");
//     }
//   };

//   useEffect(() => {
//     fetchArticle();
//   }, []);

//   const handleFinish = async (values) => {
//     try {
//       dispatch(showLoading());

//       const res = await axios.put(
//         `/api/v1/article/update-article/${_id}`,
//         {
//           ...values,
//           userId: user._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success(res.data.message);
//         navigate("/articles");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout>
//       <h1 className="text-center">Edit Article</h1>
//       <Form
//         layout="vertical"
//         onFinish={handleFinish}
//         initialValues={{
//           title: article.title,
//           content: article.content,
//           authorName: article.authorName,
//         }}
//         className="m-3"
//       >
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Title"
//               name="title"
//               required
//               rules={[{ required: true, message: "Title is required" }]}
//             >
//               <Input type="text" placeholder="Article title" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Content"
//               name="content"
//               required
//               rules={[{ required: true, message: "Content is required" }]}
//             >
//               <Input.TextArea placeholder="Article content" rows={4} />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Author"
//               name="authorName"
//               required
//               rules={[{ required: true, message: "Author is required" }]}
//             >
//               <Input type="text" placeholder="Article author" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <button className="btn btn-primary form-btn" type="submit">
//               Update Article
//             </button>
//           </Col>
//         </Row>
//       </Form>
//     </Layout>
//   );
// };

// export default EditArticle;
// import React, { useEffect, useState, useCallback } from "react";
// import Layout from "../../components/Layout";
// import { Col, Form, Input, Row, message } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// import axios from "axios";
// import { hideLoading, showLoading } from "../../redux/features/alertSlice";

// const EditArticle = () => {
//   const { user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [article, setArticle] = useState({});

//   const fetchArticle = useCallback(async () => {
//     try {
//       const response = await axios.get(`/api/v1/article/get-article/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticle(response.data.data);
//       } else {
//         message.error("Failed to fetch article");
//       }
//     } catch (error) {
//       console.error("Error fetching article:", error);
//       message.error("Something went wrong");
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchArticle();
//   }, [fetchArticle]);

//   const handleFinish = async (values) => {
//     try {
//       dispatch(showLoading());

//       const res = await axios.put(
//         `/api/v1/article/update-article/${id}`,
//         {
//           ...values,
//           userId: user._id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success(res.data.message);
//         navigate("/articles");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//       message.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout>
//       <h1 className="text-center">Edit Article</h1>
//       <Form
//         layout="vertical"
//         onFinish={handleFinish}
//         initialValues={{
//           title: article.title,
//           content: article.content,
//           authorName: article.authorName,
//         }}
//         className="m-3"
//       >
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Title"
//               name="title"
//               required
//               rules={[{ required: true, message: "Title is required" }]}
//             >
//               <Input type="text" placeholder="Article title" />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Content"
//               name="content"
//               required
//               rules={[{ required: true, message: "Content is required" }]}
//             >
//               <Input.TextArea placeholder="Article content" rows={4} />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label="Author"
//               name="authorName"
//               required
//               rules={[{ required: true, message: "Author is required" }]}
//             >
//               <Input type="text" placeholder="Article author" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <button className="btn btn-primary form-btn" type="submit">
//               Update Article
//             </button>
//           </Col>
//         </Row>
//       </Form>
//     </Layout>
//   );
// };

// export default EditArticle;

import React, { useEffect, useState } from "react";
import { Col, Form, Input, Row, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
import Layout from "../../components/Layout";

const EditArticle = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams(); // folosim 'id' în loc de '_id'
  const [form] = Form.useForm(); // creare instanță form
  const [article, setArticle] = useState({});

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`/api/v1/article/get-article/${_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        setArticle(response.data.data);
        form.setFieldsValue({
          title: response.data.data.title,
          content: response.data.data.content,
          authorName: response.data.data.authorName,
        }); // setarea valorilor formularului
      } else {
        message.error("Failed to fetch article");
      }
    } catch (error) {
      console.error("Error fetching article:", error);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [_id]);

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());

      const res = await axios.put(
        `/api/v1/article/update-article/${_id}`,
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
        message.success(res.data.message);
        navigate("/articles");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <h1 className="text-center">Edit Article</h1>
      <Form
        form={form} // conectare instanță form la componentă
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          title: article.title,
          content: article.content,
          authorName: article.authorName,
        }}
        className="m-3"
      >
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Title"
              name="title"
              required
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Input type="text" placeholder="Article title" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Content"
              name="content"
              required
              rules={[{ required: true, message: "Content is required" }]}
            >
              <Input.TextArea placeholder="Article content" rows={4} />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Author"
              name="authorName"
              required
              rules={[{ required: true, message: "Author is required" }]}
            >
              <Input type="text" placeholder="Article author" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Update Article
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default EditArticle;
