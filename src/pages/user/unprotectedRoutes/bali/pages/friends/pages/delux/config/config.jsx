//Assets
import friendsDelux from "@/assets/friendsDelux.jpg";
import baliSlider1 from "@/assets/bali1.webp";
import baliSlider2 from "@/assets/bali2.webp";
import baliSlider3 from "@/assets/bali3.jpeg";
import baliSlider4 from "@/assets/bali4.webp";
import baliActivity1 from "@/assets/baliActivity1.jpeg";
import baliActivity2 from "@/assets/baliActivity2.jpeg";
import baliActivity3 from "@/assets/baliActivity3.jpeg";
import baliActivity4 from "@/assets/baliActivity4.jpeg";
import baliActivity5 from "@/assets/baliActivity5.jpeg";
import baliActivity6 from "@/assets/baliActivity6.jpeg";
import baliActivity7 from "@/assets/baliActivity7.jpeg";

export const data = {
  title: "Party Island bali",
  heroImg: friendsDelux,
  content: [
    `Bali offers the perfect blend of adventure and relaxation.`,
    `Enjoy thrilling water sports, explore hidden waterfalls, and`,
    `immerse yourself in rich traditions. With its stunning landscapes,`,
    `Bali is a haven for travellers seeking both excitement and tranquillity.`,
  ],
  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-24.5%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-19.5%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [baliSlider1, baliSlider2, baliSlider3, baliSlider4],
  price: "75,000",
};

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: baliActivity1,
    color: "DDA15E",
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
    image: baliActivity2,
    color: "F5CFDE",
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
    image: baliActivity3,
    color: "EB7E67",
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
    image: baliActivity4,
    color: "FFE894",
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
    image: baliActivity5,
    color: "83D3FC",
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
    image: baliActivity6,
    color: "C7E788",
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
    image: baliActivity7,
    color: "F2A7B3",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
