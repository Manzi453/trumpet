import React, { useEffect } from "react";
import Navbar from "../main/navbars";
import HeaderOnly from "../main/haederonly";
import Button from "../main/button";
import Misscard from "../main/missoncard";
import { FaCircleCheck } from "react-icons/fa6";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <HeaderOnly
        header1="About Us"
        image="/images/how.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />
      <section className="joblist">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <h3 className="dud">We Are Tumpet Tours.</h3>
            <p className="paragacompli">
              "Just as an elephant's trumpet sound to express excitement, we aim
              to captivate and excite travelers with our unique wildlife
              adventures”
            </p>
            <p className="paragahome">
              Welcome to Trumpet Tours, your premier tour company based in the
              heart of Africa, Kigali, Rwanda. With a dedication to providing
              unforgettable experiences, we specialize in meticulously crafted
              mountain gorilla trekking and wildlife safaris in Rwanda and
              beyond. As a fully registered and recognized tour company, our
              commitment to excellence shines through in every aspect of our
              service. From wildlife game drives to cultural immersions, our
              experienced team ensures your journey is not only safe and
              enjoyable but also deeply enriching. Our passion for showcasing
              the beauty and diversity of East Africa's landscapes and wildlife
              is evident in our carefully curated itineraries, which offer a
              blend of adventure, education, and relaxation. Whether you're
              seeking the thrill of encountering mountain gorillas in their
              natural habitat, the serenity of a sunset game drive across the
              savannah, or the cultural richness of a village visit, we tailor
              each experience to exceed your expectations. With a fleet of
              well-maintained safari vehicles and knowledgeable guides, we
              invite you to explore Rwanda, Uganda, and beyond with us,
              unlocking the wonders of Africa's premier safari destinations. Our
              commitment to sustainable tourism practices ensures that your
              travels not only benefit you but also contribute to the
              conservation of the natural environment and support local
              communities.Join us on an exceptional journey through the
              breathtaking landscapes and iconic wildlife of East Africa, where
              every moment is crafted to leave a lasting imprint on your soul.
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <img
              src="/images/elee.jpeg"
              class="photo img-fluid"
              alt=""
              className="yake img-fluid"
            />
          </div>
        </div>
      </section>
      <section className="joblist services">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <Misscard
              imageUrl="./images/ms.jpeg"
              title="Mission"
              desc="To ignite the spirit of adventure in every traveler's heart by curating unforgettable journeys that connect people with the world's most captivating destinations. Through our passion for sustainable tourism and commitment to excellence, we strive to deliver exceptional travel experiences."
            />
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <Misscard
              imageUrl="./images/fe.jpeg"
              title="Vision"
              desc="To be a leading tour and travel company that empowers sustainable exploration through outstanding travel services and innovative technology while preserving the world's natural beauty. Join us in forging a future where travel enriches both the traveler and the planet."
            />
          </div>
        </div>
      </section>
      <section className="aboutlist">
        <h2 className="glol">WHY CHOOSE US</h2>
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <div className="display">
              <FaCircleCheck className="icondisplay" />
              <span>
                <h2 className="wordmagali"> Non-stop availability</h2>{" "}
              </span>
            </div>

            <p className="descrmag">
              We take great pride in our continuous accessibility, guaranteeing
              round-the-clock availability to fulfill your travel desires and
              organize an exceptional journey. Whether you have a particular
              destination in mind or require assistance in choosing our
              committed team will escort you to your chosen destination,
              ensuring a flawless and unforgettable travel experience.
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <div className="display">
              <FaCircleCheck className="icondisplay" />
              <span>
                <h2 className="wordmagali"> Wallet-friendly charges</h2>{" "}
              </span>
            </div>
            <p className="descrmag">
              We boast wallet-friendly charges, providing a range of options
              from luxurious accommodations to midrange and budget-friendly
              alternatives tailored to your budgetary constraints. We ensure
              that regardless of your financial considerations, we offer
              accommodations and services that cater to your needs and
              preferences without compromising quality or comfort.
            </p>
          </div>
        </div>
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <div className="display">
              <FaCircleCheck className="icondisplay" />
              <span>
                <h2 className="wordmagali"> Professional Guides</h2>{" "}
              </span>
            </div>

            <p className="descrmag">
              We pride ourselves on providing professional guides who are
              experienced and highly knowledgeable about travel and wildlife.
              Our guides offer unparalleled expertise, ensuring a rich and
              immersive experience for our travelers.
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <div className="display">
              <FaCircleCheck className="icondisplay" />
              <span>
                <h2 className="wordmagali"> Top-tier 4X4 safari vehicles</h2>{" "}
              </span>
            </div>
            <p className="descrmag">
              We prioritize your comfort and convenience above all else. That's
              why we offer top-tier 4X4 safari vehicles equipped with fridges,
              WiFi, and charging ports, ensuring you have everything you need
              for an unforgettable journey. With our commitment to excellence,
              your travel experience with us is guaranteed to be both luxurious
              and practical.
            </p>
          </div>
        </div>
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <div className="display">
              <FaCircleCheck className="icondisplay" />
              <span>
                <h2 className="wordmagali">Personalized Client Care</h2>{" "}
              </span>
            </div>

            <p className="descrmag">
              We pride ourselves on delivering Personalized Client Care,
              ensuring that each tourist receives our undivided attention
              throughout their journey. Our dedicated team is committed to
              catering to the unique needs and preferences of every traveler,
              providing tailored experiences that exceed expectations. From
              meticulous planning to attentive guidance, we strive to create
              memorable and enjoyable adventures for all our clients.
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {" "}
            <div className="display">
              <FaCircleCheck className="icondisplay" />
              <span>
                <h2 className="wordmagali">Eco-friendly Travel</h2>{" "}
              </span>
            </div>
            <p className="descrmag">
              We emphasize eco-friendly travel by employing sustainable measures
              like reducing carbon emissions through technology. Their
              commitment extends to responsible tourism and conservation,
              collaborating with local communities and conservation groups to
              ensure sustainable tours benefit the environment and residents.
              Ultimately, Trumpet Tours strives to offer enriching travel
              experiences while minimizing its environmental footprint.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
