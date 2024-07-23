import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import UserProfile from "./pages/user/userProfile";
import CalculatorIMC from "./pages/user/calculatorIMC";
import HomePage2 from "./pages/HomePage2";
import FirstAid from "./pages/user/FirstAid";
import Articles from "./pages/Articles";
import InsertArticle from "./pages/doctor/InsertArticle";
import EditArticle from "./pages/doctor/EditArticle";
import CalculatorTDE from "./pages/user/calculatorTDE";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    //aici sunt configurate rutele
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            {/* aici e ruta pt aplicare specialist */}
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/calculatorIMC"
              element={
                <ProtectedRoute>
                  <calculatorIMC />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoute>
                  <DoctorAppointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/calculatorIMC"
              element={
                <ProtectedRoute>
                  <CalculatorIMC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/homepage2"
              element={
                <ProtectedRoute>
                  <HomePage2 />
                </ProtectedRoute>
              }
            />
            <Route
              path="/FirstAid"
              element={
                <ProtectedRoute>
                  <FirstAid />
                </ProtectedRoute>
              }
            />
            <Route
              path="/articles"
              element={
                <ProtectedRoute>
                  <Articles />
                </ProtectedRoute>
              }
            />
            <Route
              path="/insert-article"
              element={
                <ProtectedRoute>
                  <InsertArticle />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update-article/:_id"
              element={
                <ProtectedRoute>
                  <EditArticle />
                </ProtectedRoute>
              }
            />
            <Route
              path="/calculatorTDEE"
              element={
                <ProtectedRoute>
                  <CalculatorTDE />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
