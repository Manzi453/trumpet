import React from "react";

const JobCard = ({ icon, title, desc, image }) => {
  return (
    <div className="jobcard">
      <div className="titleicon">{icon}</div>
      <h3 className="titlecard ">{title}</h3>
      <p className="decrcard">{desc}</p>
    </div>
  );
};

export default JobCard;
