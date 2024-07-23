import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2"
      onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
    >
      {/* <div className="card-header">
        Specialist {doctor.firstName}
        {doctor.lastName}
      </div> */}
      <div className="card-header">
        <span className="doctor-firstname">Specialist {doctor.firstName}</span>
        <span className="doctor-lastname">{doctor.lastName}</span>
      </div>
      <div className="card-body">
        <p>
          <b>Specialization</b> {doctor.specialization}
        </p>
        <p>
          <b>Experience</b> {doctor.experience}
        </p>
        <p>
          <b>Consultation Price</b> {doctor.feesPerConsultation}
        </p>
        <p>
          <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
        </p>
      </div>
    </div>
  );
};

export default DoctorList;
