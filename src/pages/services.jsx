import React, { useEffect } from "react";
import Navbar from "../main/navbars";
import HeaderOnly from "../main/haederonly";
import Button from "../main/button";
import JobCard from "../main/jobcard";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { FaLaptopFile } from "react-icons/fa6";
import { FaCarOn } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import {
  BiBuildings,
  BiSolidCar,
  BiVideoRecording,
  BiSolidArrowFromLeft,
} from "react-icons/bi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <HeaderOnly
        header1="Our Services"
        image="/images/coffee.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />
      <section className="joblist">
        {/* <h3 className="titlebig">Our Services </h3> */}

        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <JobCard
              icon={<BiSolidCar />}
              title="Guided Tours and Safaris"
              desc="Trumpet Tours specializes in providing guided tours and safaris across the captivating landscapes of Rwanda and Uganda, offering immersive experiences that showcase the rich wildlife and cultural heritage of these East African nations. With expert guides and tailored itineraries, travelers embark on unforgettable journeys, encountering majestic gorillas, diverse ecosystems, and vibrant local communities. "
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <JobCard
              icon={<LuNewspaper />}
              title="Tailor-made Itineraries"
              desc="Trumpet Tours caters to individual preferences by crafting tailor-made itineraries for explorers keen to delve into the enchanting landscapes of Rwanda and Uganda. From personalized wildlife encounters to cultural immersions, each itinerary is meticulously designed to fulfill travelers' unique desires and interests, ensuring a truly unforgettable experience. "
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <JobCard
              icon={<BiBuildings />}
              title="Accommodations"
              desc="Travelers booking with Trumpet Tours gain access to a comprehensive range of accommodation options in Rwanda and Uganda, spanning from luxurious hotels to budget-friendly lodges. With a keen eye for quality and comfort, Trumpet Tours ensures that every stay, regardless of budget, offers a welcoming retreat amidst the stunning landscapes of these East African destinations."
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <JobCard
              icon={<MdOutlineAirplaneTicket />}
              title="Tourist Permits
              "
              desc="Trumpet Tours secures all necessary tourist permits for travelers exploring Rwanda and Uganda, ensuring a hassle-free experience. With expertise in navigating the permit process, travelers can relax knowing that their permits for activities such as gorilla trekking or wildlife safaris are efficiently arranged, allowing them to focus solely on enjoying their adventure.
              "
            />
          </div>
        </div>
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <JobCard
              icon={<FaLaptopFile />}
              title="Travel consultation   "
              desc="Trumpet Tours provides free travel consultation services for those planning trips to Rwanda and Uganda, offering invaluable insights and recommendations to enhance the journey. Whether seeking advice on must-visit attractions, optimal travel routes, or cultural etiquette, Trumpet Tours' consultations ensure travelers embark on well-informed and enriching experiences while exploring these East African gems."
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <JobCard
              icon={<FaCarRear />}
              title="Transportation"
              desc="Trumpet Tours provides comprehensive transportation solutions in Rwanda and Uganda, utilizing top-tier 4X4 safari vehicles accompanied by skilled drivers. Additionally, we streamline your travel experience by managing all local and regional flight bookings and arranging seamless transfers to and from airports or other designated locations."
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <JobCard
              icon={<FaTaxi />}
              title="Car rental"
              desc="WTrumpet Tours provides dependable car rental services tailored for solo adventurers and groups exploring Rwanda's safari attractions. From self-driven options to guided tours, travelers can choose from a selection of vehicles, including TXL models ideal for couples and high-end tourists and 4X4 safari vehicles equipped with amenities like fridges, WIFI, and charging points for a comfortable journey."
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <JobCard
              icon={<FaHandshake />}
              title="Meet and Greet Services"
              desc="Trumpet Tours provides personalized Meet and Greet Services, ensuring guests receive a warm welcome upon arrival. With Trumpet Tours, travelers can enjoy a seamless transition into their destination, complete with friendly assistance and guidance throughout their journey. "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
