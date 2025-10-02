import React from "react";
import Button from "../main/button";
import { BiSolidArrowFromLeft } from "react-icons/bi";
const CardImage = ({ title, content, imageUrl, path, titlebtn }) => {
  const styles = {
    card: {
      position: "relative",
      height: "390px",
      overflow: "hidden",
      borderRadius: "5px",
      cursor: "pointer",
      gap: "9px",
      boxShadow: " 0px 8px 16px 0px rgba(0, 0, 0, 0.4)",
      margin: "16px",
    },

    coverImage: {
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
    title: {
      color: "#fff",
      marginTop: 100,
    },
  };

  return (
    <div className="cardrws ">
      <img src={imageUrl} alt="Card cover" style={styles.coverImage} />
      <div style={styles.overlay}>
        <h3 style={styles.title} className="rwan">
          {title}
        </h3>
        <div className="btngodown ">
          <Button
            path={path}
            // click={() => handleNavLinkClick("donate")}
            titlebtn={titlebtn}
            //   icon={<BiSolidArrowFromLeft className="scale-105" />}
          />
        </div>
      </div>
      \
    </div>
  );
};

export default CardImage;
