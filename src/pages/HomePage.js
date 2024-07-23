import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Row, Col, Select, InputNumber } from "antd";
import DoctorList from "../components/DoctorList";

const { Option } = Select;

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  // Fetch doctor data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        const doctors = res.data.data;
        setDoctors(doctors);
        setFilteredDoctors(doctors);

        // Extract unique specializations
        const specializations = [
          ...new Set(doctors.map((doctor) => doctor.specialization)),
        ];
        setSpecializations(specializations);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Handle filtering
  useEffect(() => {
    let filtered = doctors;

    if (specialization) {
      filtered = filtered.filter(
        (doctor) => doctor.specialization === specialization
      );
    }

    if (experience) {
      filtered = filtered.filter((doctor) => doctor.experience >= experience);
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (doctor) => doctor.feesPerConsultation <= maxPrice
      );
    }

    setFilteredDoctors(filtered);
  }, [specialization, experience, maxPrice, doctors]);

  return (
    <Layout>
      <h1 className="text-center">Lista specialisti</h1>

      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col span={8}>
          <Select
            placeholder="Select Specialization"
            style={{ width: "100%" }}
            onChange={(value) => setSpecialization(value)}
            allowClear
          >
            {specializations.map((spec) => (
              <Option key={spec} value={spec}>
                {spec}
              </Option>
            ))}
          </Select>
        </Col>

        <Col span={8}>
          <InputNumber
            placeholder="Minimum Experience (years)"
            style={{ width: "100%" }}
            onChange={(value) => setExperience(value)}
            min={0}
            allowClear
          />
        </Col>

        <Col span={8}>
          <InputNumber
            placeholder="Maximum Consultation Price"
            style={{ width: "100%" }}
            onChange={(value) => setMaxPrice(value)}
            min={0}
            allowClear
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {filteredDoctors &&
          filteredDoctors.map((doctor) => (
            <Col span={8} key={doctor._id}>
              <DoctorList doctor={doctor} />
            </Col>
          ))}
      </Row>
    </Layout>
  );
};

export default HomePage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";
// import { Row } from "antd";
// import DoctorList from "../components/DoctorList";
// const HomePage = () => {
//   const [doctors, setDoctors] = useState([]);
//   //login user data
//   const getUserData = async () => {
//     try {
//       const res = await axios.get(
//         "/api/v1/user/getAllDoctors",

//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       );
//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <Layout>
//       <h1 className="text-center">Home Page</h1>
//       <Row>
//         {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
//       </Row>
//     </Layout>
//   );
// };

// export default HomePage;
