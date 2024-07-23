// ---------------------------------------------------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import "../styles/HomePage2.css";
import CalendarImg from "../images/calendar.png";
import ProfileImg from "../images/profile2.png";
import SpecialistImg from "../images/specialistimage.png";
import CalculatorImg from "../images/calculatorimc.png";
import NotifImg from "../images/notif.png";
import ManageUsersImg from "../images/manageusers.png";
import ArticleImg from "../images/open-book.png";
import PencilImg from "../images/pencil.png";
import CaloryCalculatorImg from "../images/calories-calculator.png";

const HomePage2 = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  console.log("User state from selector:", user); // Verifică datele utilizatorului

  const adminMenu = [
    {
      title: "Manage Specialists",
      imgSrc: SpecialistImg,
      path: "/admin/doctors",
    },
    { title: "Manage Users", imgSrc: ManageUsersImg, path: "/admin/users" },

    { title: "Notifications", imgSrc: NotifImg, path: "/notification" },
  ];

  const doctorMenu = [
    {
      title: "Appointments",
      imgSrc: CalendarImg,
      //   icon: "📅",
      path: "/doctor-appointments",
    },
    { title: "Profile", imgSrc: ProfileImg, path: "/doctor/profile/:id" },
    { title: "Notifications", imgSrc: NotifImg, path: "/notification" },
    { title: "Articles", imgSrc: ArticleImg, path: "/articles" },
    { title: "Write an article", imgSrc: PencilImg, path: "/insert-article" },
  ];

  const userMenu = [
    { title: "Your Appointments", imgSrc: CalendarImg, path: "/appointments" },
    { title: "Specialists", imgSrc: SpecialistImg, path: "/" },
    { title: "Profile", imgSrc: ProfileImg, path: "/user/profile" },
    { title: "Calculator IMC", imgSrc: CalculatorImg, path: "/calculatorIMC" },
    {
      title: "Calculator for calories",
      imgSrc: CaloryCalculatorImg,
      path: "/calculatorTDEE",
    },
    { title: "Notifications", imgSrc: NotifImg, path: "/notification" },
    { title: "Articles", imgSrc: ArticleImg, path: "/articles" },
  ];

  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <Layout>
      <h1>Homepage</h1>
      <div className="home-grid">
        {SidebarMenu.map((section) => (
          <div
            key={section.title}
            className="home-grid-item"
            onClick={() => navigate(section.path)}
          >
            <img src={section.imgSrc} alt={section.title} className="icon" />
            {/* <div className="icon">{section.icon}</div> */}
            <div className="title">{section.title}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage2;
// --------------------------------------------------------------------------------------------------------------------------------------------
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layout";
// import "../styles/HomePage2.css";

// const HomePage2 = () => {
//   const navigate = useNavigate();

//   const sections = [
//     { title: "Programări", icon: "📅", path: "/" },
//     { title: "Devino Specialist", icon: "👨‍⚕️", path: "/apply-doctor" },
//     { title: "Profil", icon: "👤", path: "/user/profile" },
//     { title: "Calculator IMC", icon: "🧮", path: "/calculatorIMC" },
//     // Adaugă mai multe secțiuni după nevoie
//   ];

//   return (
//     <Layout>
//       <h1>Homepage</h1>
//       <div className="home-grid">
//         {sections.map((section) => (
//           <div
//             key={section.title}
//             className="home-grid-item"
//             onClick={() => navigate(section.path)}
//           >
//             <div className="icon">{section.icon}</div>
//             <div className="title">{section.title}</div>
//           </div>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default HomePage2;
