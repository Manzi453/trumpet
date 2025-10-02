import React, { useRef, useState, useEffect } from "react";
import HeaderOnly from "../main/haederonly";
import emailjs from "@emailjs/browser";
import MapContainer from "../main/map";
export const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_yzormml", "template_d92k6kj", form.current, {
        publicKey: "oiuGWFdjCVNAJbuok",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          alert(
            "Message sent successfully  we will get back to you as soon as possible"
          );
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="home">
      <HeaderOnly
        header1="Contact us"
        image="/images/roy.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
      />
      <section className="joblistu">
        <div className="contact">
          {/* <h3 className="titlebig">CONTACT US</h3> */}

          <div className="opogo">
            <div style={{ flex: 1, padding: "10px" }}>
              {" "}
              <MapContainer />
            </div>
            <div style={{ flex: 1, padding: "10px" }}>
              <form ref={form} onSubmit={sendEmail} className="conta">
                <div className="opogo">
                  <input
                    type="text"
                    name="name"
                    type="text"
                    name="user_name"
                    className="form-controle"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    type="email"
                    name="user_email"
                    className="form-controle"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-controlee"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button className="btnsend" type="submit" value="Send">
                    {" "}
                    {loading ? (
                      <div className="btnsend" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      " Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
