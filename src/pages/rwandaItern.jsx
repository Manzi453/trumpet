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
function RwaItineraries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: "mag1",
      image: "/images/amazi.jpeg",
      title: "4 days Rwanda Gorillas &Lake Kivu",
    },
    {
      id: "mag2",
      image: "/images/inye.jpeg",
      title: "4 Days Gorilla & Golden Monkey Treks",
    },

    {
      id: "mag3",
      image: "/images/inga.jpeg",
      title: "5-Days Gorilla Trekking in Rwanda",
    },
    {
      id: "mag4",
      image: "/images/comp.jpeg",
      title: "5 days Nyungwe National Park",
    },
    {
      id: "mag5",
      image: "/images/zebra.jpeg",
      title: "6 Days Rwanda Akagera Safari and Gorilla Trekking Tour",
    },
    {
      id: "mag6",
      image: "/images/hide.jpeg",
      title: "6 Days Rwanda Great Apes Safari – Gorilla & Chimpanzee Treks",
    },
    {
      id: "mag7",
      image: "/images/sumba.jpeg",
      title: "7 Days Rwanda Akagera Safari & Gorilla Trekking",
    },
    {
      id: "mag8",
      image: "/images/gogo.jpeg",
      title: "8 Days Primates of Rwanda Safari",
    },
    {
      id: "mag9",
      image: "/images/tour.jpeg",
      title: "8 Days Rwanda Safari Tour",
    },
    {
      id: "mag10",
      image: "/images/heli.jpg",
      title: "8 Days Luxury Rwanda Safari Adventure",
    },
    {
      id: "mag11",
      image: "/images/gorila.jpg",
      title: "9 Days Rwanda Primate Tracking Safari",
    },

    {
      id: "mag12",
      image: "/images/lolo.jpeg",
      title: "10 Days Rwanda Wildlife Safari",
    },
    {
      id: "mag13",
      image: "/images/kaka.jpeg",
      title: "10 Days Rwanda Wildlife Adventure",
    },
    {
      id: "mag14",
      image: "/images/conve.jpg",
      title: "12 Days Luxury Wildlife Tour to Rwanda",
    },

    {
      id: "mag15",
      // image: "/images/conv.jpg",
      image: "/images/tradi.jpeg",
      title: "14 Days Exploring Rwanda ",
    },
  ];
  const handleClick = (id) => {
    console.log(id);

    window.location.href = "/Itineraries" + "/" + id;
  };

  return (
    <div className="home">
      <HeaderOnly
        header1="RWANDA ITINERARIES"
        image="/images//may.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
      />
      <section className="iternaries">
        {/* <h3 className="titlebig">Our Services </h3> */}

        <div className="opera">
          {data &&
            data.map((item) => {
              return (
                <div style={{ padding: "10px" }}>
                  <Card
                    imageUrl={item.image}
                    title={item.title}
                    click={() => handleClick(item.id)}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default RwaItineraries;
