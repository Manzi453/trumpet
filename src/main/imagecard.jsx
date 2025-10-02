import React from "react";
import Button from "../main/button";
import { BiSolidArrowFromLeft } from "react-icons/bi";
const ImageWithContent = ({ imageUrl, content, price }) => {
  const styles = {
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      padding: "16px",
      boxSizing: "border-box",
    },
    content: {
      marginTop: 180,
      fontSize: "20px",
      textAlign: "center",
      fontWeight: 700,
      color: "#fff",
    },
    price: {
      fontSize: "14px",
      fontWeight: 700,
      textAlign: "left",
      color: "#afa082",
    },
    par: {
      fontSize: "14px",
      fontWeight: 700,
      textAlign: "left",
      color: "#fff",
    },
  };

  return (
    <div className="cardorgin">
      <img src={imageUrl} alt="Image" style={styles.image} />
      <div style={styles.overlay}>
        <p style={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default ImageWithContent;
