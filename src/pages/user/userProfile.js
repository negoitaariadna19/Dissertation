// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import "../../styles/UserProfile.css";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneUser, setPhone] = useState("");
  //   const [password, setPassword] = useState("");
  const { user: loggedInUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "/api/v1/user/getUserInfo",
          {
            userId: loggedInUser._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const userData = response.data.data;
          setUser(userData);
          setName(userData.name);
          setEmail(userData.email);
          setPhone(userData.phoneUser);
          //   setPassword(userData.password);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [loggedInUser]);

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        "/api/v1/user/updateProfile",
        {
          userId: loggedInUser._id,
          name,
          email,
          phoneUser,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        alert("Profile updated successfully");
        navigate("/homepage2");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update profile");
    }
  };

  return (
    <Layout>
      <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-form">
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Telefon: </label>
            <input
              type="text"
              value={phoneUser || ""}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Layout from "../../components/Layout";
// import "../../styles/UserProfile.css";
// import { showLoading, hideLoading } from "../../redux/features/alertSlice";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const { user: loggedInUser } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchUser = async (values) => {
//       try {
//         const response = await axios.post(
//           "/api/v1/user/getUserInfo",
//           {
//             ...values,
//             userId: user._id,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         dispatch(hideLoading());
//         if (response.data.success) {
//           const userData = response.data.data;
//           setUser(userData);
//           setName(userData.name);
//           setEmail(userData.email);
//           setPhone(userData.phone);
//           navigate("/");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUser();
//   }, [loggedInUser]);

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.post("/api/v1/user/updateProfile", {
//         userId: loggedInUser._id,
//         name,
//         email,
//         phone,
//       });
//       if (response.data.success) {
//         alert("Profile updated successfully");
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Failed to update profile");
//     }
//   };

//   return (
//     <Layout>
//       <div className="profile-container">
//         <h2>Profile</h2>
//         <div className="profile-form">
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Phone:</label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <button onClick={handleUpdate}>Update Profile</button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default UserProfile;
