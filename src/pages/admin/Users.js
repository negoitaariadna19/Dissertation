import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Table, message, Select } from "antd";

const { Option } = Select;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");

  // Fetch all users
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
        setFilteredUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Handle delete user
  const handleDeleteUser = async (userId) => {
    try {
      const res = await axios.delete(`/api/v1/admin/deleteUser/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        message.success(res.data.message);
        getUsers(); // Refresh the list of users
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  // Handle filter change
  const handleFilterChange = (value) => {
    setFilter(value);
    if (value === "") {
      setFilteredUsers(users);
    } else {
      const isDoctor = value === "yes";
      setFilteredUsers(users.filter((user) => user.isDoctor === isDoctor));
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // render: (text, record) => (
      //   <span>
      //     {record.firstName} {record.lastName}
      //   </span>
      // ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteUser(record._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">Users List</h1>

      <div style={{ marginBottom: "20px" }}>
        <Select
          placeholder="Filter by Doctor"
          style={{ width: 200 }}
          onChange={handleFilterChange}
          allowClear
        >
          <Option value="yes">Yes</Option>
          <Option value="no">No</Option>
        </Select>
      </div>

      <Table columns={columns} dataSource={filteredUsers} rowKey="_id" />
    </Layout>
  );
};

export default Users;

// ============================================================================================================================================================
//
// ============================================================================================================================================================

// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";
// import { Table, message, Select } from "antd";

// const { Option } = Select;

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [filter, setFilter] = useState("");

//   // Fetch all users
//   const getUsers = async () => {
//     try {
//       const res = await axios.get("/api/v1/admin/getAllUsers", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setUsers(res.data.data);
//         setFilteredUsers(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   // Handle delete user
//   const handleDeleteUser = async (userId) => {
//     try {
//       const res = await axios.delete(`/api/v1/admin/deleteUser/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         message.success(res.data.message);
//         getUsers(); // Refresh the list of users
//       }
//     } catch (error) {
//       message.error("Something went wrong");
//     }
//   };

//   // Handle filter change
//   const handleFilterChange = (value) => {
//     setFilter(value);
//     if (value === "") {
//       setFilteredUsers(users);
//     } else {
//       const isDoctor = value === "yes";
//       setFilteredUsers(users.filter((user) => user.isDoctor === isDoctor));
//     }
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span>
//           {record.firstName} {record.lastName}
//         </span>
//       ),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//     },
//     {
//       title: "Doctor",
//       dataIndex: "isDoctor",
//       render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
//     },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       render: (text, record) => (
//         <div className="d-flex">
//           <button
//             className="btn btn-danger"
//             onClick={() => handleDeleteUser(record._id)}
//           >
//             Delete
//           </button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <Layout>
//       <h1 className="text-center m-2">Users List</h1>

//       <div style={{ marginBottom: "20px" }}>
//         <Select
//           placeholder="Filter by Doctor"
//           style={{ width: 200 }}
//           onChange={handleFilterChange}
//           allowClear
//         >
//           <Option value="yes">Yes</Option>
//           <Option value="no">No</Option>
//         </Select>
//       </div>

//       <Table columns={columns} dataSource={filteredUsers} rowKey="_id" />
//     </Layout>
//   );
// };

// export default Users;

// ============================================================================================================================================================
// inainte de ffiltru si delete
// ============================================================================================================================================================
// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";
// import { Table } from "antd";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   //getUsers

//   const getUsers = async () => {
//     try {
//       const res = await axios.get("/api/v1/admin/getAllUsers", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setUsers(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getUsers();
//   }, []);

//   // antd table col

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//     },

//     {
//       title: "Doctor",
//       dataIndex: "isDoctor",
//       render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
//     },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       render: (text, record) => (
//         <div className="d-flex">
//           <button className="btn btn-danger">Block</button>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <Layout>
//       <h1 className="text-center m-2">Users List</h1>
//       <Table columns={columns} dataSource={users} />
//     </Layout>
//   );
// };

// export default Users;
