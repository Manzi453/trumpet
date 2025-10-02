import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../main/header";
import Button from "../main/button";
import ImageWithContent from "../main/imagecard";
import ImageWithCont from "../main/imagecardd";
import { BiBuildings, BiSolidCar, BiVideoRecording } from "react-icons/bi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import JobCard from "../main/jobcard";
import CardImage from "../main/cardImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickRw = () => {
    navigate("/Rwanda");
  };
  const handleClickUg = () => {
    navigate("/Uganda");
  };
  const handleClick = (id) => {
    console.log(id);
    navigate("/Itineraries/" + id);
  };
  const handleClickPack = () => {
    console.log();
    navigate("/Packages/#couple");
  };

  const handleclickint = () => {
    console.log();
    navigate("/Rwanda-Itineraries");
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    pauseOnHover: false,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home">
      <Header
        header1="Welcome to"
        imagehome3="/images/anti.jpeg"
        imagehome4="/images/boat.jpeg"
        imagehome2="/images/zebra.jpeg"
        imagehome1="/images/kab.jpeg"
        header2="T R U M P E T "
        aha=" T O U R S"
        header3="Discover beyond the untamed beauty of Africa’s wildlife adventures with us"
        headerImage="header-image"
        overlay="overlay"
        btncss="btn"
        click={handleclickint}
      />
      <section className="joblist">
        <div className="opogo">
          <div style={{ flex: 1 }} className="areyou">
            <h3 className="dud">WE ARE TRUMPET TOURS</h3>
            <h1 className="magai">
              Experience the magic of Africa
              <br />
              with Us,
            </h1>
            <p className="paragahome">
              Trumpet Tours is your premier tour company based in the heart of
              Africa, Kigali, Rwanda. With a dedication to providing
              unforgettable experiences, we specialize in meticulously crafted
              mountain gorilla trekking and wildlife safaris in Rwanda and
              beyond.
            </p>
            <p className="paragahome">
              As a fully registered and recognized tour company, our commitment
              to excellence shines through in every aspect of our service. From
              wildlife game drives to cultural immersions, our experienced team
              ensures your journey is not only safe and enjoyable but also
              deeply enriching.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                textAlign: "start",
                marginLeft: "20px",
              }}
            >
              <Button
                path="/about"
                // click={() => handleNavLinkClick("donate")}
                title="Learn more"
                // icon={<BiSolidArrowFromLeft className="scale-105" />}
              />
            </div>
          </div>
          <div style={{ flex: 1 }} className="areyou">
            <img
              src="/images/hap.jpeg"
              className="yake img-fluid"
              alt=""
              // style={{ width: "500px", height: "500px", borderRadius: "50%" }}
            />
          </div>
        </div>
      </section>
      <section className="joblist services">
        <h3 className="titlebig ">OUR SERVICES</h3>

        <div className="opogo">
          <div style={{ flex: 1, margin: "10px" }}>
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
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Button
            path="/services"
            // click={() => handleNavLinkClick("donate")}
            title="Learn more"
            // icon={<BiSolidArrowFromLeft className="scale-105" />}
          />
        </div>
      </section>
      <section className="destlist">
        <h3 className="titlebig ">Our Destinations</h3>
        <p className="decrdest">
          Discover The Enchanting Beauty of East Africa.
        </p>
        <div className="opogo">
          <div style={{ flex: 1 }} onClick={() => handleClickRw()}>
            <CardImage
              title="RWANDA"
              content="Some text content for the card."
              imageUrl="/images/gorila.jpg"
              path="/Rwanda"
              titlebtn="Explore "
            />
          </div>
          <div
            style={{ flex: 1, marginLeft: "10px" }}
            onClick={() => handleClickUg()}
          >
            <CardImage
              title="UGANDA"
              content="Some text content for the card."
              imageUrl="/images/kali.jpeg"
              path="/Uganda"
              titlebtn="Explore "
            />
          </div>
        </div>
      </section>
      <section className="joblist">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <h3 className="dudu">OUR POPULAR TOURS</h3>
            <h2 className="magai">
              Best Gorilla and Wildlife
              <br />
              Safaris
            </h2>
            <p className="paragahome">
              Embark on unforgettable adventures and explore diverse itineraries
              promising ultimate exploration. Our most popular tours include
              thrilling gorilla encounters and captivating wildlife expeditions,
              taking you deep into nature's wonders. Traverse lush forests,
              encounter majestic creatures, and create lasting memories on every
              journey with Trumpet Tours.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                textAlign: "start",
                marginLeft: "20px",
              }}
            >
              <Button
                path="/Rwanda-Itineraries"
                // click={() => handleNavLinkClick("donate")}
                title="Disover more"
                // icon={<BiSolidArrowFromLeft className="scale-105" />}
              />
            </div>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <div className="rwamerek">
              <div
                style={{ flex: 1, padding: "10px", marginTop: "80px" }}
                onClick={() => handleClick("mag2")}
              >
                {" "}
                <ImageWithCont
                  content="4 Days Gorilla & Golden Monkey Treks ."
                  imageUrl="/images/inye.jpeg"
                />
              </div>
              <div
                style={{ flex: 1, padding: "10px", marginTop: "80px" }}
                onClick={() => handleClick("mag9")}
              >
                <ImageWithCont
                  content="8 Days Rwanda Safari Tour."
                  imageUrl="/images/tour.jpeg"
                />
              </div>
            </div>
            <div className="rwamerek">
              <div
                style={{ flex: 1, padding: "10px" }}
                onClick={() => handleClick("mag12")}
              >
                {" "}
                <ImageWithCont
                  content="10 Days Rwanda Wildlife Safari ."
                  imageUrl="/images/lolo.jpeg"
                />
              </div>
              <div
                style={{ flex: 1, padding: "10px" }}
                onClick={() => handleClick("mag14")}
              >
                {" "}
                <ImageWithCont
                  content="12 Days Luxury Wildlife Tour to Rwanda."
                  imageUrl="/images/conve.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="packagelist">
        <h3 className="titlebig "> VOYAGING MODES </h3>
        <h2 className="titlesm ">Find the right package for you</h2>
        <Slider {...settings}>
          <HashLink smooth to="/Packages/#solo">
            <ImageWithContent
              imageUrl="/images/solo.jpg"
              content="Solo Tour Packages"
            />
          </HashLink>
          <HashLink smooth to="/Packages/#couple">
            <ImageWithContent
              imageUrl="/images/coup.jpg"
              content="Couple Tour Packages"
            />
          </HashLink>
          <HashLink smooth to="/Packages/#group">
            <ImageWithContent
              imageUrl="/images/group.jpg"
              content="Group Tour Packages"
            />
          </HashLink>

          <HashLink smooth to="/Packages/#luxury">
            <ImageWithContent
              imageUrl="/images/lux.jpg"
              content="Luxury Tour Packages"
            />
          </HashLink>
          <HashLink smooth to="/Packages/#family">
            <ImageWithContent
              imageUrl="/images/family.jpg"
              content="Family Tour Packages"
            />
          </HashLink>
        </Slider>
        <FloatingWhatsApp
          phoneNumber="250793766308"
          accountName="Trumpet Tours"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </section>
    </div>
  );
}

export default Home;
