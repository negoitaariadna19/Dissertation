import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();

  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvailability = async () => {
    if (!date || !time) {
      return message.error("Date & Time Required");
    }

    const now = moment();
    if (date.isBefore(now, "day")) {
      return message.error("You cannot book an appointment in the past");
    }

    const [startTime, endTime] = doctors.timings.map((t) => moment(t, "HH:mm"));

    if (time.isBefore(startTime) || time.isAfter(endTime)) {
      return message.error(
        "Selected time is outside the doctor's available hours"
      );
    }

    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availability",
        {
          doctorId: params.doctorId,
          date: date.format("DD-MM-YYYY"),
          time: time.format("HH:mm"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        message.success(res.data.message);
      } else {
        setIsAvailable(false);
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  const handleBooking = async () => {
    if (!date || !time) {
      return message.error("Date & Time Required");
    }

    const now = moment();
    if (date.isBefore(now, "day")) {
      return message.error("You cannot book an appointment in the past");
    }

    const [startTime, endTime] = doctors.timings.map((t) => moment(t, "HH:mm"));

    if (time.isBefore(startTime) || time.isAfter(endTime)) {
      return message.error(
        "Selected time is outside the doctor's available hours"
      );
    }

    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date.format("DD-MM-YYYY"),
          time: time.format("HH:mm"),
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
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);

  const disabledDate = (current) => {
    // Can not select days before today
    return current && current < moment().startOf("day");
  };

  const disabledTime = (current) => {
    if (!doctors.timings) return {};

    const [startTime, endTime] = doctors.timings.map((t) => moment(t, "HH:mm"));
    return {
      disabledHours: () => {
        let hours = [];
        for (let i = 0; i < 24; i++) {
          if (i < startTime.hour() || i > endTime.hour()) {
            hours.push(i);
          }
        }
        return hours;
      },
      disabledMinutes: (selectedHour) => {
        let minutes = [];
        if (selectedHour === startTime.hour()) {
          for (let i = 0; i < 60; i++) {
            if (i < startTime.minute()) {
              minutes.push(i);
            }
          }
        }
        if (selectedHour === endTime.hour()) {
          for (let i = 0; i < 60; i++) {
            if (i > endTime.minute()) {
              minutes.push(i);
            }
          }
        }
        return minutes;
      },
    };
  };

  return (
    <Layout>
      <h3>Booking Page</h3>
      <div className="container m-2">
        {doctors && (
          <div>
            <h4>
              Specialist {doctors.firstName} {doctors.lastName}
            </h4>
            <h4>Pret: {doctors.feesPerConsultation}</h4>
            <h4>
              Program: {doctors.timings && doctors.timings[0]} -{" "}
              {doctors.timings && doctors.timings[1]}
            </h4>
            <div className="d-flex flex-column w-50">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                value={date}
                onChange={(value) => setDate(value)}
                disabledDate={disabledDate}
              />
              <TimePicker
                minuteStep={30}
                format="HH:mm"
                className="m-2"
                value={time}
                onChange={(value) => setTime(value)}
                disabledTime={disabledTime}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={handleAvailability}
              >
                Check Availability
              </button>
              {!isAvailable && (
                <button className="btn btn-dark mt-2" onClick={handleBooking}>
                  Book Now
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
