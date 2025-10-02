import React from "react";
import Button from "./button";
import { BiSolidArrowFromLeft } from "react-icons/bi";
const ImageWithCont = ({ imageUrl, content, price }) => {
  const styles = {
    // imageContainer: {
    //   position: "relative",
    //   width: "300px",
    //   height: "250px",
    //   overflow: "hidden",
    //   borderRadius: "5px",
    //   cursor: "pointer",
    //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
      marginTop: 130,
      fontSize: "16px",
      textAlign: "left",
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
    <div className="hope">
      <img src={imageUrl} alt="Image" style={styles.image} />
      <div style={styles.overlay} className="rwan">
        <p style={styles.content} className="rwan">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ImageWithCont;
