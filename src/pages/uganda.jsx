import React, { useEffect } from "react";
import Navbar from "../main/navbars";
import HeaderOnly from "../main/haederonly";
import Button from "../main/button";
import Jobcard from "../main/jobcard";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
function Uganda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <HeaderOnly
        header1="UGANDA"
        image="/images/wats.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />
      <section className="joblist">
        <div className="opogo">
          <div style={{ flex: 1 }}>
            <h3 className="dud">Welcome to Uganda</h3>
            <h2 className="globbal">Overview</h2>
            <p className="paragahome">
              Uganda, known as the "Pearl of Africa," is a captivating
              destination in East Africa, offering diverse landscapes and
              vibrant culture. Its attractions include lush rainforests,
              savannahs, mountains, and lakeshores. The country is famous for
              its wildlife, particularly the mountain gorillas in Bwindi
              Impenetrable National Park and Queen Elizabeth National Park's
              diverse species. Adventure seekers can enjoy activities like
              white-water rafting on the Nile and trekking in the Rwenzori
              Mountains. Cultural experiences abound, with opportunities to
              visit traditional villages and witness tribal ceremonies. Kampala,
              the capital city, is lively with markets, nightlife, and
              historical landmarks. Lake Victoria offers relaxation and
              water-based activities. Uganda's warm and welcoming people add to
              its charm, making it an unforgettable destination for travelers.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              padding: "10px",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "50px",
              padding: "20px",
            }}
          >
            <img src="/images/done.jpeg" class="nepi img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="joblist">
        <h2 className="attraction">ATTRACTIONS IN UGANDA </h2>
        <div className="opogo">
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInLeft">
              <img
                src="/images/goug.jpeg"
                className="young slide-right"
                alt=""
              />
            </AnimatedOnScroll>
          </div>
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Bwindi Impenetrable Forest</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Bwindi Impenetrable Forest, located in southwestern Uganda, is
                  renowned for its remarkable biodiversity and significant
                  population of endangered mountain gorillas. Covering an area
                  of approximately 331 square kilometers, the forest is one of
                  the oldest and most biologically diverse rainforests in
                  Africa. Its rugged terrain, dense vegetation, and steep slopes
                  earned it the name "impenetrable," providing a challenging yet
                  rewarding trekking experience for visitors eager to encounter
                  these majestic primates. Apart from gorilla trekking, the
                  forest offers opportunities for birdwatching, with over 350
                  bird species recorded, including 23 Albertine Rift endemics.
                  Visiting Bwindi Impenetrable Forest offers not only a chance
                  to witness incredible wildlife but also to contribute to the
                  preservation of one of Africa's most precious habitats.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  {" "}
                  Activities:
                  <span className="paragah">
                    Gorilla trekking, bird safaris, Guides nature walks,
                    butterfly trekking, cultural experience .
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Kidepo Valley National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Kidepo Valley National Park, situated in Uganda's remote and
                  rugged semi-arid valleys bordering Sudan and Kenya, boasts a
                  remarkable array of wildlife, including 20 species of
                  predators, some unique to the park, such as cheetah and
                  black-backed jackal. Despite the recent extinction of the
                  black rhino, the park remains home to an impressive diversity
                  of mammals, including lions, leopards, elephants, Burchell's
                  zebras, buffaloes, and Rothschild's giraffes. With its
                  isolation and challenging access through the wild frontier
                  region of Karamoja, Kidepo is regarded as Uganda's most
                  magnificent national park. The savannah landscape stretching
                  beyond the gazetted area offers breathtaking vistas framed by
                  distant mountain ranges. the park hosts over 77 mammal species
                  and approximately 475 bird species, making it a haven for
                  wildlife enthusiasts and birdwatchers. Kidepo's open
                  grasslands, acacia trees, desert dates, and rocky outcrops
                  create a diverse and picturesque habitat, ensuring an
                  unforgettable safari experience in one of Africa's finest
                  wildernesses.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  {" "}
                  Activities:
                  <span className="paragah">
                    Game safaris, mountain hiking, bird safaris, Guides, nature
                    walks.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInRight">
              <img
                src="/images/crli.jpeg"
                className="young slide-left"
                alt=""
              />
            </AnimatedOnScroll>
          </div>
        </div>

        <div className="opogo">
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInLeft">
              <img
                src="/images/girl.jpeg"
                className="young slide-right"
                alt=""
              />
            </AnimatedOnScroll>
          </div>

          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Murchison Falls National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Murchison Falls National Park in western Uganda boasts the
                  stunning spectacle of the Nile River cascading through a
                  narrow crevice. Boat excursions along the Victoria Nile offer
                  close encounters with wildlife such as crocodiles, hippos,
                  elephants, and buffaloes. The melodic calls of colorful
                  kingfishers and other avian species accompany the journey.
                  Each moment brings discoveries, from graceful waterfowl to
                  majestic pachyderms, showcasing the region's rich
                  biodiversity. The serene ambiance allows visitors to immerse
                  themselves fully in the splendor of the surroundings. The boat
                  ride is an unforgettable expedition blending natural marvels
                  with moments of profound serenity.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Activities:
                  <span className="paragah">
                    Game drives, waterfall hikes, boat rides, sport fishing,
                    chimps trekking, Hiking, camping .
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Kibale Forest National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Kibale Forest is a remarkable sanctuary known for its
                  incredible variety of animals, especially monkeys. It boasts
                  13 species of monkeys, with a large population of 500
                  chimpanzees. The forest is also home to a diverse range of
                  birdlife, with 325 species of birds singing in its trees.
                  Additionally, the air is alive with the vibrant colors of 144
                  butterflies fluttering around. Amidst the greenery, large
                  animals like buffaloes and antelopes roam freely, adding to
                  the natural beauty. Occasionally, visitors may glimpse the
                  elusive forest elephant, adding to the sense of wonder. Kibale
                  Forest truly showcases the magnificence of the natural world,
                  inviting all who explore its trails to marvel at its wonders
                  and biodiversity.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  {" "}
                  Activities:
                  <span className="paragah">
                    Guided nature hike, chimp and monkey tracking, Bird watching
                    A visit to the waterfalls.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInRight">
              <img
                src="/images/chimpa.jpg"
                className="young slide-left"
                alt=""
              />
            </AnimatedOnScroll>
          </div>
        </div>
        <div className="opogo">
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInLeft">
              <img
                src="/images/jija.jpeg"
                className="young slide-right"
                alt=""
              />
            </AnimatedOnScroll>
          </div>
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Jinja, source of Nile</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  A visit to Jinja, the adrenaline capital of East Africa, is a
                  must on any Uganda safari, mainly to experience the Source of
                  the Nile. The River Nile, one of the world's longest rivers,
                  is a key attraction in Uganda's tourism landscape. In Jinja,
                  you'll find many thrilling adventure activities around the
                  Nile. From jet boating and kayaking to boat cruises and white
                  water rafting, there's something for every adventure
                  enthusiast. Additionally, bungee jumping and horseback riding
                  excursions into nearby communities offer unique ways to
                  explore the area. Jinja's vibrant atmosphere and the natural
                  beauty of the Nile make it an essential stop for any traveler
                  seeking excitement and adventure in Uganda.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Activities:
                  <span className="paragah">
                    Jet boating, Kayaking, Boat cruises, Bungee jumping,
                    Horseback riding, Fishing trips
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Queen Elizabeth National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Queen Elizabeth National Park boasts an impressive array of
                  biodiversity, encompassing nearly 100 varieties of mammals and
                  a staggering 606 distinct bird species. Renowned for harboring
                  the largest concentration of hippos globally, the Kazinga
                  Channel within the park is a testament to its natural wonders.
                  Its diverse wildlife populations include warthogs, buffalo,
                  antelope, giant forest hogs, kob, topi, waterbuck, elephant,
                  and leopard. This pristine habitat offers a captivating
                  glimpse into the richness of African wildlife, drawing
                  visitors from around the globe to marvel at its splendor and
                  explore its untamed beauty.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  {" "}
                  Activities:
                  <span className="paragah">
                    Chimp Trekking, Boating Safaris, Birding Safaris, Game
                    Drives, Salt Lake, Lion Tracking
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInRight">
              <img
                src="/images/lion.jpeg"
                className="young slide-left"
                alt=""
              />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Uganda;
