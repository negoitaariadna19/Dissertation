import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  const doctorMenu = [
    {
      name: "Homepage",
      path: "/homepage2",
      icon: "fa-solid fa-house-chimney",
    },
    // {
    //   name: "Home",
    //   path: "/",
    //   icon: "fa-solid fa-house",
    // },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
    {
      name: "Articles",
      path: `/articles`,
      icon: "fa-solid fa-book-open",
    },
  ];

  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="header">
            <div className="fa-solid fa-spa">
              <h6>E Health</h6>
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div
                    key={menu.path}
                    className={`menu-item ${isActive && "active"}`}
                  >
                    <i className={menu.icon}></i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                );
              })}
              <div className={`menu-item`} onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
            <div className="header-content" style={{ cursor: "pointer" }}>
              <Badge
                count={user && user.notification.length}
                onClick={() => {
                  navigate("/notification");
                }}
              >
                <i className="fa-solid fa-bell"></i>
              </Badge>
              <Link to="/profile">{user?.name}</Link>
            </div>
          </div>
          <div className="content">
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

///////////////////////////////////////////////////////////////////////
//aici fac un design final(deasupra) si aici jos e design vechi final ca pe yt
/////////////////////////////////////////////////////////////////////////
// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "../Data/data";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge, message } from "antd";
// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   //logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Succesfully");
//     navigate("/login");
//   };

//   // =================doctor menu============================
//   const doctorMenu = [
//     {
//       name: "Home",
//       path: "/",
//       icon: "fa-solid fa-house",
//     },
//     {
//       name: "Appointments",
//       path: "/doctor-appointments",
//       icon: "fa-solid fa-list",
//     },

//     {
//       name: "Profile",
//       path: `/doctor/profile/${user?._id}`,
//       icon: "fa-solid fa-user",
//     },
//   ];
//   // ==================doctor menu===========================

//   //redering menu list
//   //aici comutam intre conturi,, adica daca are isAdmin true, afiseaza admin menu, daca arre isDoctor afiseaza doctorMenu
//   const SidebarMenu = user?.isAdmin
//     ? adminMenu
//     : user?.isDoctor
//     ? doctorMenu
//     : userMenu;
//   return (
//     <>
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar">
//             <div className="logo">
//               <h6>E Health</h6>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname == menu.path;
//                 return (
//                   <>
//                     <div className={`menu-item ${isActive && "active"}`}>
//                       <i className={menu.icon}></i>
//                       <Link to={menu.path}>{menu.name}</Link>
//                     </div>
//                   </>
//                 );
//               })}
//               <div className={`menu-item`} onClick={handleLogout}>
//                 <i className="fa-solid fa-arrow-right-from-bracket"></i>
//                 <Link to="/login">Logout</Link>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="header">
//               <div className="header-content" style={{ cursor: "pointer" }}>
//                 <Badge
//                   count={user && user.notification.length}
//                   onClick={() => {
//                     navigate("/notification");
//                   }}
//                 >
//                   <i className="fa-solid fa-bell"></i>
//                 </Badge>
//                 <Link to="/profile">{user?.name}</Link>
//               </div>
//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
/////////////////////////////////////////////////////////////////////////////////////
//aici design vechi final
// ----------------------------------------
// super fain fct cu chatgpt
// import React from "react";
// import "../styles/LayoutStyles.css";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <div className="main">
//         <div className="header">
//           <div className="logo">DOC APP</div>
//           <div className="menu">
//             <a href="#">Home</a>
//             <a href="#">Appointments</a>
//             <a href="#">Apply Doctor</a>
//             <a href="#">Profile</a>
//             <a href="#">Logout</a>
//           </div>
//           <div className="user-profile">
//             <span>PAULA</span>
//             <div className="notification-icon">🔔</div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="body">{children}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
// ----------------------------------------------------------

// si mai super fain tot cu chatgpt 2
// import React from "react";
// import "../styles/LayoutStyles.css";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <div className="main">
//         <div className="header">
//           <div className="logo">DOC APP</div>
//           <div className="menu">
//             <a href="#">Home</a>
//             <a href="#">Appointments</a>
//             <a href="#">Apply Doctor</a>
//             <a href="#">Profile</a>
//             <a href="#">Logout</a>
//           </div>
//           <div className="user-profile">
//             <span>PAULA</span>
//             <div className="notification-icon">🔔</div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="shortcuts">
//             <div className="shortcut">
//               <img src="icon1.png" alt="Icon 1" />
//               <span>Test</span>
//             </div>
//             <div className="shortcut">
//               <img src="icon2.png" alt="Icon 2" />
//               <span>Search Specialists</span>
//             </div>
//             <div className="shortcut">
//               <img src="icon3.png" alt="Icon 3" />
//               <span>Book Appointment</span>
//             </div>
//           </div>
//           <div className="home-content">
//             <div className="welcome">
//               <h2>Welcome, Paula!</h2>
//               <p>How can we help you today?</p>
//             </div>
//             <div className="images">
//               <img src="image1.jpg" alt="Random" />
//               <img src="image2.jpg" alt="Random" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;
// ----------------------------------------------------------------
