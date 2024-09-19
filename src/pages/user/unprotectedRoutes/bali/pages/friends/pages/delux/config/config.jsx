//Assets
import friendsDelux from "@/assets/friendsDelux.webp";
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";

export const data = {
  title: "Party Island bali",
  heroImg: friendsDelux,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-24.3%"],
  xRange2: ["0%", "-22%"],
  xRange3: ["0%", "0%"],

  sliderImg: [
    baliSlider1,
    baliSlider2,
    baliSlider3,
    baliSlider4,
    baliSlider5,
    baliSlider6,
  ],
  price: "75,000",
};

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: "",
    color: "",
    plans: [
      {
        title: "Rest",
        data: ["Relax after your arrival"],
      },
      {
        title: "Visit",
        data: ["A nearby place or relax at the beach"],
      },
      {
        title: "Dinner",
        data: ["Dinner at a beachside restaurant"],
      },
    ],
  },
  {
    day: 1,
    title: "Temples and Waterfalls",
    image: "",
    color: "",
    plans: [
      {
        title: "Visit",
        data: [
          "Tanah Lot Temple",
          "Kanto Lampo Waterfalls",
          "Ubud Monkey Forest",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Adventure and Cultural Exploration",
    image: "",
    color: "",
    plans: [
      {
        title: "Activities",
        data: ["Water sports activities (e.g., jet skiing or parasailing)"],
      },
      {
        title: "Visit",
        data: [
          "Garuda Wisnu Kencana (GWK) Cultural Park",
          "Uluwatu Temple",
          "Karang Boma Cliff or Kecak Dance",
        ],
      },
      {
        title: "Dinner",
        data: ["Seafood dinner at Jimbaran Beach"],
      },
    ],
  },
  {
    day: 3,
    title: "Island Adventure",
    image: "",
    color: "",
    plans: [
      {
        title: "Visit",
        data: ["Explore Nusa Penida Island"],
      },
    ],
  },
  {
    day: 4,
    title: "Rest and Relaxation",
    image: "",
    color: "",
    plans: [
      {
        title: "Activities",
        data: [
          "Local shopping at nearby markets",
          "Spa session for relaxation",
          "Visit Finns Beach Club",
        ],
      },
    ],
  },
  {
    day: 5,
    title: "Temples and Activities",
    image: "",
    color: "",
    plans: [
      {
        title: "Activities",
        data: ["Choose between river rafting or an ATV ride"],
      },
      {
        title: "Visit",
        data: ["Ulun Danu Beratan Temple", "Bali Handara Gate"],
      },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    image: "",
    color: "",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
