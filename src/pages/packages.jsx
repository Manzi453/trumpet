import React, { useEffect } from "react";
import Navbar from "../main/navbars";
import HeaderOnly from "../main/haederonly";
import Button from "../main/button";
import ImageWithContent from "../main/imagecard";
import ImageWithCont from "../main/imagecardd";
import { BiBuildings, BiSolidCar, BiVideoRecording } from "react-icons/bi";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import JobCard from "../main/jobcard";
import CardImage from "../main/cardImage";
import Footer from "../main/footer";

function Packages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick = (id) => {
    console.log(id);

    window.location.href = "/Itineraries" + "/" + id;
  };
  return (
    <div className="home">
      <HeaderOnly
        header1="Packages"
        image="/images/pack.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />

      <section className="joblist" id="solo">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }} className="rwan">
            <h2 className="rwan">Solo Tour Package</h2>
            <p className="paragahome">
              Embark on a transformative journey with Trumpet Tours, where you
              can set your own pace and indulge in your interests amidst the
              serene backdrop of a solo safari. Whether you explore the
              breathtaking landscapes of Rwanda or Uganda, our experienced guide
              drivers will accompany you, ensuring a safe and enriching
              experience. Delve into each destination's unique cultural and
              natural treasures, from encountering majestic wildlife to
              immersing yourself in vibrant local communities. Rest assured that
              traveling solo with Trumpet Tours is secure, as our team is
              dedicated to providing personalized attention and support
              throughout your adventure. Connect with like-minded explorers
              along the way, creating unforgettable memories amidst the
              tranquility and beauty of Africa's wilderness
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
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
                  onClick={() => handleClick("mag4")}
                >
                  <ImageWithCont
                    content=" 5 days Nyungwe National Park."
                    imageUrl="/images/comp.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="joblist" id="couple">
        <div className="opogoo">
          <div style={{ flex: 1, padding: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {" "}
              <div className="rwamerek">
                <div
                  style={{ flex: 1, padding: "10px", marginTop: "80px" }}
                  onClick={() => handleClick("mag7")}
                >
                  <ImageWithCont
                    content="7 Days Rwanda Akagera Safari & Gorilla Trekking ."
                    imageUrl="/images/sumba.jpeg"
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
            </div>
          </div>
          <div style={{ flex: 1, padding: "10px" }} className="rwan">
            <h2 className="rwan">Couple Tour Package</h2>
            <p className="paragahome">
              Experience the fulfillment of your most extravagant aspirations
              with Trumpet Tours. Delight in tailor-made escapades designed for
              pairs, ranging from enchanting honeymoon safaris to unforgettable
              evenings spent gazing at the stars. Trumpet Tours provides
              exhilarating and genuine tour packages specifically crafted for
              adventurous couples. Indulge in many highlights, including
              traversing Volcanoes National Park in search of majestic mountain
              gorillas, immersing yourselves in the captivating forests of
              Nyungwe, and embarking on a thrilling safari adventure in Akagera
              National Park. Every moment promises to deepen the bond between
              you and your partner, creating memories to last a lifetime.
            </p>
          </div>
        </div>
      </section>
      <section className="joblist" id="group">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }} className="rwan">
            <h2 className="rwan">Group Tour Package</h2>
            <p className="paragahome">
              Embark on an unforgettable journey with your friends as students
              or dive into the ultimate work excursion – an adventure that
              promises to be shared effortlessly. Trumpet Tours presents
              opportunities for shared small-group and large-group experiences
              in Rwanda or Uganda, tailored primarily for wildlife safaris,
              community-based tours encompassing cultural and historical
              encounters, and exhilarating adventures. Delve into the heart of
              Africa's breathtaking landscapes alongside your companions,
              immersing yourselves in the wonders of nature and wildlife Whether
              you opt for the intimacy of a small group or the vibrant energy of
              a larger gathering, each experience promises to forge lasting
              memories and deepen your appreciation for the beauty and diversity
              of the region.
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px", marginTop: "80px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {" "}
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
                  onClick={() => handleClick("mag15")}
                >
                  {" "}
                  <ImageWithCont
                    content="14 Days Exploring Rwanda."
                    imageUrl="/images/tradi.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="joblist" id="luxury">
        <div className="opogoo">
          <div style={{ flex: 1, padding: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {" "}
              <div className="rwamerek">
                <div
                  style={{ flex: 1, padding: "10px", marginTop: "80px" }}
                  onClick={() => handleClick("mag10")}
                >
                  {" "}
                  <ImageWithCont
                    content="8 Days Luxury Rwanda Safari Adventure ."
                    imageUrl="/images/heli.jpg"
                  />
                </div>
                <div
                  style={{ flex: 1, padding: "10px", marginTop: "80px" }}
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
          <div style={{ flex: 1, padding: "10px" }} className="rwan">
            <h2 className="rwan">Luxury Tour Packages</h2>
            <p className="paragahome">
              Embark on the ultimate adventure with Trumpet Tours luxury safari,
              where you'll indulge in top-notch accommodations and enjoy
              custom-designed private safari vehicles packed with unparalleled
              comforts. Our team comprises the cream of the crop guides and
              drivers who will accompany you throughout your journey. These
              expert guides will lead the way, tracking magnificent animals and
              breathtaking sights. They might even unveil hidden gems in the
              landscape, ensuring you get the most out of your experience in
              Rwanda and Uganda. With their expertise, your exploration of these
              beautiful countries will be brighter and more luxurious.
            </p>
          </div>
        </div>
      </section>
      <section className="joblist" id="family">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }} className="rwan">
            <h2 className="rwan">Family Tour Package</h2>
            <p className="paragahome">
              Following a substantial breakfast in the early hours, you'll be
              met by our skilled driver-guide for the journey from Bwindi to
              Kampala/Entebbe, where you'll be dropped off at your hotel/lodge.
              However, on the return leg from Bwindi, our itinerary includes a
              stop for lunch at the Igongo Cultural Centre and an opportunity to
              capture photos at the Equator crossing.
            </p>
          </div>
          <div style={{ flex: 1, padding: "10px", marginTop: "80px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {" "}
              <div className="rwamerek">
                <div
                  style={{ flex: 1, padding: "10px" }}
                  onClick={() => handleClick("mag5")}
                >
                  {" "}
                  <ImageWithCont
                    content="6 Days Rwanda Akagera Safari and Gorilla Trekking Tour."
                    imageUrl="/images/zebra.jpeg"
                  />
                </div>
                <div
                  style={{ flex: 1, padding: "10px" }}
                  onClick={() => handleClick("mag11")}
                >
                  {" "}
                  <ImageWithCont
                    content="9 Days Rwanda Primate Tracking Safari."
                    imageUrl="/images/gorila.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
