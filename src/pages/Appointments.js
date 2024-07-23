import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import moment from "moment";
import { Table, Button, message } from "antd";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const cancelAppointment = async (appointmentId) => {
    try {
      const res = await axios.delete(
        `/api/v1/user/cancel-appointment/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        getAppointments();
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("Error while cancelling appointment");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Specialist",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text, record) => <span>{record.doctorInfo.phone}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) =>
        record.status === "pending" ? (
          <Button
            type="primary"
            danger
            onClick={() => cancelAppointment(record._id)}
          >
            Cancel Appointment
          </Button>
        ) : null,
    },
  ];

  return (
    <Layout>
      <h1>Appointments Lists</h1>
      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
};

export default Appointments;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../components/Layout";
// import moment from "moment";
// import { Table } from "antd";

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const getAppointments = async () => {
//     try {
//       const res = await axios.get("/api/v1/user/user-appointments", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setAppointments(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAppointments();
//   }, []);

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "_id",
//     },

//     {
//       title: "Specialist",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span>
//           {record.doctorInfo.firstName} {record.doctorInfo.lastName}
//         </span>
//       ),
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       render: (text, record) => <span>{record.doctorInfo.phone}</span>,
//     },

//     {
//       title: "Date & Time",
//       dataIndex: "date",
//       render: (text, record) => (
//         <span>
//           {moment(record.date).format("DD-MM-YYYY")} &nbsp;
//           {moment(record.time).format("HH:mm")}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//   ];
//   return (
//     <Layout>
//       <h1> Appointments Lists</h1>
//       <Table columns={columns} dataSource={appointments} />
//     </Layout>
//   );
// };

// export default Appointments;
