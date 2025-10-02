import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderOnly from "../main/haederonly";
const Plan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/send-email", formData);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="home">
      <HeaderOnly
        header1=" Plan Your Rwanda | Uganda Adventure"
        image="/images/rek.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />

      <section className="joblistfin">
        <div className="contact">
          <h3 className="titlego ">Plan your trip</h3>
          <iframe
            className="ifom"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf2WGtPQWyZGgFisJ-Wl2lnYghkCaklYo-kmvXYGsO11t5f-A/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Plan;
