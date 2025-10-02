import React from "react";

const MissCard = ({ icon, title, desc, imageUrl }) => {
  const styles = {
    image: {
      width: "100%",
      height: "50%",
      objectFit: "cover",
      // borderRadius: "50%",
    },
  };
  return (
    <div className="misscard">
      <img src={imageUrl} alt="Image" style={styles.image} />
      {/* <div className="titleicon ">{icon}</div> */}
      <h3 className="titlecard ">{title}</h3>
      <p className="decrcardd">{desc}</p>
    </div>
  );
};

export default MissCard;
