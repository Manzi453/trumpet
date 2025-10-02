import React, { useEffect } from "react";
import Navbar from "../main/navbars";
import HeaderOnly from "../main/haederonly";
import Button from "../main/button";
import JobCard from "../main/jobcard";
import Card from "../main/cardimg";
import {
  BiBuildings,
  BiSolidCar,
  BiVideoRecording,
  BiSolidArrowFromLeft,
} from "react-icons/bi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
function UgaItineraries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: "magug1",
      image: "/images/one.jpeg",
      title: " 4-Days Murchison Falls",
    },
    {
      id: "magug2",
      image: "/images/gorila.jpg",
      title: "5 Days Uganda Gorilla Trekking Tour",
    },

    {
      id: "magug3",
      image: "/images/women.jpeg",
      title: "6-Day Uganda Safari  ",
    },
    {
      id: "magug4",
      image: "/images/antop.jpeg",
      title: "7 Days Uganda Safari  ",
    },
    {
      id: "magug5",
      image: "/images/giraff.jpeg",
      title: "8 Days Adventure Experience in Uganda",
    },
    {
      id: "magug6",
      image: "/images/eagle.jpg",
      title: "9 Days Uganda Safari",
    },
  ];
  const handleClick = (id) => {
    console.log(id);

    window.location.href = "/Itineraries" + "/" + id;
  };

  return (
    <div className="home">
      <HeaderOnly
        header1="UGANDA ITINERARIES"
        image="/images/wats.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />
      <section className="iternaries">
        <div className="opera">
          {data &&
            data.map((item) => {
              return (
                <div style={{ padding: "10px" }}>
                  <Card
                    click={() => handleClick(item.id)}
                    imageUrl={item.image}
                    title={item.title}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default UgaItineraries;
