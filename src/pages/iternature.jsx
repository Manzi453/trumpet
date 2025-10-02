import React, { useState, useEffect } from "react";
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
import { ImCross } from "react-icons/im";
import { FaCircleCheck } from "react-icons/fa6";
import ImageWithContent from "../main/imagecard";

function Itineraries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [itenary, setitenary] = useState(true);
  const [include, setinclude] = useState(false);
  const [exclude, setexclude] = useState(false);
  const [accomodation, setaccomodation] = useState(false);

  const showItenary = () => {
    setitenary(true);
    setinclude(false);
    setexclude(false);
    setaccomodation(false);
  };
  const showInclude = () => {
    setitenary(false);
    setinclude(true);
    setexclude(false);
    setaccomodation(false);
  };
  const showExclude = () => {
    setitenary(false);
    setinclude(false);
    setexclude(true);
    setaccomodation(false);
  };
  const showAccomod = () => {
    setitenary(false);
    setinclude(false);
    setexclude(false);
    setaccomodation(true);
  };

  const details = [
    {
      id: "mag1",
      image: "/images/amazi.jpeg",
      title: "4 days Rwanda Gorillas &Lake Kivu",
      description:
        "Get ready for an incredible 4-day trip in Rwanda with a trusted tour company, Trumpet Tours! First, you'll visit Volcanoes National Park for a thrilling gorilla trek. Imagine being up close with these incredible creatures in their natural home – a once-in-a-lifetime experience! And don't worry, we've got you staying in super comfy places. After the gorilla adventure, we'll head to the stunning Lake Kivu. Picture this: a relaxing boat safari on the calm waters. Amazing views and a peaceful vibe will surround you. We aim to ensure you have a fantastic time, from the exciting gorilla trek to the serene moments by the lake. It's going to be a trip to remember!",

      summary: [
        { title: "Day 1: Arrival in Rwanda" },
        {
          title: "Day 2: Kigali city- transfer to Volcanoes National Park",
        },
        {
          title: "Day 3: Gorilla Trekking Adventure - Transfer to Lake Kivu",
        },
        { title: "Day 4: Lake Kivu-Departure" },
      ],

      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: " Kigali city tour – Transfer to Volcanoes National Park",
          description:
            "Begin your day with breakfast at the hotel, settle any additional expenses, and proceed with the check-out process. A scheduled pick-up will transport you for a captivating Kigali City Tour, encompassing a visit to the Kigali Genocide Memorial Centre and local Art centres.Kigali Genocide Memorial is a place of remembrance and reflection. Learn about Rwanda's tragic history and the resilience of its people. Pay homage to the victims of the 1994 Genocide against Tutsi, gaining insights into the nation's remarkable journey towards healing and reconciliation.The Inema Arts Center catalyzes personal, social, and economic development by promoting creativity. At Inema, you'll experience the power of creative expression in revitalizing the local community and the broader country. Following the morning tours, you will have lunch at one of Kigali's finest restaurants. Post-lunch, embark on a picturesque drive to the North Volcanoes National Park, the habitat of the endangered Mountain Gorillas. The approximately 2.5-hour journey from Kigali unfolds the scenic splendor of the hilly countryside, showcasing why Rwanda is named 'The Land of a Thousand Hills.' Upon reaching your lodge, check-in and take a well-deserved rest.",
        },
        {
          name: "Day 3",
          title: "Gorilla Trekking Adventure - Transfer to Lake Kivu ",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do’s and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas' location. Guides will make stops for rest and photo opportunities along the way. After the trek, you'll reunite with your driver guide for a transfer to Migano hotel for lunch. Following lunch, leave the volcano foothills and head to Lake Kivu (Gisenyi), Embark on a road journey to Rubavu town in the Northwest, with a drive lasting approximately 1 hour and 30 minutes. The captivating scenery and winding road alongside small villages are truly breathtaking. Arriving in the evening. The afternoon is free for optional activities around the lake",
        },
        {
          name: "Day 4",
          title: "Day 4: Lake Kivu-Departure",
          description:
            "Relaxed breakfast from the hotel. Then, enjoy a guided boat cruise on Lake Kivu, exploring different islands and eventually enjoying the ‘local foot massage’ when you stop by the Nyamyumba hot springs. later, return to your Hotel/ lodge or any other city restaurant (Migano hotel &cafe ) for lunch and later to  Kigali. On the road, everywhere you look, vibrant greenery covers the hills – Rwanda is the land of countless lush hills. The drive takes about 3 hours. Finally, head to the hotel or airport for the departure flight.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },

        {
          title:
            "3 nights’ lodging in Luxury, Mid Range or Budget properties as indicated in the itinerary.",
        },

        { title: "All Meals as indicated in the itinerary." },
        {
          title: "Gorilla trekking permits .",
        },
        {
          title: "All other tour activities as mentioned in the itinerary).",
        },
        {
          title: "Ground transport in a 4x4 Land cruiser vehicle.",
        },
        {
          title: "  English-speaking driver guide.",
        },
        {
          title: "  Free mineral drinking water in the vehicle.",
        },
        {
          title: "  FLocal taxes and handling charges.",
        },
      ],
      excluded: [
        {
          title: " International and domestic flights.",
        },
        { title: "Entry visa fees and Travel Insurance." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide" },
        {
          title:
            "Personal expenses such as  shopping, mini bar, porterage, laundry, etc.",
        },
        {
          title:
            " Alcoholic and non-alcoholic drinks that are not accompanying meals.",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag2",
      image: "/images/inye.jpeg",
      title: "4 Days Gorilla & Golden Monkey Treks",
      description:
        "The 4-days Rwanda Gorilla & Golden Monkey Trekking is a highly recommended short safari with an unforgettable experience. During this excursion, you'll spend 3 nights and 4 days exploring Volcanoes National Park, allowing you to track mountain gorillas and golden monkeys in their natural habitat. Additionally, the itinerary includes a Kigali city tour, offering insights into Rwanda's rich historical sites, vibrant markets, and other noteworthy tourist attractions. The focal point of this adventure is Volcanoes National Park, situated in Ruhengeri, the northern part of Rwanda. Not only is it one of Africa's oldest parks, but it's also one of the four places where you can witness the endangered mountain gorillas!",
      summary: [
        { title: "Day 1: Arrival in Rwanda" },
        {
          title: "Day 2: Kigali city- transfer to Volcanoes National Park",
        },
        {
          title: "Day 3: Gorilla Trekking & Iby’wacu Cultural Center ",
        },
        {
          title:
            "Day 4: Golden Monkey Trekking, Transfer to Kigali and International Departure",
        },
      ],

      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Begin your day with breakfast at the hotel, settle any additional expenses, and proceed with the check-out process. A scheduled pick-up will transport you for a captivating Kigali City Tour, encompassing a visit to the Kigali Genocide Memorial Centre and local Art centers. Kigali Genocide Memorial is a place of remembrance and reflection. Learn about Rwanda's tragic history and the resilience of its people. Pay homage to the victims of the 1994 Genocide against Tutsi, gaining insights into the nation's remarkable journey towards healing and reconciliation. The Inema Arts Center catalyzes personal, social, and economic development by promoting creativity. At Inema, you'll experience the power of creative expression in revitalizing the local community and the broader country. Following the morning tours, you will have lunch at one of Kigali's finest restaurants. Post-lunch, embark on a picturesque drive to the North Volcanoes National Park, the habitat of the endangered Mountain Gorillas. The approximately 2.5-hour journey from Kigali unfolds the scenic splendor of the hilly countryside, showcasing why Rwanda is named 'The Land of a Thousand Hills.' Upon reaching your lodge, check-in and take a well-deserved rest.",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do’s and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas' location. Guides will make stops for rest and photo opportunities along the way. After the trek, you'll reunite with your driver guide for a transfer back to the same hotel/lodge for lunch. Following lunch, you will head out for the Iby’iwacu Cultural tour to better understand the Rwandese Culture. Afterward, you will return to your hotel/lodge for dinner and overnight.",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Have breakfast and then spend the morning looking for Golden Monkeys in the lush vegetation near Mt. Sabyinyo. These monkeys are only found in the high-altitude forests of the Virunga Mountains Chain. You'll be guided to track them, and once you find the troop of 50 or more members, you'll spend an hour with them. They move around a lot, jumping from tree to tree with their long tails, making it fun but challenging to take photos. We suggest using a fast shutter speed for better pictures in the low light of the dense undergrowth. After this, you will have lunch at the Migano Hotel and say goodbye to Volcanoes. Take a 2.5-hour drive to Kigali, then head to Kigali Airport for drop-off and departure",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },

        {
          title:
            "3 nights’ lodging in Luxury, Mid Range or Budget properties as indicated in the itinerary.",
        },

        {
          title: "All Golden Monkeys trekking permits and Park entrance fees.",
        },
        {
          title: "All other tour activities as mentioned in the itinerary.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle." },
        { title: "Local taxes and handling." },
      ],
      excluded: [
        {
          title: "International and domestic flights.",
        },
        { title: "Entry visa fees and Travel Insurance " },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide",
        },

        {
          title:
            "Personal expenses such as shopping, mini bar, porterage, laundry, etc.",
        },
        { title: "Other meals are not mentioned in the itinerary." },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag3",
      image: "/images/inga.jpeg",
      title: "5-Days Gorilla Trekking in Rwanda",
      description:
        "This unique 5-days tour in Rwanda with Trumpet Tours will take you to the misty bamboo jungles of the Virungas in Volcanoes National Park. You'll trek to find a family of mountain gorillas led by a silverback. You get to spend time with them but must follow the rules and not touch them. You'll also trek to see the cute golden monkeys in the same jungle. It will be a challenging but memorable adventure. The tour includes visiting Kigali city to learn about Rwanda's history, culture, and the new Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund. This campus tells the story of Dian Fossey and her efforts to protect mountain gorillas.!",
      summary: [
        { title: "Day 1: Arrival in Rwanda" },
        {
          title: "Day 2: Kigali city- transfer to Volcanoes National Park",
        },
        {
          title: "Day 3: Gorilla Trekking Adventure ",
        },
        {
          title: "Day 4: Golden Monkey trekking &Cultural Safari",
        },
        {
          title:
            "Day 5: Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund, Transfer to Kigali and Departure",
        },
      ],

      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Kigali city tour – Transfer to Volcanoes National Park ",
          description:
            "Begin your day with breakfast at the hotel, settle any additional expenses, and proceed with the check-out process. A scheduled pick-up will transport you for a captivating Kigali City Tour, encompassing a visit to the Kigali Genocide Memorial Centre and local Art centers. Kigali Genocide Memorial is a place of remembrance and reflection. Learn about Rwanda's tragic history and the resilience of its people. Pay homage to the victims of the 1994 Genocide against Tutsi, gaining insights into the nation's remarkable journey towards healing and reconciliation. The Inema Arts Center catalyzes personal, social, and economic development by promoting creativity. At Inema, you'll experience the power of creative expression in revitalizing the local community and the broader country. Following the morning tours, you will have lunch at one of Kigali's finest restaurants. Post-lunch, embark on a picturesque drive to the North Volcanoes National Park, the habitat of the endangered Mountain Gorillas. The approximately 2.5-hour journey from Kigali unfolds the scenic splendor of the hilly countryside, showcasing why Rwanda is aptly named 'The Land of a Thousand Hills.' Upon reaching your lodge, check-in and take a well-deserved rest.",
        },
        {
          name: "Day 3",
          title: "Gorilla  Trekking Adventure",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do’s and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas' location. After finding the Gorillas, any exhaustion is quickly overshadowed by the exhilarating and profound wildlife encounter, often hailed as one of the most thrilling experiences on the planet. When your hour with the Gorilla group concludes, head back to the initial meeting point where your driver guide awaits. They will then transport you back to the lodge for lunch, allowing you to spend the afternoon at your leisure, contemplating the life-changing experience with the Gorillas.",
        },
        {
          name: "Day 4",
          title: "Golden Monkey trekking &Cultural Safari ",
          description:
            "After having breakfast early, head to the Volcanoes National Park office; there, you'll be assigned a group to track Golden Monkeys. At 7 AM, the trackers will give you information, and then you'll drive to the trail for tracking. Golden Monkeys are attractive with gold bodies, cheeks, tails, black limbs, and crowns. They live in groups of up to 30 and mostly eat leaves, fruit, and possibly insects. Tracking takes 2 to 4 hours, and once you find them, you can spend an hour observing them in their natural habitat. Return to the lodge for a shower and lunch. In the afternoon, visit the Gorilla Guardians Village, an organization helping reformed poachers and communities around the park. Learn about Rwandan culture and traditions from the locals. After this unique experience, drive back to the lodge/hotel for dinner and an overnight stay.",
        },
        {
          name: "Day 5",
          title:
            "Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund, Transfer to Kigali and Departure ",
          description:
            "After having breakfast on the last day, you will check out the newly opened Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund. Here, you will learn a lot about the legacy of Dian Fossey and the efforts to conserve Mountain Gorillas. The Dian Fossey Gorilla Fund, established in 1967, works to protect and study Gorillas and their habitats. They also aim to empower people living near the Gorillas' forest homes. With nearly 300 team members in Rwanda and the Democratic Republic of the Congo, it is the world's oldest and largest organization dedicated to Gorilla conservation. In 2022, the organization moved to its first permanent home, the Ellen DeGeneres Campus, near Volcanoes National Park in a beautifully reforested landscape. The campus serves as the workplace for the Fossey Fund team and is open to the public. Visitors can explore the modern public exhibit and nature trails and interact with the dedicated Fossey Fund staff who have devoted their careers to saving Mountain Gorillas. After the tour, say goodbye to Volcanoes and head to the Migano Hotel and Cafe. From there, you can drive back to Kigali and proceed to Kigali Airport for your drop-off and departure.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },

        {
          title:
            "4 nights’ lodging in Luxury, Mid Range or Budget properties as indicated in the itinerary .",
        },

        { title: "All Meals as indicated in the itinerary." },
        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "All Golden Monkeys trekking permits and Park entrance fees.",
        },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges. ." },
      ],
      excluded: [
        {
          title: "International and domestic flights.",
        },
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide .",
        },
        {
          title:
            "Personal expenses such as shopping, mini bar, porterage, laundry, etc.",
        },
        {
          title: "Other meals and not mentioned in the itinerary.",
        },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals.",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag4",
      image: "/images/comp.jpeg",
      title: "5 days Nyungwe National Park",
      description:
        "Experience the wonders of Nyungwe Forest National Park during our 5-days tour, immersing you in the breathtaking beauty of one of Africa's last untouched natural forest reserves. You will encounter habituated chimpanzees and a variety of primate species, such as the Rwenzori Black & White Colobus. Delight in the park's rich birdlife, boasting over 300 species, including 16 found nowhere else, while observing its diverse mammal population of 75 species. Embark on this journey that commences and concludes in Kigali.",
      summary: [
        { title: "Day 1: Arrival in Rwanda" },
        {
          title: "Day 2: Transfer to Nyungwe National Park-Canopy walk",
        },
        {
          title: "Day 3: Chimpanzee Trekking and tea plantation visit  ",
        },
        {
          title: "Day 4: Waterfall trail and transfer back to Kigali ",
        },
        {
          title: "Day 5: City tour- Departure",
        },
      ],

      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title: "Transfer to Nyungwe National Park-Canopy walk ",
          description:
            "In the early morning, you'll enjoy breakfast before we pick you up at 7:00 AM from your hotel in Kigali to head towards Nyungwe National Park in the southwest. The distance between Kigali and Nyungwe National Park is around 230 kilometers, and the trip usually takes 5 to 6 hours, with a lunch break in Huye town along the way. Upon arrival at the park's reception, visitors will register before embarking on a canopy walk tour, providing a unique vantage point to admire the tropical rainforest's beauty. With stunning vistas of lush hills, sprawling tea plantations, and dense, unexplored areas, the canopy walk offers an immersive experience into the heart of this vibrant ecosystem, leaving guests awe-inspired by the wonders of nature.",
        },
        {
          name: "Day 3",
          title: "Chimpanzee Trekking and tea plantation visit",
          description:
            "After breakfast, Join your park guide for an unforgettable Chimpanzee trekking adventure in Cyamudongo Forest as early as 5:00 am. Gain insights into these fascinating primates, our closest relatives sharing 96% of our DNA. Upon completion of the trek, enjoy a refreshing lunch back at your base. our afternoon will be filled with exploration as we set off at 3 PM for an insightful tea plantation tour within the picturesque landscapes of Nyungwe National Park. As the tour concludes, we'll return to the comforts of our lodge/hotel, reflecting on the day's discoveries and experiences.",
        },
        {
          name: "Day 4",
          title: "Waterfall trail and transfer back to Kigali  ",
          description:
            "Following breakfast, we will proceed to the park office in the morning. The briefing will take place at the reception area of Nyungwe National Park before embarking on the walk towards the waterfall. Along the route, there is an opportunity to spot monkeys and learn about various plant species in the forest. After the waterfall visit, lunch will be provided at the hotel before we return to Kigali.",
        },
        {
          name: "Day 5",
          title: "City tour- Departure ",
          description:
            "Begin your day with breakfast at the hotel. A scheduled pick-up will transport you for a captivating Kigali City Tour, encompassing a visit to the Kigali Genocide Memorial Centre and local Art centers. Kigali Genocide Memorial is a place of remembrance and reflection. Learn about Rwanda's tragic history and the resilience of its people. Pay homage to the victims of the 1994 Genocide against Tutsi, gaining insights into the nation's remarkable journey towards healing and reconciliation. Following the morning tours, you will have lunch at one of Kigali's finest restaurants and then head to Kigali Airport for drop-off and departure.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title: "  All other tour activities as mentioned in the itinerary.",
        },

        {
          title:
            "4 nights’ lodging in Luxury, Mid Range or Budget properties as indicated in the itinerary .",
        },

        { title: "All Meals as indicated in the itinerary." },
        {
          title: "Chimpanzee permit.",
        },
        {
          title: "Park entrance fees",
        },
        {
          title: "All other tour activities as mentioned in the itinerary   ",
        },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges. ." },
      ],
      excluded: [
        {
          title: "International and domestic flights.",
        },
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide .",
        },
        {
          title:
            "Personal expenses such as shopping, mini bar, porterage, laundry, etc.",
        },
        {
          title: "Other meals and not mentioned in the itinerary.",
        },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals.",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag5",
      image: "/images/zebra.jpeg",
      title: "6 Days Rwanda Akagera Safari and Gorilla Trekking Tour",
      description:
        "Experience a 6-day adventure with Trumpet Tours in Rwanda that seamlessly blends the quintessential African Safari with a rare chance to observe the awe-inspiring gorillas and golden monkeys of the Virunga Massif. Begin your expedition in the expansive savannahs and verdant marshlands of Akagera National Park, where you can seek out lions and the highly endangered black rhinoceros. Next, immerse yourself in the ethereal atmosphere of Volcanoes National Park's mist-covered forests, where you'll have the extraordinary opportunity to encounter the endangered great apes.!",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali " },
        {
          title:
            "Day 2: TVisit the Kigali Genocide Memorial – Transfer to Akagera National Park – Game drive ",
        },
        {
          title:
            "Day 3: Akagera National Park (Game drives & Afternoon boat ride)  ",
        },
        {
          title:
            "Day 4: Transfer to Musanze, Volcanoes National Park via Kigali",
        },
        {
          title:
            "Day 5: Gorilla Trekking & Visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund",
        },
        {
          title:
            "Day 6: Rwandan Cultural Experience at Gorilla Guardians Village-Kigali-departure",
        },
      ],

      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda – Kigali",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, which is approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title:
            "Visit the Kigali Genocide Memorial – Transfer to Akagera National Park – Game drive ",
          description:
            "You'll start your day with breakfast at the hotel before checking out and settling any additional expenses. A private driver-guide will then take you to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Afterward, you'll journey to Akagera National Park, where you'll check in at the hotel/lodge, have lunch, and embark on an afternoon Game drive to observe the park's wildlife. This tour offers a solemn reflection on Rwanda's history and a thrilling exploration of its natural beauty",
        },
        {
          name: "Day 3",
          title: "Akagera National Park -Game drives & Afternoon boat ride ",
          description:
            "Begin your day with an early rise to embark on an exhilarating safari game drive in Akagera National Park, led by a knowledgeable guide. As you traverse through the stunning landscape, you'll have the opportunity to witness diverse wildlife. From majestic buffalo and lions to graceful elephants and giraffes, the park is teeming with fascinating species, such as the elusive black rhino and the spotted hyena. Additionally, bird enthusiasts will be delighted by the park's impressive bird population, which includes the magnificent shoebill and the red-faced barbet. Enjoy a picnic lunch amidst nature before continuing your adventure with an afternoon game drive in this renowned Big-five parkland. Afterward, you will enjoy the boat ride in Akagera as the sunset paints the sky with mesmerizing hues. After the tour, you'll stay at the hotel/lodge in the park.",
        },
        {
          name: "Day 4",
          title: "ATransfer to Musanze, Volcanoes National Park via Kigali",
          description:
            "Begin your day by enjoying a relaxed breakfast, followed by assistance checking out your accommodation. Your journey will then commence with a 3-hour transfer back to Kigali, ensuring you arrive in time for lunch at one of the finest restaurants in Kigali. Afterward, you'll embark on a scenic 2.5-hour drive to Musanze and Volcanoes National Park. Upon arrival in the evening, you'll be warmly welcomed at the Hotel/lodge with a refreshing drink during check-in. Dinner will be served, and you'll spend the night at the hotel/lodge.",
        },
        {
          name: "Day 5",
          title:
            "Gorilla Trekking & Visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund",
          description:
            "After an early breakfast, you'll head to the park headquarters for a briefing on gorilla trekking rules. Assigned a gorilla family and guide, you'll embark on a trek guided by a ranger, lasting 1 to 5 hours. Once gorillas are found, you'll spend an hour observing them while adhering to safety guidelines. Afterward, return to the starting point, meet your driver guide, and return to the Lodge/hotel for lunch. Later, at 3:00 pm, visit the Ellen DeGeneres Campus to learn about Dian Fossey's gorilla conservation work in Rwanda. The campus supports research, conservation, and community empowerment efforts, serving as a hub for education and outreach. Afterward, you will return to the lodge/hotel for an overnight stay.",
        },
        {
          name: "Day 6",
          title:
            "Rwandan Cultural Experience at Gorilla Guardians Village-Kigali-departure",
          description:
            "In the morning, after enjoying breakfast, you'll have the chance to explore a nearby cultural village to gain insights into Rwanda's traditional lifestyle. This excursion lets you engage with locals and immerse yourself in their customs and heritage. Located in Kinigi, Musanze, the Gorilla Guardians Village is a community-driven tourism project to support the surrounding communities near Volcanoes National Park. Its mission is to offer sustainable livelihoods to locals while advocating for mountain gorilla conservation. The village provides various activities, such as traditional dances, craft workshops, and community tours. Following the tour, you'll return to your hotel for lunch. In the afternoon, you'll be transported to Kigali International Airport, where you'll say goodbye to your driver-guide and proceed with check-in for your departing flight.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },

        {
          title:
            "5 nights’ lodging in Luxury, Mid Range or Budget properties as indicated in the itinerary .",
        },

        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "Park entrance fees",
        },
        {
          title: "All other tour activities as mentioned in the itinerary   ",
        },
        {
          title: "Ground transport in a 4x4 Land cruiser vehicle  ",
        },
        {
          title: "English-speaking driver guide ",
        },
        {
          title: "Free mineral drinking water in the vehicle",
        },
        {
          title: "Local taxes and handling charges.",
        },
      ],
      excluded: [
        {
          title: "International and domestic flights.",
        },
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide .",
        },
        {
          title:
            "Personal expenses such as shopping, mini bar, porterage, laundry, etc.",
        },
        {
          title: "Other meals and not mentioned in the itinerary.",
        },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals.",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag4",
      image: "/images/hide.jpeg",
      title: "5 days Nyungwe National Park",
      description:
        "Get ready for an awesome 4-days trip in Rwanda with a trusted tour company Trumpet Tours! First up, you'll visit Volcanoes National Park for a thrilling gorilla trek. Imagine being up close with these incredible creatures in their natural home – a once-in-a-lifetime experience! And don't worry, we've got you staying in super comfy places. After the gorilla adventure, we'll head to the stunning Lake Kivu. Picture this: a relaxing boat safari on the calm waters. Amazing views and a peaceful vibe will surround you. Our goal is to ensure you have a fantastic time, from the exciting gorilla trek to the serene moments by the lake. It's going to be a trip to remember!",

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
      ],
      included: [
        {
          title: "Airport transfers and meet and assist.",
        },
        { title: "City tour with Genocide memorial visit." },

        { title: "Private  a 4×4 safari ." },

        { title: "Golden Monkeys trek." },
      ],
      excluded: [
        {
          title: "Visa fees.",
        },
        { title: "Meals; Lunch and Dinners." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "Insurance" },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag5",
      image: "/images/zebra.jpg",
      title: "6 Days Rwanda Akagera Safari and Gorilla Trekking Tour",
      description:
        "Get ready for an awesome 4-days trip in Rwanda with a trusted tour company Trumpet Tours! First up, you'll visit Volcanoes National Park for a thrilling gorilla trek. Imagine being up close with these incredible creatures in their natural home – a once-in-a-lifetime experience! And don't worry, we've got you staying in super comfy places. After the gorilla adventure, we'll head to the stunning Lake Kivu. Picture this: a relaxing boat safari on the calm waters. Amazing views and a peaceful vibe will surround you. Our goal is to ensure you have a fantastic time, from the exciting gorilla trek to the serene moments by the lake. It's going to be a trip to remember!",

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
      ],
      included: [
        {
          title: "Airport transfers and meet and assist.",
        },
        { title: "City tour with Genocide memorial visit." },

        { title: "Private  a 4×4 safari ." },

        { title: "Golden Monkeys trek." },
      ],
      excluded: [
        {
          title: "Visa fees.",
        },
        { title: "Meals; Lunch and Dinners." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "Insurance" },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag6",
      image: "/images/hide.jpeg",
      title: "6 Days Rwanda Great Apes Safari – Gorilla & Chimpanzee Treks",
      description:
        "Embark on an exciting 6-day adventure in Rwanda with Trumpet Tours, where you'll have unforgettable encounters with two amazing ape species: mountain gorillas and chimpanzees. Explore Nyungwe National Park to find a community of chimpanzees, then journey to Volcanoes National Park to witness a gorilla family in their natural habitat. The mystical atmosphere of the jungle may be physically and emotionally demanding, but it promises to leave you with cherished memories that will last a lifetime. Get ready to create unforgettable experiences on your Rwanda Safari adventure.!",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali " },
        {
          title:
            "Day 2:  Transfer to Nyungwe National Park via King’s Palace  ",
        },
        {
          title: "Day 3: Chimpanzee trekking – Canopy walk experience  ",
        },
        {
          title: "Day 4: Nyungwe to Musanze /Volcanoes National Park  ",
        },
        {
          title:
            "Day 5:  Gorilla Trekking Experience (Volcanoes National Park)",
        },
        {
          title:
            "Day 6:  Transfer to Kigali – Visit the Kigali Genocide Memorial – Departure ",
        },
      ],

      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title: "Transfer to Nyungwe National Park via King’s Palace ",
          description:
            "After enjoying breakfast and settling any additional charges at the hotel, proceed to the south towards Nyungwe National Park, Along the way, make a stop at the King's Palace Museum in Nyanza, also known as the Rukali Palace, which is a historical site that was the residence of the Rwandan monarchy before colonial times. It's an important cultural and historical landmark in Rwanda. You'll also be able to encounter the renowned Royal long-horned cows known as 'Inyambo. Afterward, indulge in a delightful lunch in the town of Huye before resuming your journey, passing through verdant tea fields scattered across the hillsides and charming wooden dwellings characteristic of the Nyungwe Forest surroundings. Upon reaching your accommodation base, complete the check-in process, enjoy dinner, and unwind for the evening",
        },
        {
          name: "Day 3",
          title: "Chimpanzee trekking – Canopy walk experience",
          description:
            "After having breakfast, you will Embark on an exclusive chimpanzee discovery trek in Nyungwe National Park, where expert guides will accompany you through the protected jungle surrounding Nyungwe House. This area is home to a rare population of chimpanzees and groups of Colobus monkeys. As you venture through the dense foliage, you may encounter chimpanzees observing from the fig trees or witness them leaping through the canopy. Each trek offers a unique experience, with these captivating creatures always ready to surprise you. Following the chimpanzee trek, return to the lodge for an early lunch before embarking on a guided canopy walk. The Canopy Walkway, comprising three bridges and towers spanning 160 meters, is part of the Igishigishi Trail tour. Accompanied by a knowledgeable park guide, you'll explore the forest canopy and gain insights into its vital role within the tropical rainforest ecosystem. ",
        },
        {
          name: "Day 4",
          title: "Transfer to Musanze Volcanoes National Park  ",
          description:
            "Enjoy a delightful breakfast at the hotel before embarking on a scenic drive to Musanze, passing through Kibuye, where you'll be treated to breathtaking Lake Kivu vistas and have lunch on the way to the Migano Hotel in Gisenyi. Upon arrival at the hotel/lodge in Musanze, a warm welcome awaits you as the lodge staff greets you and escorts you to the reception area. They'll assist with check-in before indulging in a delicious hot lunch. Take advantage of the relaxing afternoon to unwind and prepare for the upcoming hike, ensuring you're fully energized and ready for the adventure ahead.",
        },
        {
          name: "Day 5",
          title: "Gorilla Trekking Experience (Volcanoes National Park) ",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do’s and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas' location. Local trackers, who are intimately familiar with the forest, will lead you to encounter a gorilla family. Spending an hour observing these magnificent creatures as they go about their daily activities – feeding, playing, resting, and caring for their young – is an unforgettable experience, especially when face-to-face with a majestic silverback. Guides will make stops for rest and photo opportunities along the way. After the trek, you'll reunite with your driver guide for a transfer back to your lodge, where you will have your lunch and have the rest of the day to relax and unwind at your leisure..",
        },
        {
          name: "Day 6",
          title:
            "Transfer to Kigali – Visit the Kigali Genocide Memorial – Departure ",
          description:
            "Enjoy breakfast at the hotel, complete the check-out process, and then embark on a journey back to Kigali city. Upon reaching Kigali, the driver-guide will then take you to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Afterward, indulge in lunch at the restaurant/hotel. Following lunch, you'll be transferred to Kigali International Airport, where you'll bid farewell to your driver-guide and proceed with check-in for your outbound flight.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },

        {
          title:
            "5 nights’ lodging in Luxury, Mid Range or Budget properties as indicated in the itinerary.",
        },

        { title: "All Meals as indicated in the itinerary." },
        { title: "Chimpanzee trekking permits ." },
        { title: "Park entrance fees." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle ." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights.",
        },
        { title: "Entry visa fees and Travel Insurance." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide .",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        { title: " Other meals  not mentioned in the itinerary" },
        {
          title:
            "    Alcoholic and non-alcoholic drinks that are not accompanying meals",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag4",
      image: "/images/forest.jpg",
      title: "5 days Nyungwe National Park",
      description:
        "Go on an exciting 8-days trip to Rwanda with Trumpet Tours and meet amazing primates like mountain gorillas and chimpanzees. Explore Nyungwe National Park to find chimpanzees, and then visit Volcanoes National Park to see gorillas. You'll also trek to see golden monkeys in the same area. It's an adventure you will remember forever!",

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
      ],
      included: [
        {
          title: "Airport transfers and meet and assist.",
        },
        { title: "City tour with Genocide memorial visit." },

        { title: "Private  a 4×4 safari ." },

        { title: "Golden Monkeys trek." },
      ],
      excluded: [
        {
          title: "Visa fees.",
        },
        { title: "Meals; Lunch and Dinners." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "Insurance" },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag6",
      image: "/images/chimpa.jpg",
      title: "6 Days Rwanda Great Apes Safari – Gorilla & Chimpanzee Treks",
      description:
        "Get ready for an awesome 4-days trip in Rwanda with a trusted tour company Trumpet Tours! First up, you'll visit Volcanoes National Park for a thrilling gorilla trek. Imagine being up close with these incredible creatures in their natural home – a once-in-a-lifetime experience! And don't worry, we've got you staying in super comfy places. After the gorilla adventure, we'll head to the stunning Lake Kivu. Picture this: a relaxing boat safari on the calm waters. Amazing views and a peaceful vibe will surround you. Our goal is to ensure you have a fantastic time, from the exciting gorilla trek to the serene moments by the lake. It's going to be a trip to remember!",

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
      ],
      included: [
        {
          title: "Airport transfers and meet and assist.",
        },
        { title: "City tour with Genocide memorial visit." },

        { title: "Private  a 4×4 safari ." },

        { title: "Golden Monkeys trek." },
      ],
      excluded: [
        {
          title: "Visa fees.",
        },
        { title: "Meals; Lunch and Dinners." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "Insurance" },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag4",
      image: "/images/forest.jpg",
      title: "5 days Nyungwe National Park",
      description:
        "Get ready for an awesome 4-days trip in Rwanda with a trusted tour company Trumpet Tours! First up, you'll visit Volcanoes National Park for a thrilling gorilla trek. Imagine being up close with these incredible creatures in their natural home – a once-in-a-lifetime experience! And don't worry, we've got you staying in super comfy places. After the gorilla adventure, we'll head to the stunning Lake Kivu. Picture this: a relaxing boat safari on the calm waters. Amazing views and a peaceful vibe will surround you. Our goal is to ensure you have a fantastic time, from the exciting gorilla trek to the serene moments by the lake. It's going to be a trip to remember!",

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
      ],
      included: [
        {
          title: "Airport transfers and meet and assist.",
        },
        { title: "City tour with Genocide memorial visit." },

        { title: "Private  a 4×4 safari ." },

        { title: "Golden Monkeys trek." },
      ],
      excluded: [
        {
          title: "Visa fees.",
        },
        { title: "Meals; Lunch and Dinners." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "Insurance" },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag6",
      image: "/images/chimpa.jpg",
      title: "6 Days Rwanda Great Apes Safari – Gorilla & Chimpanzee Treks",
      description:
        "Get ready for an awesome 4-days trip in Rwanda with a trusted tour company Trumpet Tours! First up, you'll visit Volcanoes National Park for a thrilling gorilla trek. Imagine being up close with these incredible creatures in their natural home – a once-in-a-lifetime experience! And don't worry, we've got you staying in super comfy places. After the gorilla adventure, we'll head to the stunning Lake Kivu. Picture this: a relaxing boat safari on the calm waters. Amazing views and a peaceful vibe will surround you. Our goal is to ensure you have a fantastic time, from the exciting gorilla trek to the serene moments by the lake. It's going to be a trip to remember!",

      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 3",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 4",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
      ],
      included: [
        {
          title: "Airport transfers and meet and assist.",
        },
        { title: "City tour with Genocide memorial visit." },

        { title: "Private  a 4×4 safari ." },

        { title: "Golden Monkeys trek." },
      ],
      excluded: [
        {
          title: "Visa fees.",
        },
        { title: "Meals; Lunch and Dinners." },

        {
          title:
            "nternational, local Airfares, Tips and other things with Personal Nature expenses.",
        },

        { title: "Insurance" },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag7",
      image: "/images/sumba.jpeg",
      title: "7 Days Rwanda Akagera Safari & Gorilla Trekking",
      description:
        "This 7-days adventure in Rwanda with Trumpet Tours mixes the traditional African Safari with a special chance to see the fantastic gorillas and golden monkeys of the Virunga Mountains, all in Rwanda. Begin your trip in the vast open plains and green marshes of Akagera National Park, where you can look for lions and the rare black rhinoceros. Next, explore the foggy forests of Volcanoes National Park to meet the endangered great apes.",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali" },
        {
          title:
            "Day 2:  Visit the Kigali Genocide Memorial – Transfer to Akagera National Park –Game drive",
        },
        {
          title:
            "Day 3: Akagera National Park (Game drives & Afternoon boat ride)  ",
        },
        {
          title:
            "Day 4: Transfer to Musanze, Volcanoes National Park via Kigali",
        },
        {
          title:
            "Day 5:   Gorilla Trekking & Visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund ",
        },
        {
          title:
            "Day 6:  Golden Monkey Trekking & Rwandan Cultural Experience at Gorilla Guardians Village            ",
        },
        {
          title: "Day 7:  Transfer Back to Kigali – Shopping  – Departure    ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda – Kigali          ",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title:
            "Visit the Kigali Genocide Memorial – Transfer to Akagera National Park –Game drive",
          description:
            "You'll start your day with breakfast at the hotel before checking out and settling any additional expenses. A private driver-guide will then take you to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Afterward, you'll journey to Akagera National Park, where you'll check in at the hotel/lodge, have lunch, and embark on an afternoon Game drive to observe the park's wildlife. This tour offers a solemn reflection on Rwanda's history and a thrilling exploration of its natural beauty.",
        },
        {
          name: "Day 3",
          title: "Akagera National Park (Game drives & Afternoon boat ride)   ",
          description:
            "Begin your day with an early rise to embark on an exhilarating safari game drive in Akagera National Park, led by a knowledgeable guide. As you traverse through the stunning landscape, you'll have the opportunity to witness diverse wildlife. From majestic buffalo and lions to graceful elephants and giraffes, the park is teeming with fascinating species, such as the elusive black rhino and the spotted hyena. Additionally, bird enthusiasts will be delighted by the park's impressive bird population, which includes the magnificent shoebill and the red-faced barbet. Enjoy a picnic lunch amidst nature before continuing your adventure with an afternoon game drive in this renowned Big-five parkland. Afterward, you will enjoy the boat ride in Akagera as the sunset paints the sky with mesmerizing hues.   ",
        },
        {
          name: "Day 4",
          title: "Transfer to Musanze, Volcanoes National Park via Kigali ",
          description:
            "Begin your day by enjoying a relaxed breakfast, followed by assistance checking out your accommodation. Your journey will then commence with a 3-hour transfer back to Kigali, ensuring you arrive in time for lunch at one of the finest restaurants in Kigali. Afterward, you'll embark on a scenic 2.5-hour drive to Musanze and Volcanoes National Park. Upon arrival in the evening, you'll be warmly welcomed at the Hotel/lodge with a refreshing drink during check-in. Dinner will be served, and you'll spend the night at the hotel/lodge.",
        },
        {
          name: "Day 5",
          title:
            "Gorilla Trekking & Visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund ",
          description:
            "After an early breakfast, you'll head to the park headquarters for a briefing on gorilla trekking rules. Assigned a gorilla family and guide, you'll embark on a trek guided by a ranger, lasting 1 to 5 hours. Once gorillas are found, you'll spend an hour observing them while adhering to safety guidelines. Afterward, return to the starting point, meet your driver guide, and return to the Lodge/hotel for lunch. Later, at 3:00 pm, visit the Ellen DeGeneres Campus to learn about Dian Fossey's gorilla conservation work in Rwanda. The campus supports research, conservation, and community empowerment efforts, serving as a hub for education and outreach. Afterward, you will return to the lodge/hotel for an overnight stay.",
        },
        {
          name: "Day 6",
          title:
            " Golden Monkey Trekking & Rwandan Cultural Experience at Gorilla Guardians Village ",
          description:
            "You'll wake up early, have breakfast, and then go to the park office for a meeting about the rules for tracking golden monkeys. After the meeting, you'll be assigned a group of golden monkeys to track and a guide to lead you. Tracking usually lasts 1 to 3 hours, and you'll spend an hour watching the monkeys play. Golden monkeys are very pretty, with golden bodies, cheeks, tails, black limbs, crowns, and tail ends. We don't know much about how they behave, except that they live in groups of up to 30 and mainly eat leaves, fruit, and insects. They live in the highland forests of the Virungas, especially near bamboo, which is also where mountain gorillas live. They face similar dangers like traps and people moving into their homes, so they're critically endangered. After this fantastic experience, you'll visit a nearby village to learn about Rwanda's traditional way of life. This will let you talk to locals and learn about their customs. Gorilla Guardians Village is a project in Kinigi, Musanze, set up to help people living near Volcanoes National Park. It wants to help locals make money in a way that also helps protect mountain gorillas. The village offers things like traditional dances, craft workshops, and tours of the community. After this tour, you'll return for lunch to your hotel/lodge. The rest of the day is free—dinner and sleep at the hotel/lodge.",
        },
        {
          name: "Day 7",
          title: "Transfer Back to Kigali – Shopping  – Departure",
          description:
            "After enjoying a relaxed breakfast at the hotel, take a moment to say goodbye to the lovely staff. Then, drive back to Kigali. Once you arrive, you can shop for souvenirs made in Rwanda if you'd like. After that, you'll go to a restaurant for lunch. Depending on your flight, you'll go to Kigali International Airport for departure. You'll say goodbye to your driver-guide and check in for your flight.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },

        {
          title:
            "6 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits         ",
        },
        { title: " Park entrance fees " },
        {
          title:
            " All other tour activities, as mentioned in the itinerary        ",
        },
        { title: " Ground transport in a 4x4 Land cruiser vehicle        " },

        { title: " English-speaking driver guides " },
        { title: " Free mineral drinking water in the vehicle " },
        { title: " Local taxes and handling charges. " },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        {
          title:
            "All Tips to Hotels/Lodges/Camps staff and Safari Guide        .",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary        " },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals        ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag8",
      image: "/images/gogo.jpeg",
      title: "8 Days Primates of Rwanda Safari",
      description:
        "Go on an exciting 8-days trip to Rwanda with Trumpet Tours and meet amazing primates like mountain gorillas and chimpanzees. Explore Nyungwe National Park to find chimpanzees, and then visit Volcanoes National Park to see gorillas. You'll also trek to see golden monkeys in the same area. It's an adventure you will remember forever!",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali" },
        {
          title:
            "Day 2:  Transfer to Nyungwe National Park via King's Palace   ",
        },
        {
          title: "Day 3: Chimpanzee trekking – Canopy walk experience  ",
        },
        {
          title: "Day 4: Colobus monkey Trekking – Gisakura Tea Factory",
        },
        {
          title: "Day 5:  Transfer to Musanze, Volcanoes National Park    ",
        },
        {
          title:
            "Day 6:  Gorilla Trekking & Visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund            ",
        },
        {
          title:
            "Day 7:  Golden Monkey Trekking – Cultural Experience at Gorilla Guardians Village   ",
        },
        {
          title:
            "Day 8:  Transfer back to Kigali – Kigali Genocide Memorial – Departure ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda – Kigali ",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title: "Transfer to Nyungwe National Park via King's Palace",
          description:
            "After enjoying breakfast and settling any additional charges at the hotel, proceed to the south towards Nyungwe National Park, Along the way, make a stop at the King's Palace Museum in Nyanza, also known as the Rukali Palace, which is a historical site that was the residence of the Rwandan monarchy before colonial times. It's an important cultural and historical landmark in Rwanda. You'll also be able to encounter the renowned Royal long-horned cows known as 'Inyambo. Afterward, indulge in a delightful lunch in the town of Huye before resuming your journey, passing through verdant tea fields scattered across the hillsides and charming wooden dwellings characteristic of the Nyungwe Forest surroundings. Upon reaching your accommodation base, complete the check-in process, enjoy dinner, and unwind for the evening.",
        },
        {
          name: "Day 3",
          title: "Chimpanzee trekking – Canopy walk experience  ",
          description:
            "After having breakfast, you will Embark on an exclusive chimpanzee discovery trek in Nyungwe National Park, where expert guides will accompany you through the protected jungle surrounding Nyungwe House. This area is home to a rare population of chimpanzees and groups of Colobus monkeys. As you venture through the dense foliage, you may encounter chimpanzees observing from the fig trees or witness them leaping through the canopy. Each trek offers a unique experience, with these captivating creatures always ready to surprise you. Following the chimpanzee trek, return to the lodge for an early lunch before embarking on a guided canopy walk,A suspended bridge towering 70 meters above the forest floor. This experience offers visitors an intimate encounter with nature, providing stunning vistas of the forest canopy, distant views of the evergreen mountains, and the shimmering waters of Lake Kivu. Encounter diverse birdlife, colorful butterflies, and breathtaking surroundings. After the hike, return to your accommodation for dinner and an overnight stay.",
        },
        {
          name: "Day 4",
          title: " Colobus monkey Trekking – Gisakura Tea Factory",
          description:
            "After having breakfast at the hotel, you'll head to the park headquarters for a briefing at 7:00 am. Then, at 8:00 am, you'll start your walk to find Colobus monkeys. A guide will lead you through the forest. Depending on the monkeys ' location, the trek can take 2 to 4 hours. These monkeys are black and white, and around 350 to 400 of them are in the group, which is the largest group of Angolan Colobus Monkeys in Africa. They're fascinating to watch in their natural home. They move around the treetops, making noise. They spread seeds by eating fruit and leaving the leftovers around. After coming back to the hotel, you'll have lunch. Then, you'll go on a guided tour of the Gisakura Tea Plantation and Factory. Rwanda exports a lot of tea, and you'll see the tea plants covering the mountains, making a green contrast to the blue skies and sunshine.",
        },
        {
          name: "Day 5",
          title: "Transfer to Musanze, Volcanoes National Park  ",
          description:
            "Enjoy a delightful breakfast at the hotel before embarking on a scenic drive to Musanze, passing through Kibuye, where you'll be treated to breathtaking Lake Kivu vistas and have lunch on the way to the Migano Hotel in Gisenyi. Upon arrival at the hotel/lodge in Musanze, a warm welcome awaits you as the lodge staff greets you and escorts you to the reception area. They'll assist with check-in before indulging in a delicious hot lunch. Take advantage of the relaxing afternoon to unwind and prepare for the upcoming hike, ensuring you're fully energized and ready for the adventure ahead.",
        },
        {
          name: "Day 6",
          title:
            "Gorilla Trekking & Visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund    ",
          description:
            "After an early breakfast, you'll head to the park headquarters for a briefing on gorilla trekking rules. Assigned a gorilla family and guide, you'll embark on a trek guided by a ranger, lasting 1 to 5 hours. Once gorillas are found, you'll spend an hour observing them while adhering to safety guidelines. Afterward, return to the starting point, meet your driver guide, and return to the hotel for lunch. Later, at 3:00 pm, visit the Ellen DeGeneres Campus to learn about Dian Fossey's gorilla conservation work in Rwanda. The campus supports research, conservation, and community empowerment efforts, serving as a hub for education and outreach.  ",
        },
        {
          name: "Day 7",
          title:
            "Golden Monkey Trekking – Cultural Experience at Gorilla Guardians Village  ",
          description:
            "You'll wake up early, have breakfast, and then go to the park office for a meeting about the rules for tracking golden monkeys. After the meeting, you'll be assigned a group of golden monkeys to track and a guide to lead you. Tracking usually lasts 1 to 3 hours, and you'll spend an hour watching the monkeys play. Golden monkeys are very pretty, with golden bodies, cheeks, tails, black limbs, crowns, and tail ends. We don't know much about how they behave, except that they live in groups of up to 30 and mainly eat leaves, fruit, and insects. They live in the highland forests of the Virungas, especially near bamboo, which is also where mountain gorillas live. They face similar dangers like traps and people moving into their homes, so they're critically endangered. After this fantastic experience, you'll visit a nearby village to learn about Rwanda's traditional way of life. This will let you talk to locals and learn about their customs. Gorilla Guardians Village is a project in Kinigi, Musanze, set up to help people living near Volcanoes National Park. It wants to help locals make money in a way that also helps protect mountain gorillas. The village offers things like traditional dances, craft workshops, and tours of the community. After this tour, you'll return for lunch to your hotel/lodge. The rest of the day is free—dinner and sleep at the hotel/lodge.s",
        },
        {
          name: "Day 8",
          title:
            "  Transfer back to Kigali – Kigali Genocide Memorial – Departure ",
          description:
            "After enjoying a relaxed breakfast at the hotel, pay any additional fees before leaving. Take a moment to say goodbye to the lovely staff at the hotel. Then, drive back to Kigali. Once you arrive, you will head to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Tour old Kigali and the craft markets. After this fantastic tour, you will have lunch at the restaurant. After that, transfer back to Kigali International Airport. You'll say goodbye to your driver-guide and check in for your flight there.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "7 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag9",
      image: "/images/tour.jpeg",
      title: "8 Days Rwanda Safari Tour",
      description:
        "The 8-days Rwanda Safari Tour with Trumpet Tours explore Rwanda's different types of primates. It begins with a journey through Nyungwe Forest, where you can track chimpanzees and observe Colobus monkeys. Next, you'll visit Volcanoes National Park to see majestic mountain gorillas and playful golden monkeys. After that, you'll enjoy a relaxing stop at Lake Kivu. Finally, the tour concludes with a city tour of Kigali, where you'll visit the genocide memorial site. It's a trip to remember!",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali" },
        {
          title:
            "Day 2:  Transfer to Nyungwe National Park via King’s Palace   ",
        },
        {
          title: "Day 3: Chimpanzee trekking – Canopy walk experience  ",
        },
        {
          title: "Day 4: Transfer to Lake Kivu          ",
        },
        {
          title: "Day 5: Transfer to Volcanoes National Park   ",
        },
        {
          title:
            "Day 6:  Mountain Gorilla Trek and Iby’iwacu Cultural Center   ",
        },
        {
          title:
            "Day 7:  Golden Monkeys and Visit to Twin Lakes (Burera and Ruhondo)  ",
        },
        {
          title:
            "Day 8:  Transfer back to Kigali – Kigali Genocide Memorial – Departure ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda- Kigali ",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. A tour briefing will be held at the hotel lobby, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition.The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title: "Transfer to Nyungwe National Park via King’s Palace  ",
          description:
            "After enjoying breakfast and settling any additional charges at the hotel, proceed to the south towards Nyungwe National Park, Along the way, make a stop at the King's Palace Museum in Nyanza, also known as the Rukali Palace, which is a historical site that was the residence of the Rwandan monarchy before colonial times. It's an important cultural and historical landmark in Rwanda. You'll also be able to encounter the renowned Royal long-horned cows known as 'Inyambo. Afterward, indulge in a delightful lunch in the town of Huye before resuming your journey, passing through verdant tea fields scattered across the hillsides and charming wooden dwellings characteristic of the Nyungwe Forest surroundings. Upon reaching your accommodation base, complete the check-in process, enjoy dinner, and unwind for the evening.",
        },
        {
          name: "Day 3",
          title: "Chimpanzee trekking – Canopy walk experience          ",
          description:
            "After having breakfast, you will Embark on an exclusive chimpanzee discovery trek in Nyungwe National Park, where expert guides will accompany you through the protected jungle surrounding Nyungwe House. This area is home to a rare population of chimpanzees and groups of Colobus monkeys. As you venture through the dense foliage, you may encounter chimpanzees observing from the fig trees or witness them leaping through the canopy. Each trek offers a unique experience, with these captivating creatures always ready to surprise you. Following the chimpanzee trek, return to the lodge for an early lunch before embarking on a guided canopy walk. The Canopy Walkway, comprising three bridges and towers spanning 160 meters, is part of the Igishigishi Trail tour. Accompanied by a knowledgeable park guide, you'll explore the forest canopy and gain insights into its vital role within the tropical rainforest ecosystem.",
        },
        {
          name: "Day 4",
          title: "Transfer to Lake Kivu          ",
          description:
            "Have breakfast and then prepare for a road trip to Gisenyi province, where Lake Kivu is located. When you arrive, have lunch at the hotel/restaurant and then enjoy an afternoon canoe ride to explore some of the islands on Lake Kivu, including the famous Nyamirundi Island, known for its delicious coffee. Discovering different islands and tasting the renowned coffee grown on Nyamirundi Island will be a fun adventure. Afterward, you will drive to the hotel for an overnight stay near the lake.",
        },
        {
          name: "Day 5",
          title: "Transfer to Volcanoes National Park ",
          description:
            "When you wake up, have a relaxed breakfast and then get ready to travel to Volcanoes National Park, which is in the northwest part of Rwanda, in Musanze province. On the way, enjoy the beautiful views of the countryside. Upon arrival, you will head to the restaurant to have a launch and then drive to the hotel. A warm welcome awaits as the lodge staff greets and escorts you to the reception area. They'll assist with check-in before indulging in a delicious hot dinner. Take advantage of the relaxing afternoon to unwind and prepare for the upcoming hike, ensuring you're fully energized and ready for the adventure ahead.",
        },
        {
          name: "Day 6",
          title: "Mountain Gorilla Trek and Iby’iwacu Cultural Center         ",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do's and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas' location. Guides will make stops for rest and photo opportunities along the way. After the trek, you'll reunite with your driver guide for a transfer back to the same hotel/lodge for lunch. Following lunch, you will head out for the Iby’iwacu Cultural tour to better understand the Rwandese Culture. Afterward, you will return to your hotel/lodge for dinner and overnight.",
        },
        {
          name: "Day 7",
          title:
            " Golden Monkeys and Visit to Twin Lakes (Burera and Ruhondo) ",
          description:
            "Have breakfast and go to the Kinigi Park offices at 7:00 AM. You'll join a meeting about how to behave when tracking the shy and playful golden monkeys. Once you find them, watch them closely and take photos and videos. Afterward, return to the meeting point and meet your guide to return to your lodge for lunch. Later, go on a guided walk to the pretty Twin Lakes of Burera and Ruhondo. Return to the hotel/lodge. Have dinner and stay overnight.",
        },
        {
          name: "Day 8",
          title:
            " Transfer back to Kigali – Kigali Genocide Memorial – Departure ",
          description:
            "After enjoying a relaxed breakfast at the hotel, pay any additional fees before leaving. Take a moment to say goodbye to the lovely staff at the hotel. Then, drive back to Kigali. Once you arrive, you will head to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Tour old Kigali and the craft markets. After this amazing tour, you will have lunch at the restaurant. After that, transfer back to Kigali International Airport. You'll say goodbye to your driver-guide and check in for your flight there.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "7 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag10",
      image: "/images/heli.jpg",
      title: "8 Days Luxury Rwanda Safari Adventure",
      description:
        "Helicopter rides In Rwanda offer breathtaking views of its picturesque landscape, known as the land of a thousand hills, while saving time during the 8-day luxury safari adventure with Trumpet Tours. You'll have the opportunity to discover the rich wildlife of Rwanda at Akagera National Park and engage in primate tracking activities at Volcanoes National Park during this safari tour. Experience the beauty of Rwanda from the air, enjoying panoramic vistas of its stunning terrain. This luxurious adventure allows you to immerse yourself in the natural wonders of Rwanda while indulging in comfort and convenience. Take advantage of this incredible opportunity to explore Rwanda's diverse landscapes and wildlife in style.",

      summary: [
        { title: "Day 1: Arrival in Rwanda " },
        {
          title:
            "Day 2:   Transfer to Akagera National Park ( boat ride)            ",
        },
        {
          title: "Day 3:  Game drive in Akagera National Park  ",
        },
        {
          title:
            "Day 4:  Flight transfer to one & only in  Nyungwe National Park        ",
        },
        {
          title: "Day 5: Golden monkey trekking and  Departure  ",
        },
        {
          title: "Day 6:  Chimpanzee trekking in Nyungwe National Park ",
        },
        {
          title: "Day 7:  Flight to Musanze Volcanoes National Park      ",
        },
        {
          title: "Day 8: Gorilla trekking-Gorilla Guardian Village            ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "When you arrive at Kigali International Airport, you'll be greeted by a safari guide from Trumpet Tours. They'll brief you about the 8-day Luxury Rwanda Safari Adventure and then escort you to the Serena 5-star Hotel for dinner and your overnight stay.",
        },
        {
          name: "Day 2",
          title: "Transfer to Akagera National Park ( boat ride)          ",
          description:
            " Following your breakfast, Our driver guide will transport you to Magashi camp. You'll enjoy lunch, embark on thrilling game drives, and take a scenic boat ride. Your evening meal and accommodations will be provided at Magashi camp.",
        },
        {
          name: "Day 3",
          title: "Game drive in Akagera National Park",
          description:
            "On this day, you'll start with an early breakfast before beginning an unforgettable journey: a full-day game drive showcasing a diverse array of wildlife, such as zebras, antelopes, buffaloes, etc. The highlight will be the quest to spot the iconic big five of the Savannah. Along the way, you'll pause for a picnic lunch and eventually settle in for an overnight stay at Magashi camp.",
        },
        {
          name: "Day 4",
          title: "Flight transfer to one & only in  Nyungwe National Park  ",
          description:
            "Start your day with a leisurely breakfast while soaking in the picturesque surroundings of Magashi camp. Following that, indulge in a satisfying lunch before embarking on an exhilarating helicopter journey from Akagera National Park in the Eastern province to Nyungwe One & Only residence located in the South-Western region of Rwanda. Conclude your day with a delightful dinner and spend the night at the One & Only Nyungwe house.",
        },
        {
          name: "Day 5",
          title: " Chimpanzee trekking in Nyungwe National Park          ",
          description:
            "You'll begin your day with breakfast in the early morning, followed by driving to the park reception for a briefing before embarking on an unforgettable trek to locate the chimpanzees. After the trek, you'll have the afternoon to unwind, enjoying lunch at One & Only Nyungwe House. One & Only Nyungwe House will also provide dinner and overnight accommodations.",
        },
        {
          name: "Day 6",
          title: "Flight transfer to one & only in  Nyungwe National Park  ",
          description:
            "Following your morning meal, convene with your safari guide for transport to Nyungwe Airstrip, where you'll board a flight to Amakoro Songa Lodge in Musanze. Upon arrival, indulge in a delightful hot lunch. Subsequently, immerse yourself in the tranquil ambiance of the lodge, admiring the picturesque scenery of the Volcanoes. Conclude your day with dinner and spend the night at Singita Kwitonda Lodge.            .",
        },
        {
          name: "Day 7",
          title: " Gorilla trekking-Gorilla Guardian Village          ",
          description:
            "Following an early morning meal, we will embark on an expedition to encounter Mountain Gorillas in the ancient forests at 7:00 am. The journey will begin with a briefing at the park headquarters before venturing into the forest to seek out our nearest relatives. Trekking through the lush greenery and coming face to face with these magnificent primates creates an unforgettable experience. Following the trek, you can explore Rwandan culture in depth at the Gorilla Guardian Village before returning to the lodge for lunch and relaxation in the afternoon. Dinner and accommodations will be provided at Singita Kwitonda Lodge.",
        },
        {
          name: "Day 8",
          title: "Golden monkey trekking and  Departure          ",
          description:
            "Following breakfast in the early morning, we will set off on the golden monkey trekking adventure in the ancient forests at 5:00 am. The trek officially begins at 7:30 am after a briefing at the park headquarters, where we will begin our search for these captivating creatures. Following the trek, you will enjoy your lunch at  Singita Kwitonda Lodge before taking a flight back to Kigali International Airport for your outbound flight.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "7 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag11",
      image: "/images/gorila.jpg",
      title: "9 Days Rwanda Primate Tracking Safari",
      description:
        "The 9 Days Rwanda Primate Tracking Safari offered by Gorilla Adventure Tours is highly sought-after, inviting you to engage in immersive experiences such as tracking mountain gorillas in Volcanoes National Park, embarking on wildlife game drives in Akagera National Park, and observing chimpanzees in Nyungwe Forest National Park. Embark on this journey and prepare for an unforgettable wildlife adventure in Rwanda!",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali        " },
        {
          title:
            "Day 2:  Visit the Kigali Genocide Memorial – Transfer to Akagera National Park – Game drive            ",
        },
        {
          title:
            "Day 3:  Akagera National Park Game drives & Afternoon boat ride          ",
        },
        {
          title:
            "Day 4: Transfer to Musanze, Volcanoes National Park via Kigali            ",
        },
        {
          title: "Day 5:  Gorilla Trekking transfer to Lake Kivu          ",
        },
        {
          title: "Day 6:  Boat Cruise on Lake Kivu           ",
        },
        {
          title:
            "Day 7: Transfer to Nyungwe National Park (Chimpanzee Trekking    ",
        },
        {
          title: "Day 8:  Transfer to Kigali           ",
        },
        {
          title: "Day 9: Departure",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda – Kigali",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. A tour briefing will be held at the hotel lobby, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title:
            "Visit the Kigali Genocide Memorial – Transfer to Akagera National Park – Game drive",
          description:
            "You'll start your day with breakfast at the hotel before checking out and settling any additional expenses. A private driver-guide will then take you to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Afterward, you'll journey to Akagera National Park, where you'll check in at the hotel/lodge, have lunch, and embark on an afternoon Game drive to observe the park's wildlife. This tour offers a solemn reflection on Rwanda's history and a thrilling exploration of its natural beauty.",
        },
        {
          name: "Day 3",
          title: "Akagera National Park Game drives & Afternoon boat ride",
          description:
            "Begin your day with an early rise to embark on an exhilarating safari game drive in Akagera National Park, led by a knowledgeable guide. As you traverse through the stunning landscape, you'll have the opportunity to witness diverse wildlife. From majestic buffalo and lions to graceful elephants and giraffes, the park is teeming with fascinating species, such as the elusive black rhino and the spotted hyena. Additionally, bird enthusiasts will be delighted by the park's impressive bird population, which includes the magnificent shoebill and the red-faced barbet. Enjoy a picnic lunch amidst nature before continuing your adventure with an afternoon game drive in this renowned Big-five parkland. Afterward, you will enjoy the boat ride in Akagera as the sunset paints the sky with mesmerizing hues.",
        },
        {
          name: "Day 4",
          title:
            "Transfer to Musanze, Volcanoes National Park via Kigali          ",
          description:
            "Begin your day by enjoying a relaxed breakfast, followed by assistance checking out your accommodation. Your journey will then commence with a 3-hour transfer back to Kigali, ensuring you arrive in time for lunch at one of the finest restaurants in Kigali. Afterward, you'll embark on a scenic 2.5-hour drive to Musanze and Volcanoes National Park. Upon arrival in the evening, you'll be warmly welcomed at the Hotel with a refreshing drink during check-in. Dinner will be served, and you'll spend the night at the hotel.           ",
        },
        {
          name: "Day 5",
          title: "Gorilla Trekking transfer to Lake Kivu            ",
          description:
            "Following an early breakfast, we'll set out on the Mountain Gorilla encounter in the ancient woodlands starting at 7:00 am. The journey will begin with a briefing at the park headquarters before venturing into the forest to find our nearest relatives. Exploring the forest and coming face-to-face with these magnificent primates creates an unforgettable trekking experience. Following the trek, you'll return to the lodge for lunch and enjoy a relaxing afternoon near the lake..",
        },
        {
          name: "Day 6",
          title: " Boat Cruise on Lake Kivu    ",
          description:
            "After breakfast, set out on a three-hour journey to Lake Kivu in Rusizi, a stunning body of water between Rwanda and the Democratic Republic of Congo. Lake Kivu covers an area of 2,700 square kilometers and rests at 2349 meters above sea level, ranking as the 15th deepest lake globally and the 3rd deepest in Africa. Upon arrival at the Rwandan shoreline, spend the afternoon exploring the beauty of Lake Kivu. Experience the enchanting sunset during a cruise on the lake, where you'll encounter the Singing Fishermen of Lake Kivu in their distinctive three-hulled fishing boats. These remarkable vessels, adorned with lengthy poles at both ends, gradually emerge as silhouettes against the backdrop of the dusk sky. Operating in small clusters, the fishermen venture into the deeper waters a few kilometers from shore, where they deploy their nets and engage in night fishing. Conclude the day with a delightful dinner and retreat to the hotel for overnight accommodations.",
        },
        {
          name: "Day 7",
          title:
            "Transfer to Nyungwe National Park (Chimpanzee Trekking              ",
          description:
            " After breakfast, bid farewell to Lake Kivu and embark on a two-hour journey to Nyungwe, where you will have lunch at the lodge. This day's highlight includes an exciting encounter with Nyungwe National Park's renowned inhabitants: chimpanzees! As you venture into the forest for an unforgettable trek, their distinctive hoots will guide you through the dense foliage. With over 80 chimpanzees and other primate species inhabiting the park, the trek will also offer opportunities to observe smaller primates. Alongside chimp trekking, you'll enjoy activities like a hike to Isumo Waterfalls, where the immersive ambiance of the cascading water, accompanied by the vibrant sounds of wildlife, will truly reconnect you with nature. Following this memorable expedition, return to your accommodation for relaxation, dinner, and an overnight stay.         ",
        },
        {
          name: "Day 8",
          title: "Transfer to Kigali            ",
          description:
            "Begin your journey back to Kigali from Nyungwe, enjoying the picturesque route alongside Lake Kivu. when arrive in Kigali, you will return to the hotel for lunch and embark on afternoon relaxation  Take the opportunity to discover Kigali at your own pace, perhaps indulging in some shopping at Kimironko market or CAPLAKI Art Village, where you'll find a wealth of crafts and artworks reflecting Rwanda's modern urban culture. . In the evening, As you savor your farewell dinner in Kigali, take a moment to reflect on your unforgettable experiences throughout Rwanda. Conclude your stay with an overnight stay at the hotel.",
        },
        {
          name: "Day 9",
          title: "Departure  ",
          description:
            "You will enjoy an early morning breakfast before being escorted to the airport by a representative from Trumpet Tours for your departing flight. ",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "8 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "Golden Monkey Trekking permit .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag12",
      image: "/images/lolo.jpeg",
      title: "10 Days Rwanda Wildlife Safari",
      description:
        "The 10-day Rwanda Wildlife Safari with Trumpet Tour presents a fantastic chance to discover the finest aspects of Rwanda. You'll delve into the vibrant city of Kigali, witness Africa's Big Five in the expansive savannahs of Akagera National Park, trek through the verdant jungles of Nyungwe Rainforest to encounter chimpanzees and experience the awe-inspiring presence of endangered Mountain Gorillas in their native home within the misty highlands of Volcanoes National Park. Additionally, you'll have the opportunity to immerse yourself in Rwanda's rich cultural heritage and marvel at its breathtaking scenery.",
      summary: [
        { title: "Day 1: Arrival in Rwanda – Kigali  " },
        {
          title:
            "Day 2:  Visit the Kigali Genocide Memorial – Transfer to Akagera National Park – Game drive.  ",
        },
        {
          title:
            "Day 3:   Full Day Game Drive in Akagera National Park and Transfer to Kigali  ",
        },
        {
          title:
            "Day 4: Transfer to Nyungwe National Park via the King's Palace Museum  ",
        },
        {
          title:
            "Day 5:  Chimpanzee Trekking and Canopy Walk Trail Hike          ",
        },
        {
          title: "Day 6:  Tea Tour Immersion and transfer to Lake Kivu ",
        },
        {
          title:
            "Day 7:  Boat Cruise on Lake Kivu and Transfer to Volcanoes National Park    ",
        },
        {
          title:
            "Day 8:  Mountain Gorillas Trekking and Local Culture Immersion      ",
        },
        {
          title:
            "Day 9: Golden Monkeys Trekking, Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund and Transfer to Kigali          ",
        },
        {
          title: "Day 10:  Shopping - Departure  ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda–Kigali          ",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. You'll be transferred to your hotel, approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title:
            "Visit the Kigali Genocide Memorial – Transfer to Akagera National Park – Game drive",
          description:
            "You'll start your day with breakfast at the hotel before checking out and settling any additional expenses. A private driver-guide will then take you to the Kigali Genocide Memorial in Gisozi, where you'll pay tribute to the victims of the genocide against the Tutsi and learn about the country's recovery. Afterward, you'll journey to Akagera National Park, where you'll check in at the hotel/lodge, have lunch, and embark on an afternoon Game drive to observe the park's wildlife. This tour offers a solemn reflection on Rwanda's history and a thrilling exploration of its natural beauty.",
        },
        {
          name: "Day 3",
          title:
            "Full Day Game Drive in Akagera National Park and Transfer to Kigali",
          description:
            "Following an early morning meal, gather your lunch packs and rendez-vous with your seasoned park guide at 7:00 am to embark on a traditional wildlife excursion. Departing from the park's southern region, you'll journey towards the northern exit, traversing breathtaking landscapes with various plant and animal species. Along the safari, delight in observing elephants, lions, rhinos, giraffes, buffaloes, zebras, hippos, crocodiles, and numerous bird varieties. Your midday meal will be provided at Mihindi Café within the park grounds. In the afternoon, return to Kigali for a relaxing dinner and overnight stay.",
        },
        {
          name: "Day 4",
          title:
            "Transfer to Nyungwe National Park via the King's Palace Museum            ",
          description:
            "After enjoying breakfast and settling any additional charges at the hotel, proceed to the south towards Nyungwe National Park, Along the way, make a stop at the King's Palace Museum in Nyanza, also known as the Rukali Palace, which is a historical site that was the residence of the Rwandan monarchy before colonial times. It's an important cultural and historical landmark in Rwanda. You'll also be able to encounter the renowned Royal long-horned cows known as 'Inyambo. Afterward, indulge in a delightful lunch in the town of Huye before resuming your journey, passing through verdant tea fields scattered across the hillsides and charming wooden dwellings characteristic of the Nyungwe Forest surroundings. Upon reaching your accommodation base, complete the check-in process, enjoy dinner, and unwind for the evening.         ",
        },
        {
          name: "Day 5",
          title: "Chimpanzee Trekking and Canopy Walk Trail Hike ",
          description:
            "Start your day as early as 5:00 am by joining a knowledgeable park guide for an unforgettable Chimpanzee trekking adventure in Cyamudongo Forest. Gain insights into these fascinating primates, which share 96% of our DNA and are our closest relatives in the animal kingdom. After the trek, return to your accommodation for a refreshing lunch. In the afternoon, embark on a hike across the canopy walk, a suspended bridge towering 70 meters above the forest floor. This experience offers visitors an intimate encounter with nature, providing stunning vistas of the forest canopy, distant views of the evergreen mountains, and the shimmering waters of Lake Kivu. Encounter diverse birdlife, colorful butterflies, and breathtaking surroundings. After the hike, return to your accommodation for dinner and an overnight stay.",
        },
        {
          name: "Day 6",
          title: "Chimpanzee Trekking and Canopy Walk Trail Hike     ",
          description:
            "In the early morning, after enjoying breakfast, you'll have the opportunity to join local farmers from Gisakura for an authentic tea tour experience called 'Crop to Cup.' During this immersive tour, you'll learn firsthand about the process of tea making and actively participate in it. Exploring the picturesque tea plantations will offer fantastic photography opportunities. Interacting with the local tea pickers and engaging in activities like picking, pounding, and drying tea leaves will be both educational and enjoyable, culminating in creating a refreshing cup of Rwandan tea. After concluding the tea tour, you'll embark on a road journey to Rubavu Resort town in the North West, which will take approximately 5 hours along the scenic Kivu Belt Road. You'll have a lunch break in Karongi along the way, where you can observe the daily life of local communities along the Congo-Nile trail. The route will take you through some of Rwanda's remotest villages, offering .    ",
        },
        {
          name: "Day 7",
          title:
            "Boat Cruise on Lake Kivu and Transfer to Volcanoes National Park ",
          description:
            "Begin your day with a leisurely breakfast at the hotel before embarking on a guided boat cruise on Lake Kivu. Explore the various islands and indulge in a local foot massage at the Nyamyumba hot springs during one of your stops. After lunch at the Migano Hotel in Gisenyi, take a short journey to Kinigi, near the renowned Volcanoes National Park, about a 1.5-hour drive from Lake Kivu. Along the way, soak in the breathtaking scenery of Rwanda's lush hills and valleys, showcasing its natural beauty as the 'Land of a Thousand Hills. Upon reaching your lodge with stunning views of the volcanoes, check in, enjoy dinner and spend the night.",
        },
        {
          name: "Day 8",
          title: "Mountain Gorillas Trekking and Local Culture Immersion   ",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do’s and don'ts around gorillas. After the briefing, you ll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas location. Guides will make stops for rest and photo opportunities along the way. After the trek, you ll reunite with your driver guide for a transfer back to the same hotel/lodge for lunch. Following lunch, you will head out for the Iby’iwacu Cultural tour to better understand the Rwandese Culture. Afterward, you will return to your hotel/lodge for dinner and overnight. ",
        },
        {
          name: "Day 9",
          title:
            "Golden Monkeys Trekking, Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund and Transfer to Kigali ",
          description:
            "Start your morning with breakfast before embarking on a search for the elusive Golden Monkeys in the verdant surroundings at the base of Mt. Sabyinyo. Accompanied by a knowledgeable guide, you'll observe these beautiful creatures in their natural habitat, possibly encountering a troop of over 50 individuals. Tracking them through the dense foliage can be challenging but rewarding as they gracefully traverse the trees with their long tails. It's recommended to adjust your camera settings for fast shutter speed to capture clear images in the dimly lit forest. Following this adventure, return to your lodge for lunch. In the afternoon, explore the newly established Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund, where you'll gain insight into Dian Fossey's remarkable legacy and the ongoing conservation efforts for Mountain Gorillas. Bid farewell to Volcanoes National Park as you return to Kigali for an overnight stay. ",
        },
        {
          name: "Day 10",
          title: "Shopping - Departure",
          description:
            "Enjoy a leisurely day in Kigali with the option to explore local shopping for authentic Made in Rwanda souvenirs. Depending on your flight timings, we can arrange for drop-off at Kigali Airport to facilitate check-in and departure.  ",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "9 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "Golden Monkey Trekking permit .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
    },
    {
      id: "mag13",
      image: "/images/kaka.jpeg",
      title: "10 Days Rwanda Wildlife Adventure",
      description:
        "This 10-days wildlife adventure in Rwanda with Trumpet Tours allows one to explore three distinct national parks, each home to unique wildlife species. In Akagera National Park, situated in the eastern region, you'll encounter the renowned big five animals. Volcanoes National Park, located in the north, is famed for its gorillas and golden monkeys. Lastly, Nyungwe National Park, situated in the southwest, is where you'll find chimpanzees amidst its lush surroundings.!",

      summary: [
        { title: "Day 1: Arrival – Kigali        " },
        {
          title:
            "Day 2:  Transfer to Akagera National Park + boat cruise and night game drive.  ",
        },
        {
          title:
            "Day 3:  Full-day game drive in Akagera National Park            ",
        },
        {
          title: "Day 4: Transfer to Musanze Volcanoes National Park ",
        },
        {
          title: "Day 5:  Mountain Gorilla Trekking Experience            ",
        },
        {
          title: "Day 7:  Golden Monkey trekking and Twin Lakes    ",
        },
        {
          title: "Day 7:  Transfer to Nyungwe National Park     ",
        },
        {
          title: "Day 8: : Chimpanzees trekking and Canopy        ",
        },
        {
          title: "Day 9:  Transfer to Kigali  ",
        },

        {
          title: "Day 10: Departure  ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20-minute drive from the airport. At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts for your overnight stay.",
        },
        {
          name: "Day 2",
          title:
            "Transfer to Akagera National Park + boat cruise and night game drive ",
          description:
            "Start your day with breakfast at the hotel before embarking on your journey to Akagera National Park, situated in the eastern part of Rwanda near the border with Tanzania. The drive from Kigali takes approximately 2.5 hours. Named after the river that borders its eastern edge, Akagera National Park spans an impressive 1,122 square kilometers, making it Rwanda's largest national park. The park is renowned for its breathtaking landscapes, which include over ten freshwater lakes, and boasts a diverse array of wildlife, with more than 8,000 animals and 500 bird species. After checking in at the park, enjoy lunch at the lodge before heading to Ihema Lake for a boat ride, scheduled to begin at 3 pm. Lake Ihema is renowned for its rich birdlife, offering sightings of various waterbirds such as cormorants, fish eagles, and kingfishers. Tourists can often observe elephants, crocodiles, and hippos along the lakeside, providing a memorable experience of the coexistence of wildlife. Later in the afternoon, at 5:30 pm, gather at the hotel reception for a briefing from the park guide before embarking on a two-hour night game drive. This excursion presents the chance to spot nocturnal animals such as lions, leopards, and hyenas, offering a unique perspective on the park's diverse wildlife.",
        },
        {
          name: "Day 3",
          title: "Full-day game drive in Akagera National Park ",
          description:
            "Today's safari excursion promises an authentic African Big Five adventure in a secluded location where lions came back in 2015 and rhinos in 2017. Among the park's notable inhabitants are lions, elephants, rhinos, zebras, leopards, hyenas, buffalos, giraffes, monkeys, hippos, bush pigs, warthogs, baboons, crocodiles, leopards, and various antelope species. Enjoy a picnic lunch amidst nature before continuing your adventure with an afternoon game drive in this renowned Big-five parkland.",
        },
        {
          name: "Day 4",
          title: "Transfer to Musanze Volcanoes National Park  ",
          description:
            "After breakfast at the hotel, you'll embark on a seven-hour journey northwards through Ngarama Rock en route to Musanze, Rwanda's second-largest city and central tourism hub. During the journey, a stop will be made at Ngarama Rock, a captivating historical site spanning approximately 3 hectares, associated with Umwami Rudahigwa Ndoli, featuring numerous footprints. This remarkable rock possesses the unique ability to produce echoes when struck by metal or stone. You have a break lunch in Kigali, Continue the journey to Musanze. Experience the breathtaking beauty of the hilly countryside, revealing why Rwanda is known as 'The Land of a Thousand Hills.' After arriving at your lodge, complete the check-in process and indulge in a much-needed rest.",
        },
        {
          name: "Day 5",
          title: " Mountain Gorilla Trekking Experience ",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the  do’s and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas location. After finding the Gorillas, any exhaustion is quickly overshadowed by the exhilarating and profound wildlife encounter, often hailed as one of the most thrilling experiences on the planet. When your hour with the Gorilla group concludes, head back to the initial meeting point where your driver guide awaits. They will then transport you back to the lodge for lunch and an overnight stay, allowing you to spend the afternoon at your leisure, contemplating the life-changing experience with the Gorillas.",
        },
        {
          name: "Day 6",
          title: "Golden Monkey trekking and Twin Lakes          ",
          description:
            "Start your day with an early breakfast, setting the stage for what lies ahead as you go to the park headquarters for a briefing on the golden monkey trek. Following this, you'll be transported to the starting point of your guided walk, marking the beginning of an incredible adventure. The excursion typically spans a round trip of 3 to 4 hours, depending on the frequency of stops. After this unforgettable experience, enjoy lunch and visit the Twin Lakes, namely Burera and Ruhondo lakes. Return to the lodge for dinner and overnight.",
        },
        {
          name: "Day 7",
          title: "Transfer to Nyungwe National Park  ",
          description:
            "After breakfast, departure from the lodge Lodge is scheduled for 9 AM, heading towards the Nyungwe National Park office in Gisakura for registration and related procedures. A brief pause is planned in Karongi for lunch en route, with an estimated driving time of approximately 6 hours and 30 minutes. Upon reaching your accommodation base, complete the check-in process, enjoy dinner, and unwind for the evening.",
        },
        {
          name: "Day 8",
          title: "Chimpanzees trekking and Canopy ",
          description:
            "In the early morning, following breakfast preparation, you'll head to the Park reception for a briefing before embarking on your chimpanzee trekking adventure. Nyungwe National Park boasts a rich biodiversity, housing over 80 chimpanzees alongside various smaller primates. Your trekking journey will offer glimpses of these fascinating creatures amidst the vibrant sounds of nature, with birds, tree frogs, and insects creating a lively ambiance. Following the rewarding chimpanzee trek, a delicious lunch awaits at the park's restaurant. Post-lunch, you'll engage in the canopy activity, traversing a suspended bridge above a ravine within the lush montane rainforest. This canopy walkway grants a thrilling perspective of the ancient treetops and wildlife below. After this exhilarating experience, it's back to the lodge for dinner and an overnight stay, reminiscing on the day's memorable adventures amidst the park's tranquility. ",
        },
        {
          name: "Day 9",
          title: "Transfer to Musanze Volcanoes National Park  ",
          description:
            "Following breakfast, you'll embark on a journey towards Kigali, possibly stopping for shopping along the way, contingent upon our arrival time. ",
        },
        {
          name: "Day 10",
          title: "Departure    ",
          description:
            "You will enjoy an early morning breakfast before being escorted to the airport by a representative from Trumpet Tours for your departing flight. ",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "9 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "Golden Monkey Trekking permit .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag14",
      image: "/images/conve.jpg",
      title: "12 Days Luxury Wildlife Tour to Rwanda",
      description:
        "Rwanda is a top destination in East Africa, drawing numerous visitors due to its rich tourist attractions, notably the rare mountain gorillas in Volcanoes National Park. This 12-day Luxury Wildlife Tour with Trumpet Tours offers a comprehensive exploration of Rwanda's key destinations, ensuring a truly memorable, luxurious experience for travellers.",
      summary: [
        { title: "Day 1: Arrival in Rwanda- Kigali        " },
        {
          title:
            "Day 2:  Kigali city tour transfer to Akagera National Park.  ",
        },
        {
          title: "Day 3:  Wildlife game drive in Akagera National Park  ",
        },
        {
          title: "Day 4: Full-day game drive in Akagera National Park ",
        },
        {
          title: "Day 5:  Helicopter transfer to Nyungwe National Park        ",
        },
        {
          title:
            "Day 6: Chimpanzee Trekking in Nyungwe National Park          ",
        },
        {
          title:
            "Day 7:  Canopy Walk experience & Helicopter Transfer to Musanze            ",
        },
        {
          title: "Day 8:   Gorilla Trekking Experience             ",
        },
        {
          title:
            "Day 9:  Golden Monkey Trekking Transfer to Lake Kivu            ",
        },
        {
          title: "Day 10:  Lake Kivu Beach- Kayaking          ",
        },
        {
          title: "Day 11:  Helicopter Transfer to Kigali          ",
        },
        {
          title: "Day 12:  Departure   ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: " Arrival in Rwanda- Kigali  ",
          description:
            "Upon your arrival at Kigali International Airport, a Trumpet Tours safari guide will greet you, provide an overview of the 12-day Luxury Wildlife Tour in Rwanda, and arrange transportation to Radisson Blu Hotel. You'll complete check-in, enjoy dinner, and spend the night.",
        },
        {
          name: "Day 2",
          title: "Kigali city tour transfer to Akagera National Park  ",
          description:
            "You'll start your day with breakfast and embark on a tour of Kigali City, including a visit to the Kigali Genocide Memorial Centre to delve into Rwanda's history. Afterward, you'll enjoy lunch at Hotel Mille Collines before heading for a scenic drive to Akagera National Park. There, you'll take a private boat tour, admiring the beauty of Lake Ihema and observing diverse bird species and aquatic life. Finally, you'll continue to Magashi Camp for dinner and an overnight stay",
        },
        {
          name: "Day 3",
          title: " Wildlife game drive in Akagera National Park ",
          description:
            "Enjoy an early morning breakfast before heading to the park head office for a briefing on the park's history, conservancy development, and wildlife. After the briefing, embark on a wildlife game drive safari with a local ranger to explore the northern part of the park, spotting wild animals and birdlife along the way. After the safari, return to Magashi Camp for dinner and spend the night.",
        },
        {
          name: "Day 4",
          title: "Full-day game drive in Akagera National Park",
          description:
            "Following a refreshing coffee, you'll embark on a morning safari drive in Akagera National Park's northern plains, accompanied by a knowledgeable local ranger. Upon your return to the lodge, you'll enjoy a hearty breakfast before checking out. Subsequently, you'll set off on another exciting game drive with a ranger, this time focusing on observing the diverse wildlife and bird species in the northern area of the park, complete with a picnic lunch. Later, you'll be transferred to Karenge Bush Camp for dinner and an overnight stay",
        },
        {
          name: "Day 5",
          title: "Helicopter transfer to Nyungwe National Park ",
          description:
            "Enjoy a leisurely breakfast before embarking on a VIP Helicopter journey to Nyungwe National Park. Upon arrival at One & Only Nyungwe House, complete your check-in process and savor a delicious lunch. Spend the afternoon unwinding at the lodge, where various onsite activities are available, including Nature Bootcamp, Spear Throwing, Conservation Walk, Secrets of African Tea, Hilltop Archery, and Bike Tour. Conclude your day with a delightful dinner and a comfortable overnight stay.",
        },

        {
          name: "Day 6",
          title: "Chimpanzee Trekking in Nyungwe National Park",
          description:
            "Begin your day with an early breakfast before heading to the Park office for a briefing and meeting your local ranger. Together with porters, embark on a chimpanzee trekking adventure in the forest guided by the ranger. After the trek, return to the lodge for lunch. In the afternoon, explore a tea plantation and indulge in a tea-tasting experience, followed by High Tea at the lodge.",
        },
        {
          name: "Day 7",
          title: "Canopy Walk experience & Helicopter Transfer to Musanze",
          description:
            "Following your morning meal, you'll head to Uwinka Park for a delightful two-hour forest hike, immersing yourself in the lush surroundings and discovering the impressive 90-meter-long canopy bridge. Following this adventure, you'll dine at the Lodge before taking a helicopter flight to Volcanoes National Park. Upon arrival at the One & Only Gorilla Nest Lodge, you'll have ample time to enjoy dinner and settle in for an overnight stay",
        },
        {
          name: "Day 8",
          title: " Gorilla Trekking Experience ",
          description:
            "Begin your day with an early breakfast before heading to the Volcanoes National Park offices for a briefing. Following this, venture into the forest to track the gorillas. Once you find them, you'll have the opportunity to spend up to an hour observing and photographing them. Afterward, visit the Gorilla Guardian village and enjoy lunch at the One & Only Gorilla Nest Lodge. Spend the afternoon unwinding at the lodge before having dinner and staying overnight.",
        },
        {
          name: "Day 9",
          title: "Golden Monkey Trekking Transfer to Lake Kivu",
          description:
            "You'll start your day with breakfast and head to the Volcanoes National Park offices for a briefing on Golden Monkey trekking. Following the briefing, you'll reach the forest to track the elusive golden monkeys. After the trek, you'll go to Lake Kivu in Gisenyi and enjoy lunch at Kivu Serena Hotel. Spend the afternoon unwinding on the beach. Later, dinner and overnight accommodations await you at the Kivu Serena Hotel.",
        },
        {
          name: "Day 10",
          title: "Lake Kivu Beach- Kayaking",
          description:
            "Enjoy a leisurely breakfast to kick off your day before embarking on a city tour of Gisenyi. Indulge in a delightful lunch at Paradis Marahide, followed by an afternoon kayaking adventure on Lake Kivu. Later, head back to Kivu Serena Hotel, where you'll gather around a campfire by the lakeside for entertainment from a cultural troupe. Conclude the evening with dinner and settle in for an overnight stay.",
        },
        {
          name: "Day 11",
          title: "Helicopter Transfer to Kigali   ",
          description:
            "Following your morning meal, embark on a picturesque journey to Kigali City, where you'll enjoy lunch at Soy Asian Table. Spend the afternoon exploring Kimironko Market and CAPLAKI Village for shopping opportunities. Wrap up the day with dinner and stay overnight at the Retreat by Heaven.",
        },
        {
          name: "Day 12",
          title: "Departure  ",
          description:
            "You'll enjoy breakfast in the morning and head to Kigali International Airport for your departure flight.",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "11 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "Golden Monkey Trekking permit .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },
    {
      id: "mag15",
      // image: "/images/conv.jpg",
      image: "/images/tradi.jpeg",
      title: "14 Days Exploring Rwanda ",
      description:
        "This two-week journey in Rwanda with Trumpet Tours offers an opportunity to discover the country's diverse landscapes and wildlife by exploring three distinct National Parks. These parks include Akagera National Park in the eastern region, renowned for its Big Five animals; Volcanoes National Park in the north, where you can encounter gorillas and golden monkeys; and Nyungwe National Park in the southeast, home to chimpanzees, canopy walk, and waterfalls. Additionally, the trip provides a chance to immerse yourself in Rwandan culture through visits to cultural villages and delve into its history with museum tours.!",
      summary: [
        { title: "Day 1:  Arrival – Kigali        " },
        {
          title:
            "Day 2: City Tour-Kigali Genocide + Kandt museum and campaign Against Genocide            .  ",
        },
        {
          title:
            "Day 3:  City tour –Visit Nyamirambo Women's Center + Fazenda and Nyandungu    ",
        },
        {
          title:
            "Day 4: Transfer to Akagera National Park + boat cruise+ Night game drive          ",
        },
        {
          title:
            "Day 5:  Full-day game drive in Akagera National Park            ",
        },
        {
          title:
            "Day 6:Transfer to Musanze Volcanoes National Park            ",
        },
        {
          title: "Day 7:   Mountain Gorilla Trekking Experience            ",
        },
        {
          title: "Day 8:   Golden Monkeys trekking and Twin Lake          ",
        },
        {
          title: "Day 9:  Transfer to Nyungwe National Park          ",
        },
        {
          title: "Day 10:   Chimpanzees trekking and canopy walk          ",
        },
        {
          title: "Day 11:   Waterfall and Tea Plantation           ",
        },
        {
          title: "Day 12:  Visit King Palace and coffee plantation          ",
        },
        {
          title: "Day 13:  Transfer to Kigali          ",
        },
        {
          title: "Day 14:  Departure        ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "Arrival in Rwanda",
          description:
            "Upon your flight's arrival at Kigali International Airport, you'll receive a warm welcome from a representative of Trumpet Tours just outside the customs and immigration area. They will provide you with a safari briefing and introduce you to your driver-guide. Following that, you'll be transferred to your hotel, which is approximately a 20 minute drive from the airport.At the hotel lobby, a tour briefing will be held, accompanied by a welcome drink. Assistance will be provided for the check-in process, ensuring a smooth transition. The evening will continue with a welcome dinner, offering you all the comforts needed for your overnight stay",
        },
        {
          name: "Day 2",
          title:
            "City Tour-Kigali Genocide + Kandt museum and campaign Against Genocide ",
          description:
            "Begin your day with breakfast before embarking on a comprehensive exploration of Kigali city. This tour encompasses significant sites that delve into Rwanda's rich history and resilience. Commence with a poignant visit to the 1994 Kigali Genocide Memorial, a solemn tribute to the lives lost during the tragic genocide. Delve into the nation's past at the Kandt House Museum, where the narrative spans pre-colonial times through colonial rule and post-colonial developments. ",
        },
        {
          name: "Day 3",
          title:
            "City tour –Visit Nyamirambo Women's Center + Fazenda and Nyandungu  ",
          description:
            "Begin your day with breakfast at the hotel before embarking on a city tour of Kigali. Explore the Nyamirambo Women's Center to immerse yourself in Rwandan culture, sample local cuisine, and observe traditional handcrafting. Following lunch, venture to Fazenda Sengha at Mount Kigali for recreational activities, then proceed to Nyandungu Eco Park for a refreshing natural walk and biking experience.",
        },
        {
          name: "Day 4",
          title:
            "Transfer to Akagera National Park + boat cruise+ Night game drive",
          description:
            "Following breakfast at the hotel, embark on a journey to Akagera National Park in eastern Rwanda. The approximately 2.5-hour drive from Kigali leads to Rwanda's largest national park, spanning 1,122km². Upon arrival, assist with the check-in process at Akagera National Park and the lodge, where lunch will be served. At 3 PM, we took a boat ride on Lake Ihema, the country's second-largest freshwater lake. Lake Ihema is renowned for its rich birdlife, featuring cormorants, fish eagles, African jacanas, and kingfishers. Moreover, seeing elephants grazing, crocodiles basking in the sun, and hippos frolicking in the water adds to the captivating experience. Later, at 5:30 PM, rendezvous with the park guide at Akagera Game Lodge for a briefing before embarking on a two-hour night game drive, offering the chance to spot nocturnal animals such as leopards, lions, and hyenas, providing a unique glimpse into the park's diverse wildlife.",
        },
        {
          name: "Day 5",
          title: "Full-day game drive in Akagera National Park",
          description:
            "After enjoying breakfast at the hotel, embark on a thrilling game drive with the chance to encounter some of the park's renowned inhabitants, such as lions, elephants, rhinos, zebras, leopards, hyenas, buffalos, giraffes, monkeys, hippos, bush pigs, warthogs, baboons, crocodiles, and various antelopes. Take in the picturesque scenery of lakes nestled amidst the park's hills.",
        },
        {
          name: "Day 6",
          title: "Transfer to Musanze Volcanoes National Park",
          description:
            "Following breakfast, you'll embark on a six-hour journey northward through the country, passing by Ngarama Rock en route to Musanze, Rwanda's second-largest city and a central hub for tourism. You'll stop to explore Ngarama Rock, a captivating historical site spanning approximately 3 hectares, believed to be associated with Umwami Rudahigwa Ndoli. This remarkable rock formation features numerous footprints and possesses a unique ability to produce echoes when struck by metal or stone. You'll enjoy a packed lunch at this enchanting location steeped in Rwandan royal history and natural wonder. Upon reaching your lodge with stunning views of the volcanoes, check in, enjoy dinner and spend the night. ",
        },
        {
          name: "Day 7",
          title: "  Mountain Gorilla Trekking Experience          ",
          description:
            "Start your day with breakfast at the lodge. At 7:00 AM, you'll undergo a simple registration process where the park staff will decide which gorilla group you'll visit. They'll consider your fitness level and provide information on trekking times and conditions based on the gorillas' location the previous evening. Once grouped, a Lead Guide for each group will instruct you on trekking procedures and the do's and don'ts around gorillas. After the briefing, you'll return to your vehicles for a drive up the mountain to the starting point. The trek can last two to six hours, depending on the gorillas' location. Guides will make stops for rest and photo opportunities along the way. After the trek, you'll reunite with your driver guide for a transfer back to the same hotel/lodge for lunch. Following lunch, you will head out for the Iby’iwacu Cultural tour to better understand the Rwandese Culture. Afterward, you will return to your hotel/lodge for dinner and overnight.",
        },
        {
          name: "Day 8",
          title: "  Golden Monkeys trekking and Twin Lake",
          description:
            "Start your day with an early breakfast, setting the stage for what lies ahead as you go to the park headquarters for a briefing on the golden monkey trek. Following this, you'll be transported to the starting point of your guided walk, marking the beginning of an incredible adventure. The excursion typically spans a round trip of 3 to 4 hours, depending on the frequency of stops. After this unforgettable experience, enjoy lunch and visit the Twin Lakes, namely Burera and Ruhondo lakes.",
        },

        {
          name: "Day 9",
          title: "Transfer to Nyungwe National Park",
          description:
            "After breakfast, departure from the Lodge is scheduled for 9 AM, heading towards the Nyungwe National Park office in Gisakura for registration and related procedures. A brief pause is planned in Karongi for lunch en route, with an estimated driving time of approximately 6 hours and 30 minutes.            ",
        },
        {
          name: "Day 10",
          title: "Chimpanzees trekking and canopy walk  ",
          description:
            "In the early morning, following breakfast preparation, you'll head to the Park reception for a briefing before embarking on your chimpanzee trekking adventure. Nyungwe National Park boasts a rich biodiversity, housing over 80 chimpanzees alongside various smaller primates. Your trekking journey will offer glimpses of these fascinating creatures amidst the vibrant sounds of nature, with birds, tree frogs, and insects creating a lively ambiance. Following the rewarding chimpanzee trek, a delicious lunch awaits at the park's restaurant. Post-lunch, you'll engage in the canopy activity, traversing a suspended bridge above a ravine within the lush montane rainforest. This canopy walkway grants a thrilling perspective of the ancient treetops and wildlife below. After this exhilarating experience, it's back to the lodge for dinner and an overnight stay, reminiscing on the day's memorable adventures amidst the park's tranquility.",
        },
        {
          name: "Day 11",
          title: "Waterfall and Tea Plantation   ",
          description:
            "Following breakfast, you'll proceed towards the park reception at the Gisakura Office for a briefing before embarking on a scenic natural walk towards the enchanting Kamiranzovu waterfalls in the forest. Along the way, there will be opportunities to encounter various bird species and playful monkeys. Following a satisfying lunch, the itinerary will include a tea plantation tour, offering insights into the cultivation, harvesting, and processing of tea within the local factory, all while engaging with the community members.",
        },
        {
          name: "Day 12",
          title: "Visit King Palace and coffee plantation  ",
          description:
            "At 9 AM, you'll begin your excursion to the southern region of Rwanda for a tour of a coffee plantation. During this experience, you'll delve into the origins of coffee, the cultivation methods specific to Rwanda, and the processes involved in harvesting and roasting the beans. Following a lunch break in Huye, your itinerary will include visiting the Ethnographic Museum, also known as the National Museum. Belgium's King Bedouin gifted this institution in the late 1980s. Inside, seven galleries exhibit diverse historical, ethnographic, artistic, and archaeological artifacts, supplemented by visual aids that provide visitors with a comprehensive understanding of Rwandan culture.            .",
        },
        {
          name: "Day 13",
          title: "Transfer to Kigali          ",
          description:
            "Following breakfast at the hotel, the plan is to journey towards Nyanza to explore the King's Palace Museum and Kwigira Museum. The distance from Huye to Nyanza is approximately a one-hour drive. Once lunch is enjoyed in Nyanza, the journey continues towards Kigali, allowing for potential shopping opportunities depending on the time of arrival.            ",
        },
        {
          name: "Day 14",
          title: "Departure         ",
          description:
            "Travel to Kigali International Airport for your flight back home. ",
        },
      ],
      included: [
        {
          title: "Meet and greet assistance on arrival.",
        },
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day .",
        },

        {
          title:
            "13 nights’ lodging in Luxury, Mid Range, or Budget properties as indicated in the itinerary .",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board.",
        },
        {
          title: "All Gorilla trekking permits .",
        },
        {
          title: "Golden Monkey Trekking permit .",
        },
        { title: "Park entrance fees " },
        { title: "All other tour activities, as mentioned in the itinerary." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle   ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "Entry visa fees and Travel Insurance.",
        },
        { title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide." },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },

        { title: "Other meals  not mentioned in the itinerary" },
        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },

    {
      id: "magug1",
      image: "/images/one.jpeg",
      title: " 4-Days Murchison Falls",
      description:
        "A 4-day Murchison Falls safari offers a fantastic way to explore and enjoy the wonders of Murchison Falls National Park in Uganda. This tour includes guided game drives, boat cruises, chimpanzee tracking in Kaniyo-Pabidi Forest, visiting the top of the falls, and rhino tracking at Ziwa Rhino Sanctuary. Murchison Falls National Park is the largest park in Northwestern Uganda, covering 3840 square kilometers. It's named after the impressive Murchison Falls, where the Nile River squeezes through a narrow gorge. The park is known for its diverse wildlife, including Rothschild giraffes, lions, Nile crocodiles, hippos, bird species, leopards, elephants, and warthogs. It's a great place for game viewing and birdwatching enthusiasts!",
      summary: [
        {
          title:
            "Day 1:  Rhino Tracking Ziwa Rhino Sanctuary & drive to Murchison Falls        ",
        },
        {
          title:
            "Day 2: Game drive with an experienced guide & Launch cruise on Victoria Nile  .  ",
        },
        {
          title:
            "Day 3:  Chimpanzee Tracking Kaniyo-Pabidi Forest/Budongo            ",
        },
        {
          title: "Day 4: Depart Budongo for Kampala or Entebbe   ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title:
            " Rhino Tracking Ziwa Rhino Sanctuary & drive to Murchison Falls National Park",
          description:
            "Following breakfast, the next activity on the itinerary is a tour of Murchison Falls, expected to involve approximately six hours of driving. Along the way, there will be a stop at the Ziwa Sanctuary, where you can participate in tracking white rhinos. Afterward, you'll proceed to Murchison Falls National Park, with lunch provided in Masindi town. Following lunch, you'll be transported to your chosen lodge in or around Murchison Falls National Park for check-in.",
        },
        {
          name: "Day 2",
          title:
            "Game drive with an experienced guide & Launch cruise on Victoria Nile  ",
          description:
            "Start your day with an early breakfast and head for a guided game drive in Murchison Falls. Riding in a comfortable 4WD vehicle with a pop-up roof, you'll have 2-3 hours to marvel at the stunning wildlife, including antelope families, giraffes, lions, elephants, leopards, warthogs, and more. After returning for a relaxed lunch, spend your afternoon embarking on a boat cruise along the Nile extension. Keep your eyes peeled for hippos, crocodiles, and various aquatic birds. Then, trek to the top of the falls for breathtaking panoramic views. Capture some photos and witness the mighty rush of water as it creates the awe-inspiring 'Devil's Cauldron. Wrap up your day with a tranquil evening, dinner, and overnight accommodations. ",
        },
        {
          name: "Day 3",
          title: "Chimpanzee Tracking Kaniyo-Pabidi Forest/Budongo   ",
          description:
            "Start your day with a substantial breakfast before heading out from your accommodation to receive a briefing on the chimpanzee-tracking regulations in Budongo Forest. At 8:00 am, the actual trek to observe chimpanzees commences, led by an experienced guide. The trek typically lasts 2 to 4 hours, during which you'll have the opportunity for face-to-face interaction with the chimpanzees for up to an hour upon locating them. After this captivating experience, expect to return and enjoy a leisurely afternoon with lunch back at the lodge. In the evening, you can stroll in the nearby community, particularly in Boomu, or simply relax and share your day's adventures at the lodge.",
        },
        {
          name: "Day 4",
          title: " Depart Budongo for Kampala or Entebbe",
          description:
            "Enjoy a relaxed breakfast before departing from Budongo Forest towards Kampala/Entebbe via Luweero, which typically takes around 6 hours..",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: "    Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },

    {
      id: "magug1",
      image: "/images/mounti.jpg",
      title: "14 Days Exploring Rwanda ",
      description:
        "A 4-day Murchison Falls safari offers a fantastic way to explore and enjoy the wonders of Murchison Falls National Park in Uganda. This tour includes guided game drives, boat cruises, chimpanzee tracking in Kaniyo-Pabidi Forest, visiting the top of the falls, and rhino tracking at Ziwa Rhino Sanctuary. Murchison Falls National Park is the largest park in Northwestern Uganda, covering 3840 square kilometers. It's named after the impressive Murchison Falls, where the Nile River squeezes through a narrow gorge. The park is known for its diverse wildlife, including Rothschild giraffes, lions, Nile crocodiles, hippos, bird species, leopards, elephants, and warthogs. It's a great place for game viewing and birdwatching enthusiasts!",
      summary: [
        {
          title:
            "Day 1:  Rhino Tracking Ziwa Rhino Sanctuary & drive to Murchison Falls        ",
        },
        {
          title:
            "Day 2: Game drive with an experienced guide & Launch cruise on Victoria Nile           .  ",
        },
        {
          title:
            "Day 3:  Chimpanzee Tracking Kaniyo-Pabidi Forest/Budongo            ",
        },
        {
          title: "Day 4: Depart Budongo for Kampala or Entebbe   ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title:
            " Rhino Tracking Ziwa Rhino Sanctuary & drive to Murchison Falls National Park",
          description:
            "Following breakfast, the next activity on the itinerary is a tour of Murchison Falls, expected to involve approximately six hours of driving. Along the way, there will be a stop at the Ziwa Sanctuary, where you can participate in tracking white rhinos. Afterward, you'll proceed to Murchison Falls National Park, with lunch provided in Masindi town. Following lunch, you'll be transported to your chosen lodge in or around Murchison Falls National Park for check-in.",
        },
        {
          name: "Day 2",
          title:
            "Game drive with an experienced guide & Launch cruise on Victoria Nile  ",
          description:
            "Start your day with an early breakfast and head for a guided game drive in Murchison Falls. Riding in a comfortable 4WD vehicle with a pop-up roof, you'll have 2-3 hours to marvel at the stunning wildlife, including antelope families, giraffes, lions, elephants, leopards, warthogs, and more. After returning for a relaxed lunch, spend your afternoon embarking on a boat cruise along the Nile extension. Keep your eyes peeled for hippos, crocodiles, and various aquatic birds. Then, trek to the top of the falls for breathtaking panoramic views. Capture some photos and witness the mighty rush of water as it creates the awe-inspiring 'Devil's Cauldron. Wrap up your day with a tranquil evening, dinner, and overnight accommodations. ",
        },
        {
          name: "Day 3",
          title: "Chimpanzee Tracking Kaniyo-Pabidi Forest/Budongo   ",
          description:
            "Start your day with a substantial breakfast before heading out from your accommodation to receive a briefing on the chimpanzee-tracking regulations in Budongo Forest. At 8:00 am, the actual trek to observe chimpanzees commences, led by an experienced guide. The trek typically lasts 2 to 4 hours, during which you'll have the opportunity for face-to-face interaction with the chimpanzees for up to an hour upon locating them. After this captivating experience, expect to return and enjoy a leisurely afternoon with lunch back at the lodge. In the evening, you can stroll in the nearby community, particularly in Boomu, or simply relax and share your day's adventures at the lodge.",
        },
        {
          name: "Day 4",
          title: " Depart Budongo for Kampala or Entebbe",
          description:
            "Enjoy a relaxed breakfast before departing from Budongo Forest towards Kampala/Entebbe via Luweero, which typically takes around 6 hours..",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: "    Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },

    {
      id: "magug1",
      image: "/images/mounti.jpg",
      title: "4-Days Murchison Fall ",
      description:
        "A 4-day Murchison Falls safari offers a fantastic way to explore and enjoy the wonders of Murchison Falls National Park in Uganda. This tour includes guided game drives, boat cruises, chimpanzee tracking in Kaniyo-Pabidi Forest, visiting the top of the falls, and rhino tracking at Ziwa Rhino Sanctuary. Murchison Falls National Park is the largest park in Northwestern Uganda, covering 3840 square kilometers. It's named after the impressive Murchison Falls, where the Nile River squeezes through a narrow gorge. The park is known for its diverse wildlife, including Rothschild giraffes, lions, Nile crocodiles, hippos, bird species, leopards, elephants, and warthogs. It's a great place for game viewing and birdwatching enthusiasts!",
      summary: [
        {
          title:
            "Day 1:  Rhino Tracking Ziwa Rhino Sanctuary & drive to Murchison Falls        ",
        },
        {
          title:
            "Day 2: Game drive with an experienced guide & Launch cruise on Victoria Nile           .  ",
        },
        {
          title:
            "Day 3:  Chimpanzee Tracking Kaniyo-Pabidi Forest/Budongo            ",
        },
        {
          title: "Day 4: Depart Budongo for Kampala or Entebbe   ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title:
            " Rhino Tracking Ziwa Rhino Sanctuary & drive to Murchison Falls National Park",
          description:
            "Following breakfast, the next activity on the itinerary is a tour of Murchison Falls, expected to involve approximately six hours of driving. Along the way, there will be a stop at the Ziwa Sanctuary, where you can participate in tracking white rhinos. Afterward, you'll proceed to Murchison Falls National Park, with lunch provided in Masindi town. Following lunch, you'll be transported to your chosen lodge in or around Murchison Falls National Park for check-in.",
        },
        {
          name: "Day 2",
          title:
            "Game drive with an experienced guide & Launch cruise on Victoria Nile  ",
          description:
            "Start your day with an early breakfast and head for a guided game drive in Murchison Falls. Riding in a comfortable 4WD vehicle with a pop-up roof, you'll have 2-3 hours to marvel at the stunning wildlife, including antelope families, giraffes, lions, elephants, leopards, warthogs, and more. After returning for a relaxed lunch, spend your afternoon embarking on a boat cruise along the Nile extension. Keep your eyes peeled for hippos, crocodiles, and various aquatic birds. Then, trek to the top of the falls for breathtaking panoramic views. Capture some photos and witness the mighty rush of water as it creates the awe-inspiring 'Devil's Cauldron. Wrap up your day with a tranquil evening, dinner, and overnight accommodations. ",
        },
        {
          name: "Day 3",
          title: "Chimpanzee Tracking Kaniyo-Pabidi Forest/Budongo   ",
          description:
            "Start your day with a substantial breakfast before heading out from your accommodation to receive a briefing on the chimpanzee-tracking regulations in Budongo Forest. At 8:00 am, the actual trek to observe chimpanzees commences, led by an experienced guide. The trek typically lasts 2 to 4 hours, during which you'll have the opportunity for face-to-face interaction with the chimpanzees for up to an hour upon locating them. After this captivating experience, expect to return and enjoy a leisurely afternoon with lunch back at the lodge. In the evening, you can stroll in the nearby community, particularly in Boomu, or simply relax and share your day's adventures at the lodge.",
        },
        {
          name: "Day 4",
          title: " Depart Budongo for Kampala or Entebbe",
          description:
            "Enjoy a relaxed breakfast before departing from Budongo Forest towards Kampala/Entebbe via Luweero, which typically takes around 6 hours..",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: "    Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/ibyatsi.jpeg",
        },
        {
          name: "midrange",
          image: "/images/wite.jpeg",
        },
        {
          name: "budget",
          image: "/images/fatima.jpeg",
        },
      ],
    },

    {
      id: "magug2",
      image: "/images/gorila.jpg",
      title: "5 Days Uganda Gorilla Trekking Tour",
      description:
        "Experience the wonders of Uganda with our 5-day Gorilla Trekking Tour, which includes exploration of Kibale Forest National Park, Queen Elizabeth National Park's wildlife, and the iconic Gorilla Trekking adventure in Bwindi Impenetrable National Park. Immerse yourself in the enchanting African jungle and Savannah parks, where you can engage in chimpanzee trekking, thrilling game drives, and scenic boat cruises along the renowned Kanziga Channel. Embark on an unforgettable journey filled with magical experiences. Reach out to us to secure your spot on this remarkable Uganda safari.",
      summary: [
        {
          title: "Day 1:  Kampala – Kibale Forest National Park            ",
        },
        {
          title:
            "Day 2: Chimpanzee Trekking Kibale – Transfer to Queen Elizabeth National Park.  ",
        },
        {
          title:
            "Day 3:  Queen Elizabeth National Park – Bwindi Forests via Ishasha.  ",
        },
        {
          title: "Day 4: Gorilla Trekking Bwindi Forest ",
        },
        {
          title: "Day 5: Bwindi Forest-Kampala/Entebbe Out  ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "  Kampala – Kibale Forest National Park",
          description:
            "Following an early breakfast, embark on a scenic half-day drive to Fort Portal, passing through picturesque papyrus swamps and dense jungle terrain of the Nile Delta en route to Kibale National Park, nestled beneath the majestic Rwenzori Mountains. Pause for lunch at Gardens restaurant in Fort Portal before continuing leisurely to Kibale. In the afternoon, enjoy a crater walk at Nyinambuga, immersing yourself in the natural beauty of the area. Later, dine and stay overnight at the lodge in Kibale.",
        },
        {
          name: "Day 2",
          title:
            "Chimpanzee Trekking Kibale – Transfer to Queen Elizabeth National Park ",
          description:
            "After an early breakfast, get ready for a chimpanzee trek in Kibale Forest National Park, renowned for its diverse primate population in East Africa. Spend half a day exploring the lush jungle, searching for chimpanzees and other primates like phoestes, Red-Colobus, Blues, Red-tailed, and grey-cheeked Mangabeys. Your knowledgeable guide will offer insights into the forest's fauna and flora, enhancing your experience with detailed explanations and opportunities for bird watching. Following lunch, head to Queen Elizabeth National Park for a sunset boat trip along the famous Kazinga Channel. This two-hour excursion provides sightings of hippos, buffaloes, elephants, and various bird species, making it a memorable experience. Enjoy meals and an overnight stay at the lodge. ",
        },
        {
          name: "Day 3",
          title:
            "Queen Elizabeth National Park – Bwindi Forests via Ishasha    ",
          description:
            "Embark on an early morning game drive along Kasenyi and Queens Mile, where visitors can witness diverse wildlife, including elephants, buffalo, waterbucks, warthogs, lions, Uganda Kobs, and numerous bird species. Afterward, journey to Bwindi Impenetrable Forest via the southern part of Queen Elizabeth, Ishasha, for an exceptional game safari, offering the chance to spot the elusive tree-climbing lions and other rare wildlife. Enjoy lunch in Ishasha before continuing to your lodge for dinner and overnight accommodation.",
        },
        {
          name: "Day 4",
          title: "  Gorilla Trekking Bwindi Forest  ",
          description:
            "Today is dedicated to the unforgettable gorilla trekking experience in the Bwindi jungles. You'll set off for this exciting adventure after a briefing from guides and rangers equipped with trekking gear, including jungle boots, rain jackets, and walking sticks. Gorilla trekking is unpredictable and may involve a challenging hike lasting anywhere from 2 to 8 hours, traversing steep and muddy terrain. Despite the conditions, be prepared to walk long distances in pursuit of these majestic creatures. If time allows in the afternoon, you'll have the opportunity for a community foot safari, immersing yourself in the local culture and enjoying cultural performances. Conclude the day with dinner and an overnight stay at your lodge.",
        },
        {
          name: "Day 5",
          title: "  Bwindi Forest-Kampala/Entebbe Out  ",
          description:
            "Begin your day with breakfast before going back to Kampala. Along the way, you can stop at a local hotel for lunch. Make sure to pause at the Equator crossing line in Masaka for photography opportunities before continuing your journey back to Kampala or Entebbe Airport. Expect to arrive very late in the evening .",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: " Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },
    {
      id: "magug3",
      image: "/images/women.jpeg",
      title: "6-Days Uganda Safari  ",
      description:
        "The 6-days Uganda safari offers an exceptional exploration of the country's top tourist destinations in Western and Southwestern Uganda. The highlight is gorilla trekking in Bwindi Impenetrable National Park, home to a significant population of mountain gorillas. Additionally, chimpanzee tracking in Kibale Forest National Park allows the observation of various primate species, including over 1500 chimpanzees. Queen Elizabeth National Park offers guided game viewing, allowing visitors to see tree-climbing lions, diverse bird species, and other mammals. This safari provides an unforgettable wildlife experience in Uganda's stunning natural landscapes.",
      summary: [
        {
          title:
            "Day 1:  Kampala to Kibale National Park, Kabarole district in the western safari circuit  ",
        },
        {
          title:
            "Day 2: Chimpanzee Trekking Kibale – Transfer to Queen Elizabeth National Park.  ",
        },
        {
          title:
            "Day 3:  Safari game drive Kasenyi and boat/launch tour Kazinga Channel            .  ",
        },
        {
          title:
            "Day 4:  Queen Elizabeth N/Park-Bwindi National Park in Southwestern Uganda            .  ",
        },
        {
          title:
            "Day 5 Bwindi Impenetrable Forest-Gorilla Tracking & Batwa tour            ",
        },
        {
          title: "Day 6:From Bwindi to Kampala/Entebbe- Departure ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title:
            "  Kampala to Kibale National Park, Kabarole district in the western safari circuit           ",
          description:
            "Enjoy a substantial breakfast from your accommodation, then meet up with your Uganda safari guide. Depart from either Kampala or Entebbe early in the morning, heading towards Kibale Forest National Park in Western Uganda. The journey typically takes 5-6 hours via the Mityana-Mubende-Fort Portal route. Upon reaching Fort Portal, your driver guide will make a planned stop for you to enjoy lunch and refreshments. Continue your journey towards Kibale, taking in the stunning sights of crater lakes and tea plantations. Arrive at your lodge in Kibale for dinner and an overnight stay.            .",
        },
        {
          name: "Day 2",
          title:
            "Chimpanzee tracking & take a trip to Queen Elizabeth National Park            ",
          description:
            "Begin your day by enjoying a delicious breakfast, followed by a briefing session on the guidelines for chimpanzee trekking in Kibale. This briefing will take place from 7:00 am to 8:00 am at the Kanyanchu Tourist Centre, where you will also complete any necessary administrative procedures at the reception desk. In addition to observing chimpanzees, anticipate encountering other fascinating wildlife, such as L’Hoest monkeys, baboons, colobus monkeys, red-tailed monkeys, and various bird species during the trek. You will return or be picked up at the designated area inside the forest where your driver's guide dropped you off. After lunch, depart from Kibale for a three-hour journey to Queen Elizabeth National Park. ",
        },
        {
          name: "Day 3",
          title:
            "Safari game drive Kasenyi and boat/launch tour Kazinga Channel            ",
          description:
            "Wake up early, have breakfast, and meet your guide ready for a 2-3 hour guided game drive through the Kasenyi Plains. This area offers numerous fascinating animal sightings, such as buffaloes, warthogs, lions, leopards, elephants, antelopes, and birds. Afterward, return to your lodge for lunch and enjoy a leisurely afternoon. Next, embark on an exciting safari experience aboard a boat starting at 2:00 pm, cruising along the Kazinga Channel. Here, you'll be able to observe hippos, crocodiles, waterbucks, and many aquatic birds. Return to your lodge to freshen up, have dinner, and spend the night.",
        },
        {
          name: "Day 4",
          title:
            " Queen Elizabeth N/Park-Bwindi National Park in Southwestern Uganda          ",
          description:
            "After enjoying breakfast at your Queen Elizabeth National Park lodge, embark on a journey to Bwindi Forest. Along the way, pass through Ishasha to glimpse the famous tree-climbing lions and abundant wildlife. Take in the breathtaking landscape views and stop for lunch at Savanna Resort. Afterward, indulge in a revitalizing dinner and spend the night at your reserved lodge.            .",
        },
        {
          name: "Day 5",
          title:
            "  Bwindi Impenetrable Forest-Gorilla Tracking & Batwa tour    ",
          description:
            "Begin your day with an early breakfast at our gorilla lodge in Bwindi Forest, followed by a briefing at the park offices. As trekking to see the Bwindi gorillas can be unpredictable, we recommend bringing a packed lunch and bottled water. Depart from the Bwindi offices at 8:00 am with your park guide for the gorilla trek, which can last 3 to 6 hours or more. Upon encountering the mountain gorillas, you'll have a full hour to observe their behaviors, take photos, and immerse yourself in the experience before returning to the lodge for refreshment. Later in the evening, after ample relaxation time, embark on a cultural walk to visit the Batwa Pygmies community .",
        },
        {
          name: "Day 6",
          title: " From Bwindi to Kampala/Entebbe- Departure ",
          description:
            "After enjoying a substantial breakfast in the morning, depart from Bwindi Forest, heading towards Kampala or Entebbe. During the 8-10 hour drive back, you can anticipate stopping at specific points such as Igongo cultural center for lunch and the Equator for photo opportunities.",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: " Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },
    {
      id: "magug4",
      image: "/images/antop.jpeg",
      title: "7 Days Uganda Safari  ",
      description:
        "The 7-day Uganda safari presents an immersive wildlife tour, showcasing a variety of thrilling activities and adventures. Participants will engage in captivating experiences throughout six nights, including chimpanzee tracking in Kibale Forest National Park, safari game drives, and a Queen Elizabeth National Park boat trip. The itinerary also encompasses birdwatching and a visit to the Batwa community. The journey begins and concludes in either Kampala or Entebbe.",
      summary: [
        {
          title: "Day 1:  A Tour to Kibale Forest National Park ",
        },
        {
          title:
            "Day 2: Chimpanzee Trekking Kibale – Transfer to Queen Elizabeth National Park.  ",
        },
        {
          title:
            "Day 3:   A safari to Queen Elizabeth National Park-safari game drive            .  ",
        },
        {
          title:
            "Day 4:  Another Safari game drive & boat cruise on Kazinga Channel            .  ",
        },
        {
          title:
            "Day 5: Tour Maramagambo Forest & travel to Bwindi Impenetrable National Park ",
        },
        {
          title:
            "Day 6: Mountain Gorilla Trekking Bwindi- The South-western circuit  ",
        },
        {
          title:
            "Day 7: Departure from Bwindi National Park-southwestern circuit  ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: "  A Tour to Kibale Forest National Park            ",
          description:
            "You'll start your day with a hearty breakfast at a hotel in Entebbe/Kampala before embarking on a journey to Kibale National Park via the scenic route through Mityana-Mubende to Fort Portal City. Along the 5-6 hour drive, you'll be treated to breathtaking countryside views, including verdant forests, tea plantations, and enchanting crater lakes. Upon reaching Fort Portal Tourism City, there will be a brief lunch break, followed by an exploration of what makes this city a prominent tourism destination in Uganda. Afterward, you'll continue your journey to Kibale Forest National Park, where you'll check into a lodge.",
        },
        {
          name: "Day 2",
          title:
            "Chimpanzee tracking & take a trip to Queen Elizabeth National Park            ",
          description:
            "Start your day with a refreshing coffee or tea, followed by a transfer to the Kanyanchu Tourist Centre, nestled in the heart of Kibale National Park. Here, you'll receive a briefing from park officials on the rules for chimpanzee tracking and be assigned a knowledgeable park guide. In addition to chimpanzees, the park boasts a diverse array of primate species, birds, butterflies, and flora to discover. The actual chimpanzee trekking adventure begins promptly at 8:00 am, with the expectation of spending 3-5 hours in the forest, including an hour of observing and photographing these fascinating creatures. After the trek, return to the lodge for a leisurely lunch, where you can reminisce about your experiences. Later in the afternoon, prepare for an enriching excursion to the Bigodi Wetland, promising more memorable encounters with wildlife. ",
        },
        {
          name: "Day 3",
          title:
            "A safari to Queen Elizabeth National Park-safari game drive.            ",
          description:
            "Sip on a steaming cup of tea or coffee before departing your accommodation in Kibale and hopping into a vehicle for a three-hour drive to Queen Elizabeth National Park. Upon arrival, make your way to the Ishasha area for a unique experience observing tree-climbing lions and various wildlife and bird species. If you have spare time after the Ishasha game drive, consider taking a brief stroll through the Kyambura Gorge to appreciate its natural beauty before settling into your lodge for the night.",
        },
        {
          name: "Day 4",
          title:
            "Another Safari game drive & boat cruise on Kazinga Channel            ",
          description:
            "After an early breakfast at your lodge, you'll embark on a second safari game drive along the Kasenyi savanna plains in Queen Elizabeth National Park. During this guided excursion lasting 2-3 hours, you can anticipate remarkable sightings of predators, various bird species, buffaloes, and antelopes. Following the exhilarating game drive, you'll break for lunch before proceeding to the Kazinga channel for a boat cruise, which also lasts 2-3 hours. This leisurely trip allows one to observe diverse wildlife, including aquatic birds, hippos, crocodiles, and more..",
        },
        {
          name: "Day 5",
          title:
            "  Tour Maramagambo Forest & travel to Bwindi Impenetrable National Park  ",
          description:
            "Begin your day with a steaming cup of tea or coffee before embarking on a fascinating excursion to Lake Katwe to delve into the intricacies of salt mining, a predominant activity in this area. Afterward, venture to Maramagambo Forest for a guided exploration of its natural wonders. Following your forest exploration, go to Bwindi Impenetrable National Park, where you'll settle into your accommodation for the night.",
        },
        {
          name: "Day 6",
          title:
            " Mountain Gorilla Trekking Bwindi- The South-western circuit          ",
          description:
            "Move to the Bwindi offices for a briefing at 7:00 am regarding the guidelines for gorilla trekking, following breakfast. After ensuring all preparations are in place, embarking on the trekking adventure in Bwindi can last approximately 3 to 6 hours, including spending an hour in direct proximity to the designated gorilla group. After observing their behaviors and capturing photos, return for a leisurely lunch. Wrap up the day with a distinctive tour of the Batwa community.",
        },
        {
          name: "Day 7",
          title: " Departure from Bwindi National Park-southwestern circuit ",
          description:
            "Have breakfast promptly in the morning, then depart from Bwindi for Kampala or Entebbe, where your knowledgeable driver guide will drop you off. Along the way, there will be a break for lunch at Igongo Cultural Centre, followed by a photo opportunity at the Equator crossing in Kayabwe. Your Uganda driver guide will then take you to your hotel in Kampala or Entebbe, concluding the journey.",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: " Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },
    {
      id: "magug5",
      image: "/images/giraff.jpeg",
      title: "8 Days Adventure Experience in Uganda",
      description:
        "Embark on an 8-day adventure in Uganda, delving into the wonders of Kidepo Valley National Park, renowned for its exceptional wildlife. Experience thrilling game drives and a scenic boat trip along the Nile River in Murchison Falls National Park. Additionally, indulge in the Ziwa Rhino Tracking experience on your return journey to Kampala. Reach out to us to reserve your spot on this safari tour.",
      summary: [
        {
          title: "Day 1 : Arrival – Entebbe International Airport ",
        },
        {
          title: "Day 2: Transfer to Gulu Town   .  ",
        },

        {
          title: "Day 3:  Transfer to Kidepo National Park  .  ",
        },
        {
          title: "Day 4: Morning and Afternoon Game Drives ",
        },
        {
          title: "Day 5: Karimojong Cultural Visit  ",
        },
        {
          title: "Day 6: Transfer to Murchison Falls National Park  ",
        },
        {
          title: "Day 7: Morning game drive and afternoon Boat cruise  ",
        },
        {
          title: "Day 8: Departure to Kampala via Ziwa Rhino Tracking  ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title: " Arrival – Entebbe International Airport          ",
          description:
            "Upon reaching the airport, you'll receive a friendly welcome from a safari guide from Gorilla Adventure Tours. They will escort you to the pre-arranged hotel for your check-in process.",
        },
        {
          name: "Day 2",
          title: "Transfer to Gulu Town. ",
          description:
            "After enjoying your breakfast at the hotel, you'll be picked up for your tour to Uganda's most secluded national park. You'll traverse vast plains and remote vegetation as you journey towards the country's northern regions. Along the way, there will be a break for lunch in Gulu before continuing to Kitgum, where you'll have dinner and spend the night. ",
        },
        {
          name: "Day 3",
          title: "Transfer to Kidepo National Park. ",
          description:
            "Following breakfast in the morning, you'll journey to Kidepo Valley National Park and reach the lodge in time for lunch. An exciting game drive awaits in the afternoon, offering opportunities to observe wildlife such as lions, buffaloes, giraffes, zebras, and elephants. After the game drive, you'll return to the lodge for dinner and spend the night.",
        },
        {
          name: "Day 4",
          title: "Morning and Afternoon Game Drives            ",
          description:
            "Today, you'll dedicate both the morning and afternoon to exploring the savannah plains of Kidepo Valley National Park through game drives. This park boasts an impressive array of animal species, surpassing many other national parks in Uganda. In 1971, it recorded eighty species, with twenty-eight not found in any other Ugandan park. Among the notable large ungulates are elephants, oribi, Burchell's zebras, Jackson's hartebeests, bush pigs, Bohor reedbucks, warthogs, Rothschild giraffes, Defassa waterbucks, Cape buffaloes, elands, bush duikers, and bushbucks. Additionally, the park is home to five primate species, with the Kavirondo bush baby being the most endemic. Carnivores in the area include lions, side-striped jackals, leopards, black-backed jackals, various small cats, and spotted hyenas.",
        },
        {
          name: "Day 5",
          title: " Karimojong Cultural Visit ",
          description:
            "Following breakfast in the morning, you can either visit the residences of the Karimojong people, engage with their elders, and gain insights into their lifestyle, culture, and traditions as a once nomadic pastoral community, or opt for additional game drives for the day.Return to Savannah Lodge for dinner and spend the night in Kidepo.",
        },
        {
          name: "Day 6",
          title: " Transfer to Murchison Falls National Park            ",
          description:
            "Begin your day with breakfast and drive to Murchison Falls National Park, situated in the North-West of Uganda within Masindi District. Positioned after the Albertine Rift Valley, this park is the largest and oldest national park in Uganda. Covering approximately 4000 square kilometers, the Murchison Falls Conservation Area is divided by the Victoria Nile, where it cascades 45 meters over the remaining valley wall, forming the striking falls. You'll arrive late evening and transfer to the lodge for dinner and an overnight stay.",
        },
        {
          name: "Day 7",
          title: " Morning game drive and afternoon Boat cruise  ",
          description:
            "Start your day with a refreshing cup of coffee before embarking on a morning safari with your guide. During this excursion, you'll have the chance to see a variety of wildlife, including antelopes, hippos, buffaloes, giraffes, and, if you're fortunate, big cats like leopards and lions. After the safari, return to the lodge for lunch. In the afternoon, enjoy a scenic boat cruise to the base of the falls. Along the way, you'll encounter herds of buffaloes, crocodiles, hippos, and various water bird species as they gather along the River Nile. Take in the breathtaking sight of the falls as the water cascades through a narrow gorge before returning to the lodge.",
        },
        {
          name: "Day 8",
          title: "Departure to Kampala via Ziwa Rhino Tracking   ",
          description:
            "Enjoy a leisurely breakfast and get ready for your trip to the Ziwa Rhino Sanctuary. Rhino tracking usually takes around one to two hours, depending on the rhinos' whereabouts, and it's done on foot, unlike traditional game drives. Participants should wear closed-toe shoes and long pants and bring water and insect repellent. Additionally, the sanctuary offers various activities such as bird watching, where you might catch sight of the elusive Shoebill, and options like canoe rides, night walks, and nature walks. After your visit, continue your journey to Kampala/Entebbe.",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: " Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },
    {
      id: "magug6",
      image: "/images/eagle.jpg",
      title: "9 Days Uganda Safari",
      description:
        "Embark on a 9-day adventure in Uganda that promises an unforgettable experience. Explore the enchanting Bwindi Impenetrable National Park for an unparalleled Gorilla Trekking encounter and delve into Chimpanzee Tracking in Kibale Forest National Park. Discover the majestic Ziwa Rhino Tracking experience and partake in guided game drives and serene boat cruises in renowned parks like Murchison Falls and Queen Elizabeth. Book this comprehensive package for nine days, with eight nights of accommodation, departing and returning to Entebbe/Kampala and returning home with cherished memories that will last a lifetime.",
      summary: [
        {
          title:
            "Day 1 :A tour to Murchison Falls-en-route Rhino tracking at Ziwa   ",
        },
        {
          title:
            "Day 2: A safari game drive & boat cruise-Murchison Falls National Park          .  ",
        },

        {
          title: "Day 3:  A trip to Kibale Forest National Park  .  ",
        },
        {
          title:
            "Day 4: Chimpanzee Tracking-Bigodi nature walk in the afternoon ",
        },
        {
          title:
            "Day 5: Ground travel to Queen Elizabeth N/Park from Kibale          ",
        },
        {
          title:
            "Day 6: Game drive Kasenyi Plains & Kazinga Channel Launch cruise  ",
        },
        {
          title:
            "Day 7: Ishasha sector safari game drive & ground travel to Bwindi           ",
        },
        {
          title: "Day 8: A Gorilla Trek Adventure Bwindi & Batwa Encounter ",
        },
        {
          title:
            "Day 9: Depart Bwindi National Park Kabale for Kampala/Entebbe-stopover at the Equator ",
        },
      ],
      accom: [{ title: "Luxury" }, { title: "Midrange" }, { title: "Budget" }],
      days: [
        {
          name: "Day 1",
          title:
            " A tour to Murchison Falls-en-route Rhino tracking at Ziwa        ",
          description:
            "Rise early to savor a delightful cup of steaming tea or coffee before meeting up with your experienced tour guide from Uganda. You'll then be whisked away to Murchison Falls National Park, the largest in Uganda, spanning an impressive 3840 square kilometers and situated in the North-western safari circuit. The journey, approximately 6 hours long, will take you along the Kampala-Luweero-Gulu highway, with a stop planned for thrilling rhino tracking at Ziwa Rhino Sanctuary in Nakasongola. After a satisfying lunch at a hotel in Masindi, the route continues through the southern gate, guiding you through the refreshing ambiance of Budongo Forest, known for its cool climate. Arriving early, you'll head straight to the top of the falls, where the mighty River Nile dramatically squeezes through a 7-meter narrow gorge, creating a thunderous roar and a mesmerizing permanent rainbow. Capture the breathtaking scenery with your camera before retreating to your lodge for a peaceful overnight stay.",
        },
        {
          name: "Day 2",
          title:
            "A safari game drive & boat cruise-Murchison Falls National Park . ",
          description:
            "Enjoy a delightful breakfast at the finest lodge in Murchison Falls to prepare for the second day of your 9-day Uganda safari. Today's agenda begins with a guided game drive along the Northern circuit of Murchison Falls National Park, spanning 2 to 3 hours. This promises thrilling encounters with various wildlife, including lions, elephants, giraffes, buffaloes, warthogs, antelopes, birds, and, if lucky, even leopards. After an immersive experience exploring the northern circuit and spotting diverse species, return to the lodge for a leisurely lunch. Later in the afternoon, embark on an exhilarating boat cruise along the Victoria Nile, navigating towards the base of the awe-inspiring Murchison Falls. Keep your eyes peeled for sightings of hippos, Nile crocodiles, and many aquatic birds along the way. Upon reaching the base of Murchison Falls, you and your guide can disembark the boat for a trek to the summit, promising a captivating adventure and breathtaking views. ",
        },
        {
          name: "Day 3",
          title: " A trip to Kibale Forest National Park . ",
          description:
            "Have a substantial breakfast before leaving Murchison Falls National Park for Kibale, passing through Hoima and marveling at the breathtaking escarpment of the western Rift Valley. Enjoy lunch at one of the finest lodges or hotels in Fort Portal City before continuing to your accommodation in Kibale.",
        },
        {
          name: "Day 4",
          title:
            "Chimpanzee Tracking-Bigodi nature walk in the afternoon          ",
          description:
            "Enjoy breakfast at the lodge you've booked, then head to the Kanyanchu Tourist Centre for the 7:00 am briefing on chimpanzee tracking guidelines. The chimpanzee trek lasts 2-4 hours and will commence at 8:00 am once you've been assigned a park guide. After observing the chimpanzees' daily routines in the rainforest, I realized there's plenty more to explore in this protected area. Later in the day, journey to Bigodi, just a short distance from Kibale, where you'll embark on a guided nature walk. Bigodi Sanctuary and Wetland boasts a rich diversity of primates and birds, ensuring an unforgettable experience during your nature walk.",
        },
        {
          name: "Day 5",
          title: " Ground travel to Queen Elizabeth N/Park from Kibale",
          description:
            "After breakfast, depart from Kibale towards Queen Elizabeth National Park, passing through Fort Portal. The journey typically takes around three hours to reach the park. Upon arrival, have lunch and take some time to relax before embarking on an afternoon safari to spot the park's impressive array of wildlife.",
        },
        {
          name: "Day 6",
          title:
            " Game drive Kasenyi Plains & Kazinga Channel Launch cruise          ",
          description:
            "After a hearty breakfast, head out for a safari adventure on the Kasenyi Plains within Queen Elizabeth National Park. Here, you'll encounter various wildlife, including antelopes, buffaloes, lions, birds, warthogs, leopards, and more. Spend a few hours exploring the area's rich biodiversity in your 4WD vehicle before returning to the lodge for lunch. Continue your wildlife exploration in the afternoon with a boat cruise on the Kazinga Channel. This relaxing journey lasts around 2-3 hours and offers incredible sightings of hippos, crocodiles, water birds, and other mammals. After enjoying the best water sports, return to the lodge to unwind and reflect on your exciting Queen Elizabeth National Park day.            .",
        },
        {
          name: "Day 7",
          title: " Ishasha sector safari game drive & ground travel to Bwindi ",
          description:
            "Have a delightful breakfast and depart from Queen Elizabeth National Park towards Bwindi Impenetrable National Park, stopping at Ishasha in the southern part. While passing through Ishasha, take advantage of the opportunity to spot the famous tree-climbing lions, other impressive wildlife, and numerous bird species. Afterward, enjoy a lunch break at Savanna Resort before transferring to your Bwindi Lodge.",
        },
        {
          name: "Day 8",
          title: "A Gorilla Trek Adventure Bwindi & Batwa Encounter          ",
          description:
            "Have an early breakfast and head to the Bwindi offices to meet with park officials for a briefing on gorilla trekking regulations. Bring some snacks and enough water, then venture into the jungle to locate a group of gorillas assigned to you. Exploring the lush Bwindi forest in search of mountain gorillas can take 3 to 6 hours, including captivating hour-long encounters and photo opportunities. After a fantastic experience with the gorillas, receive your trekking certificate and return to the lodge for some afternoon relaxation. Later in the afternoon, participate in a Batwa encounter, where you'll learn about how the Batwa pygmies coexisted peacefully with mountain gorillas and their cultural traditions, and enjoy traditional dances, music, and stories shared by elders.",
        },
        {
          name: "Day 9",
          title:
            "Depart Bwindi National Park Kabale for Kampala/Entebbe-stopover at the Equator",
          description:
            "Following a substantial breakfast in the early hours, you'll be met by our skilled driver-guide for the journey from Bwindi to Kampala/Entebbe, where you'll be dropped off at your hotel/lodge. However, on the return leg from Bwindi, our itinerary includes a stop for lunch at the Igongo Cultural Centre and an opportunity to capture photos at the Equator crossing.",
        },
      ],
      included: [
        {
          title:
            "Airport and inter-hotel transfers from day 1 to the last day.",
        },
        {
          title:
            "Accomodationing in Luxury, Mid Range, or Budget properties as indicated in the itinerary",
        },

        {
          title:
            "All Meals, as indicated in the itinerary, are based on half and full- board",
        },

        {
          title: "Park entrance fees .",
        },
        {
          title: "Permits.",
        },
        { title: "All other tour activities, as mentioned in the itinerary" },
        { title: "Ground transport in a 4x4 Land cruiser vehicle  ." },
        { title: "Ground transport in a 4x4 Land cruiser vehicle." },
        { title: "English-speaking driver guide." },
        { title: "Free mineral drinking water in the vehicle ." },
        { title: "Local taxes and handling charges." },
      ],
      excluded: [
        {
          title: "International and domestic flights   .",
        },
        { title: "Entry visa fees and Travel Insurance  ." },

        {
          title: "All Tips to Hotels/Lodges/Camps staff and Safari Guide.",
        },

        {
          title: "Personal expenses such as mini bar, porterage, laundry, etc.",
        },
        {
          title: " Other meals  not mentioned in the itinerary.",
        },

        {
          title:
            "Alcoholic and non-alcoholic drinks that are not accompanying meals ",
        },
      ],
      accomodation: [
        {
          name: "luxury",
          image: "/images/luxug.jpeg",
        },
        {
          name: "midrange",
          image: "/images/spek.jpeg",
        },
        {
          name: "budget",
          image: "/images/bugug.jpeg",
        },
      ],
    },
  ];
  const displayInteray = () => {
    if (itenary == true) {
      return (
        <>
          <p className="trip">Trip Summary</p>
          {result[0].summary.map((suma) => {
            return <p className="sumary">{suma.title}</p>;
          })}
          <p className="trip"> Accommodation options</p>
          {result[0].accom.map((suma) => {
            return <p className="sumary">{suma.title}</p>;
          })}
          <div className="meal">
            <p className="titleside ">
              <span className="paragah">
                <p className="titleside">
                  Meal Plan:
                  <span className="paragah">
                    {" "}
                    Based on Full board/Half board
                  </span>
                </p>
              </span>
            </p>
          </div>

          <div className="pararaph">
            {eachdays[0] &&
              eachdays[0].map((item) => {
                return (
                  <>
                    <h3 className="eyes">
                      {item.name} : <span className="pr-5">{item.title}</span>
                    </h3>
                    <p className="paragahome">{item.description}</p>
                  </>
                );
              })}
            <p className="magai ml-5">END OF THE TOUR-A TRIP TO REMEMBER</p>
          </div>
        </>
      );
    } else return "";
  };

  const displayInclude = () => {
    if (include == true) {
      return (
        <div className="pararaph">
          {includeddetails &&
            includeddetails[0].map((item) => {
              return (
                <p className="paragahome">
                  <FaCircleCheck className="iconview " />
                  <span className="iconword">{item.title}</span>
                </p>
              );
            })}
        </div>
      );
    } else return "";
  };

  const displayExclude = () => {
    if (exclude == true) {
      return (
        <div className="pararaph">
          {excludedetails &&
            excludedetails[0].map((item) => {
              return (
                <p className="paragahome">
                  <ImCross className="iconviy " />{" "}
                  <span className="iconword">{item.title}</span>
                </p>
              );
            })}
        </div>
      );
    } else return "";
  };
  const displayAccomodation = () => {
    if (accomodation == true) {
      return (
        <div
          style={{
            display: "flex",
            padding: "10px",
            marginLeft: "100px",
          }}
        >
          {accomdetails &&
            accomdetails[0].map((item) => {
              return (
                <div className="d-flex ">
                  <p className="conje">{item.name}</p>
                  <p className="paragah">
                    <ImageWithContent imageUrl={item.image} />
                  </p>
                </div>
              );
            })}
        </div>
      );
    } else return "";
  };
  let path = window.location.href;
  let itenaryId = path.split("/")[4];
  console.log(itenaryId);

  const result =
    details &&
    details.filter((item) => item.id?.toLowerCase().includes(itenaryId));

  const eachdays =
    result &&
    result.map((item) => {
      return item.days;
    });
  const includeddetails =
    result &&
    result.map((item) => {
      return item.included;
    });
  const excludedetails =
    result &&
    result.map((item) => {
      return item.excluded;
    });
  const accomdetails =
    result &&
    result.map((item) => {
      return item.accomodation;
    });
  console.log(result[0].image);
  return (
    <div className="home">
      <HeaderOnly
        header1={result[0].title}
        image="/images/irag.jpeg"
        headerImage="header-imagabout"
        overlay="overlayabout"
        btncss="btnabout"
      />
      <section className="iternaries">
        <div className="opogo">
          <div style={{ flex: 1, padding: "10px" }}>
            <h2 className="">Trip Overview</h2>
            <p className="paragahome">{result[0].description}</p>

            <div className="opogo">
              <div style={{ flex: 1, padding: "10px" }}>
                {" "}
                <button className="btngreen" onClick={() => showItenary()}>
                  Itenary
                </button>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                {" "}
                <button className="btngreen" onClick={() => showInclude()}>
                  Inclusions
                </button>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                {" "}
                <button className="btngreen" onClick={() => showExclude()}>
                  Exclusions
                </button>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                {" "}
                <button className="btngreen" onClick={() => showAccomod()}>
                  Accommodation
                </button>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <img
              src={result[0].image}
              className="youngji img-fluid"
              alt=""
              // style={{ width: "400px", height: "400px", borderRadius: "50%" }}
            />
          </div>
        </div>
        {displayInteray()}
        {displayInclude()}
        {displayExclude()}
        {displayAccomodation()}
      </section>
    </div>
  );
}

export default Itineraries;
