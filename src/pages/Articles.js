import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Article.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [expandedArticles, setExpandedArticles] = useState({});
  const [titleFilter, setTitleFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const response = await axios.get("/api/v1/article/get-all-articles", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        setArticles(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const toggleExpand = (_id) => {
    setExpandedArticles((prevState) => ({
      ...prevState,
      [_id]: !prevState[_id],
    }));
  };

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(
        `/api/v1/article/delete-article/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        fetchArticles(); // Refresh the articles list
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleEdit = (_id) => {
    navigate(`/update-article/${_id}`);
  };

  const handleNewArticle = () => {
    navigate("/insert-article");
  };

  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleAuthorFilterChange = (e) => {
    setAuthorFilter(e.target.value);
  };

  const getUniqueTitles = () => {
    const titles = articles.map((article) => article.title);
    return [...new Set(titles)];
  };

  const getUniqueAuthors = () => {
    const authors = articles.map((article) => article.authorName);
    return [...new Set(authors)];
  };

  const filteredArticles = articles.filter((article) => {
    return (
      (titleFilter === "" || article.title === titleFilter) &&
      (authorFilter === "" || article.authorName === authorFilter)
    );
  });

  return (
    <Layout>
      <h1>Articles</h1>
      {user && user.isDoctor && (
        <button className="new-article-btn" onClick={handleNewArticle}>
          Write a new article
        </button>
      )}
      <div className="filters">
        <select value={titleFilter} onChange={handleTitleFilterChange}>
          <option value="">Filter by title</option>
          {getUniqueTitles().map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
        <select value={authorFilter} onChange={handleAuthorFilterChange}>
          <option value="">Filter by author</option>
          {getUniqueAuthors().map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
      <div className="articles-grid">
        {Array.isArray(filteredArticles) && filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article._id}
              className={`article-card ${
                expandedArticles[article._id] ? "expanded" : ""
              }`}
            >
              <h2>{article.title}</h2>
              <p>
                {expandedArticles[article._id]
                  ? article.content
                  : `${article.content.substring(0, 100)}...`}
              </p>
              <small>Author: {article.authorName}</small>
              <div className="article-buttons">
                <button
                  className="read-more-btn"
                  onClick={() => toggleExpand(article._id)}
                >
                  {expandedArticles[article._id] ? "Show Less" : "Read More"}
                </button>
                {user && user.isDoctor && (
                  <div className="edit-delete-btns">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(article._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(article._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Articles;

// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Article.css";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   const [expandedArticles, setExpandedArticles] = useState({});
//   const [titleFilter, setTitleFilter] = useState("");
//   const [authorFilter, setAuthorFilter] = useState("");
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get("/api/v1/article/get-all-articles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticles(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const toggleExpand = (_id) => {
//     setExpandedArticles((prevState) => ({
//       ...prevState,
//       [_id]: !prevState[_id],
//     }));
//   };

//   const handleDelete = async (_id) => {
//     try {
//       const response = await axios.delete(
//         `/api/v1/article/delete-article/${_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         fetchArticles(); // Refresh the articles list
//       } else {
//         console.error(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error deleting article:", error);
//     }
//   };

//   const handleEdit = (_id) => {
//     navigate(`/update-article/${_id}`);
//   };
//   const handleNewArticle = () => {
//     navigate("/insert-article");
//   };

//   const handleTitleFilterChange = (e) => {
//     setTitleFilter(e.target.value);
//   };

//   const handleAuthorFilterChange = (e) => {
//     setAuthorFilter(e.target.value);
//   };

//   const getUniqueTitles = () => {
//     const titles = articles.map((article) => article.title);
//     return [...new Set(titles)];
//   };

//   const getUniqueAuthors = () => {
//     const authors = articles.map((article) => article.authorName);
//     return [...new Set(authors)];
//   };

//   const filteredArticles = articles.filter((article) => {
//     return (
//       (titleFilter === "" || article.title === titleFilter) &&
//       (authorFilter === "" || article.authorName === authorFilter)
//     );
//   });
//   return (
//     <Layout>
//       <h1>Articles</h1>
//       {user.isDoctor && (
//         <button className="new-article-btn" onClick={handleNewArticle}>
//           Write a new article
//         </button>
//       )}
//       <div className="filters">
//         <select value={titleFilter} onChange={handleTitleFilterChange}>
//           <option value="">Filter by title</option>
//           {getUniqueTitles().map((title, index) => (
//             <option key={index} value={title}>
//               {title}
//             </option>
//           ))}
//         </select>
//         <select value={authorFilter} onChange={handleAuthorFilterChange}>
//           <option value="">Filter by author</option>
//           {getUniqueAuthors().map((author, index) => (
//             <option key={index} value={author}>
//               {author}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="articles-grid">
//         {Array.isArray(articles) && articles.length > 0 ? (
//           articles.map((article) => (
//             <div
//               key={article._id}
//               className={`article-card ${
//                 expandedArticles[article._id] ? "expanded" : ""
//               }`}
//             >
//               <h2>{article.title}</h2>
//               <p>
//                 {expandedArticles[article._id]
//                   ? article.content
//                   : `${article.content.substring(0, 100)}...`}
//               </p>
//               <small>Author: {article.authorName}</small>
//               <div className="article-buttons">
//                 <button
//                   className="read-more-btn"
//                   onClick={() => toggleExpand(article._id)}
//                 >
//                   {expandedArticles[article._id] ? "Show Less" : "Read More"}
//                 </button>
//                 {user.isDoctor && (
//                   <div className="edit-delete-btns">
//                     <button
//                       className="edit-btn"
//                       onClick={() => handleEdit(article._id)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(article._id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No articles found.</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Articles;

// ----------------------------------------------------------------------final
// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import { Col, Form, Input, Row, message } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Article.css";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   const [expandedArticles, setExpandedArticles] = useState({});
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get("/api/v1/article/get-all-articles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticles(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const toggleExpand = (_id) => {
//     setExpandedArticles((prevState) => ({
//       ...prevState,
//       [_id]: !prevState[_id],
//     }));
//   };

//   const handleDelete = async (_id) => {
//     try {
//       const response = await axios.delete(
//         `/api/v1/article/delete-article/${_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         fetchArticles(); // Refresh the articles list
//       } else {
//         console.error(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error deleting article:", error);
//     }
//   };

//   const handleEdit = (_id) => {
//     navigate(`/update-article/${_id}`);
//   };

//   return (
//     <Layout>
//       <h1>Articles</h1>
//       <div className="articles-grid">
//         {Array.isArray(articles) && articles.length > 0 ? (
//           articles.map((article) => (
//             <div
//               key={article._id}
//               className={`article-card ${
//                 expandedArticles[article._id] ? "expanded" : ""
//               }`}
//             >
//               <h2>{article.title}</h2>
//               <p>
//                 {expandedArticles[article._id]
//                   ? article.content
//                   : `${article.content.substring(0, 100)}...`}
//               </p>
//               <small>Author: {article.authorName}</small>
//               <button
//                 className="read-more-btn"
//                 onClick={() => toggleExpand(article._id)}
//               >
//                 {expandedArticles[article._id] ? "Show Less" : "Read More"}
//               </button>
//               {user.isDoctor && (
//                 <div className="edit-delete-btns">
//                   <button
//                     className="edit-btn"
//                     onClick={() => handleEdit(article._id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-btn"
//                     onClick={() => handleDelete(article._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No articles found.</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Articles;

// ---------------------------------------------------------merge delete la asta de jos
// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import "../styles/Article.css";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   const [expandedArticles, setExpandedArticles] = useState({});
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get("/api/v1/article/get-all-articles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticles(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const toggleExpand = (id) => {
//     setExpandedArticles((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   const handleDelete = async (_id) => {
//     try {
//       const response = await axios.delete(
//         `/api/v1/article/delete-article/${_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         fetchArticles(); // Refresh the articles list
//       } else {
//         console.error(response.data.message);
//       }
//     } catch (error) {
//       console.error("Error deleting article:", error);
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/edit-article/${id}`);
//   };

//   return (
//     <Layout>
//       <h1>Articole</h1>
//       <div className="articles-grid">
//         {Array.isArray(articles) && articles.length > 0 ? (
//           articles.map((article) => (
//             <div
//               key={article._id}
//               className={`article-card ${
//                 expandedArticles[article._id] ? "expanded" : ""
//               }`}
//             >
//               <h2>{article.title}</h2>
//               <p>
//                 {expandedArticles[article._id]
//                   ? article.content
//                   : `${article.content.substring(0, 100)}...`}
//               </p>
//               <small>Autor: {article.authorName}</small>
//               <button onClick={() => toggleExpand(article._id)}>
//                 {expandedArticles[article._id] ? "Show Less" : "Read More"}
//               </button>
//               {user.isDoctor && (
//                 <div>
//                   <button onClick={() => handleEdit(article._id)}>Edit</button>
//                   <button onClick={() => handleDelete(article._id)}>
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No articles found.</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Articles;

// --------------------------------------------------------------asta e final de jos

// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import "../styles/Article.css";
// import axios from "axios";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   const [expandedArticles, setExpandedArticles] = useState({});

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get("/api/v1/article/get-all-articles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (response.data.success) {
//         setArticles(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const toggleExpand = (id) => {
//     setExpandedArticles((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   return (
//     <Layout>
//       <h1>Articole</h1>
//       <div className="articles-grid">
//         {Array.isArray(articles) && articles.length > 0 ? (
//           articles.map((article) => (
//             <div
//               key={article._id}
//               className={`article-card ${
//                 expandedArticles[article._id] ? "expanded" : ""
//               }`}
//             >
//               <h2>{article.title}</h2>
//               <p>
//                 {expandedArticles[article._id]
//                   ? article.content
//                   : `${article.content.substring(0, 100)}...`}
//               </p>
//               <small>Autor: {article.authorName}</small>
//               <button onClick={() => toggleExpand(article._id)}>
//                 {expandedArticles[article._id] ? "Show Less" : "Read More"}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No articles found.</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Articles;
// ------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";

// const CreateArticle = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/v1/user/create-article", {
//         title,
//         content,
//       });
//       if (response.data.success) {
//         setMessage("Articol creat cu succes!");
//         setTitle("");
//         setContent("");
//       } else {
//         setMessage("Eroare la crearea articolului.");
//       }
//     } catch (error) {
//       console.error("Error creating article:", error);
//       setMessage("Eroare la crearea articolului.");
//     }
//   };

//   return (
//     <Layout>
//       <div className="create-article-container">
//         <h1>Creează un Articol Nou</h1>
//         <form onSubmit={handleSubmit} className="create-article-form">
//           <div className="form-group">
//             <label htmlFor="title">Titlu</label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="content">Conținut</label>
//             <textarea
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Creează</button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>
//     </Layout>
//   );
// };

// export default CreateArticle;
////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";
// import "../styles/Article.css";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get("/api/v1/user/articles");
//         if (response.data.success) {
//           setArticles(response.data.articles);
//         } else {
//           console.error("Failed to fetch articles");
//         }
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <Layout>
//       <div className="articles-container">
//         <h1>Articole</h1>
//         <div className="article-list">
//           {articles.map((article) => (
//             <div key={article._id} className="article-item">
//               <h3>{article.title}</h3>
//               <p>{article.content}</p>
//               <p className="author">Scris de: {article.author.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Articles;
// -------------------------------------------------------------------------------- asta era ianinte de jos
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import Layout from "../components/Layout";
// import axios from "axios";
//import Layout from "./../components/Layout";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const { user } = useSelector((state) => state.user);

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get("/api/v1/articles/get-article");
//       setArticles(response.data.articles);
//     } catch (error) {
//       console.error("Error fetching articles", error);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const handleCreateArticle = async () => {
//     try {
//       const response = await axios.post(
//         "/api/v1/articles/create-article",
//         { title, content },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         fetchArticles();
//         setTitle("");
//         setContent("");
//       }
//     } catch (error) {
//       console.error("Error creating article", error);
//     }
//   };

//   return (
//     <Layout>
//       <h1>Articles</h1>
//       {user.isDoctor && (
//         <div>
//           <h2>Create Article</h2>
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             placeholder="Content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           ></textarea>
//           <button onClick={handleCreateArticle}>Create</button>
//         </div>
//       )}
//       <div>
//         {articles.map((article) => (
//           <div key={article._id}>
//             <h2>{article.title}</h2>
//             <p>{article.content}</p>
//             <p>Author: {article.author.name}</p>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default Articles;
