import React, { useEffect } from "react";
import Navbar from "../main/navbars";
import HeaderOnly from "../main/haederonly";
import Button from "../main/button";
import Jobcard from "../main/jobcard";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
function Rwanda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <HeaderOnly
        header1="Rwanda"
        image="/images//may.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />
      <section className="joblist">
        <div className="opogo">
          <div style={{ flex: 1 }}>
            <h3 className="dud">Welcome to Rwanda</h3>
            <h2 className="globbal">Overview</h2>
            <p className="paragahome">
              Rwanda is often called the "Land of a Thousand Hills," where
              breathtaking landscapes and diverse wildlife await. With four
              national parks—Volcanoes, Akagera, Nyungwe, and Gishwati Mukura.
              adventure-seekers can embark on unforgettable experiences, from
              tracking rare mountain gorillas to thrilling game drives spotting
              the big five. Nestled in the heart of Africa, Rwanda is a gateway
              to exploring East Africa's natural wonders, offering a central
              location for extending travels to neighboring countries like
              Tanzania and Kenya. Despite its tragic past, Rwanda has emerged as
              a beacon of hope, leading in environmental conservation and
              responsible tourism initiatives. Its capital city, Kigali,
              renowned for its cleanliness and safety, offers a blend of modern
              amenities and authentic African culture. Whether exploring misty
              rainforests, tranquil lakes, or rolling savannas, every visit to
              Rwanda promises an unforgettable journey where you contribute to
              the country's vibrant future.
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
            <img src="/images/iwi.jpeg" className="nepi img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="joblist">
        <h2 className="attraction">POPULAR ATTRACTIONS IN RWANDA </h2>
        <div className="opogo">
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInLeft">
              <img src="/images/gitt.jpeg" className="young slide-right" />
            </AnimatedOnScroll>
          </div>
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Volcanoes National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Volcanoes National Park, situated in the Northern Province of
                  Rwanda, stands out from other gorilla destinations. It boasts
                  ancient volcanoes reaching nearly 15,000 feet, draped in lush
                  green rainforests of the Virunga Mountains, housing renowned
                  gorilla families. Visiting Rwanda and embarking on gorilla
                  tracking promises an awe-inspiring encounter. Being in such
                  proximity to these remarkable primates and locking eyes with
                  them creates an unforgettable experience beyond comparison.
                  Trumpet Tours offers many activities beyond gorilla tracking
                  in the Volcanoes area. Exploring numerous caves with
                  experienced guides is one option. There are ample hiking
                  trails amidst the majestic Virunga Mountains for outdoor
                  enthusiasts, and cycling opportunities abound. Birdwatching is
                  also rewarding within the park's boundaries. For those
                  interested in community and cultural experiences, Volcanoes
                  Park provides many opportunities to immerse oneself in Rwandan
                  traditional life. Engage in activities such as archery with
                  the Batwa people, listen to village elders, and witness
                  traditional Intore dance performances. With its diverse
                  experiences and landscapes, Volcanoes National Park stands out
                  as a unique destination in East Africa.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Activities:
                  <span className="paragah">
                    Gorilla Trekking, Golden Monkey Trekking, Hiking, Volcano
                    Climbing, Bird Watching, Rwanda's unique cultures at
                    Iby’iwacu Village, Dian Fossey Campus, Musanze Caves,
                    Cycling Tours .
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Akagera National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Nestled in the northeastern corner of Rwanda lies the
                  breathtaking Akagera National Park, boasting stunning
                  landscapes that showcase the best of East Africa. Unlike the
                  rest of the country, Akagera offers warm, low-lying plains
                  dotted with lakes, woodlands, and wetlands teeming with
                  diverse wildlife. The park is a haven for big game
                  enthusiasts, from majestic elephants and imposing buffaloes to
                  graceful zebras and elusive leopards. Not to mention the
                  plethora of antelope species, primates, and predators like
                  hyenas and lions that roam its savannahs, birdwatchers will be
                  in paradise with over 500 avian species, including the rare
                  shoebill stork, gracing the skies above. A safari adventure
                  here promises unparalleled views, with game drives often
                  revealing untouched landscapes and encounters with wildlife
                  undisturbed by crowds. Boating on Lake Ihema offers tranquil
                  moments alongside hippos and Nile crocodiles, adding another
                  dimension to the park's allure. Akagera is not just a
                  destination; it's a sanctuary where nature thrives, and every
                  visit is an unforgettable journey into the heart of Africa's
                  wilderness.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Activities:
                  <span className="paragah">
                    Day/Night Game drive, Day/sunset Boat cruise, Fishing,
                    Camping, Bird watching.{" "}
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
                src="/images/ndaziguhaye.jpeg"
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
              <img src="/images/hm.jpeg" className="young slide-right" alt="" />
            </AnimatedOnScroll>
          </div>

          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Nyungwe National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Nestled in the heart of Rwanda's southwest mountains, Nyungwe
                  National Park is a majestic haven boasting the largest expanse
                  of montane rainforest in eastern Africa. Spanning 1,015 square
                  kilometers within the Albertine Rift eco-region, this
                  biodiverse sanctuary offers a mesmerizing tapestry of
                  ecosystems, from lush rainforests to expansive grasslands.
                  Home to over 300 bird species, 240 tree varieties, and an
                  abundance of unique plant life, Nyungwe enthralls nature
                  enthusiasts and bird watchers alike. Among its rich wildlife,
                  the park harbors 13 primate species, including the famed
                  chimpanzees, inviting visitors to witness these intelligent
                  creatures in their natural habitat. Adventure awaits on the
                  iconic canopy walkway, a suspended trail offering breathtaking
                  views of the forest's upper canopy and prime birdwatching
                  opportunities. Whether embarking on a leisurely hike through
                  diverse trails or immersing in cultural experiences at Banda
                  village, Nyungwe promises an unforgettable journey into the
                  heart of Africa's oldest rainforest.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  {" "}
                  Activities:
                  <span className="paragah">
                    {" "}
                    Canopy walk, Tea plantation, Primate Tracking, Chimpanzee
                    Tracking, Guided Nature Trails, Birding safaris, Waterfalls
                    visit, Camping{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Gishwati Mukura National Park</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Gishwati Mukura National Park encompasses two forests,
                  Gishwati and Mukura, spanning 34 square kilometers alongside a
                  protective perimeter. It rests on a ridge separating the Congo
                  and Nile river basins in Rwanda's western region and is
                  celebrated for its diverse plant and animal life. The park
                  hosts a variety of creatures, including chimpanzees, golden
                  monkeys, and many avian species. Its arboreal landscape boasts
                  a collection of 60 distinct tree varieties comprising
                  indigenous hardwoods and bamboo. Guests can engage in guided
                  nature treks, observe chimpanzees and monkeys, go
                  birdwatching, and visit cascades within the park. Previously
                  ravaged by resettlement, unlawful mining, and livestock
                  farming, the park has been undergoing restoration since 2019.
                  Formalizing its designation as a national park in 2015, it
                  endeavors to bolster tree populations, stabilize terrain, and
                  manage water resources. Moreover, the park presents
                  community-centered pursuits such as agricultural immersions,
                  cultural performances, handicraft workshops, apiculture, and
                  education from traditional healers, fostering forest
                  rejuvenation and enhancing the well-being of neighboring
                  communities.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
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
                src="/images/gishwati.jpeg"
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
                src="/images/lake.jpeg"
                className="young slide-right"
                alt=""
              />
            </AnimatedOnScroll>
          </div>
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Lakes</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Rwanda has many beautiful lakes. Each lake is special and
                  offers different experiences. Lake Kivu is between Rwanda and
                  the Democratic Republic of the Congo. It is famous for its
                  beauty. People like to go there after seeing gorillas or other
                  primates. Kibuye and Gisenyi are good places for swimming at
                  Lake Kivu. Lake Muhazi is close from Kigali. It's nice to
                  visit for a day. There are restaurants and bars by the lake
                  where you can relax. Lake Burera and Lake Ruhondo are called
                  Rwanda's twin lakes. They are peaceful for camping and have
                  fantastic views of the sunrise and sunset. You can swim,
                  kayak, or take a boat ride there. Lake Mugesera is excellent
                  for boating and fishing trips, even though there have been
                  sightings of crocodiles recently. It's a good place for a
                  weekend getaway. Lake Ihema is in Akagera National Park. It's
                  the biggest lake in the park, with lots of wildlife like
                  hippos, crocodiles, and many birds. People who love nature
                  enjoy going there.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Activities:
                  <span className="paragah">
                    kayaking, boat rides, fishing, swimming, Camping
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Kigali city</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  Kigali, the capital city of Rwanda, is a vibrant destination
                  teeming with activities for tourists. Its rich cultural
                  heritage is evident in attractions like the Kigali Genocide
                  Memorial and the Inema Arts Center, offering insight into the
                  country's history and artistic expression. The city's
                  remarkable cleanliness and safety standards make it a
                  welcoming and secure environment for travelers. Visitors can
                  enjoy exploring its well-maintained streets, picturesque
                  landscapes, and bustling markets without safety concerns.
                  Kigali's culinary scene is a delightful blend of traditional
                  Rwandan flavors and international cuisines, providing a
                  diverse dining experience for tourists. Kigali offers all
                  travelers a dynamic and enriching experience. With its
                  combination of cultural richness, safety, and cleanliness,
                  Kigali stands out as a premier tourist destination in Africa.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Activities:{" "}
                  <span className="paragah">
                    Kigali Genocide Memorial Centre, Inema Art Gallery,
                    Nyamirambo Women's Centre, Azizi Life Rural Experience,
                    Question Coffee Master Class, Fazenda Sangha, Nyandungu
                    eco-park
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
            <AnimatedOnScroll animationIn="bounceInLeft">
              <img
                src="/images/kigali.jpeg"
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
                src="/images/king.jpeg"
                className="young slide-right"
                alt=""
              />
            </AnimatedOnScroll>
          </div>

          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">King's Palace Museums</p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  The King's Palace Museum, situated in the Nyanza District of
                  Southern Province, lies 88 km from Kigali City. Offering
                  insight into Rwanda's monarchical system and its demise in the
                  early 1960s due to colonial influence, the palace was
                  meticulously restored to its 19th-century state using
                  traditional materials. Notably, the recent addition of the
                  majestic Longhorned royal cows, known as "Inyambo,"
                  underscores the cultural significance of these animals in
                  Rwandan heritage, symbolizing the king's prestige. Visitors
                  are captivated by the procession of these cows, famed for
                  their impressive horns, gentle demeanor, and the recitation of
                  traditional poems. Adjacent to the traditional palace stands
                  the 1931 modern palace, once the residence of King Mutara
                  Rudagigwa until his demise in 1959, now serving as a
                  repository of Rwanda's history dating back to the 15th
                  century. Perched on the nearby hill of Mwima lies the
                  mausoleum where King Mutara III, Queen Rosalie Gicanda, and
                  King Kigeli IV Ndahindurwa were interred, offering visitors a
                  glimpse into Rwandan royalty's final resting place.
                </p>
              </div>{" "}
              <div style={{ flex: 1 }}>
                <p className="titleside">
                  Other Museums:{" "}
                  <span className="paragah">
                    {" "}
                    The Ethnographic Museum,Museum of Rwesero gallery,Kandt
                    House Museum,Rwanda Art Museum,etc.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="opogoo">
          <div style={{ flex: 1, paddingTop: "80px" }}>
            <div style={{ flex: 1 }} className="cardside">
              <p className="pateah">Kigali Genocide Memorial Central </p>
              <div style={{ flex: 1 }}>
                <p className="paragah">
                  This memorial site stands as the largest of its kind, holding
                  the remains of over 250,000 victims of the Tutsi genocide.
                  These individuals were gathered from various locations around
                  Kigali City, including homes where they were brutally killed
                  and hastily buried, as well as from demolished or burned
                  structures, ditches, rivers, and other hiding spots. Divided
                  into three main exhibition areas, the center commemorates the
                  1994 Genocide against the Tutsi, features a children's
                  memorial and provides insight into global genocidal history.
                  Additionally, the site houses an Education Centre, Gardens,
                  and the Genocide Archive of Rwanda, serving as a profound
                  homage to the deceased while offering valuable educational
                  resources for visitors. Inaugurated in April 2004, this
                  memorial serves as a poignant reminder of the atrocities
                  endured.
                </p>
              </div>{" "}
            </div>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <AnimatedOnScroll animationIn="bounceInRight">
              <img src="/images/gen.jpeg" className="young slide-left" alt="" />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rwanda;
