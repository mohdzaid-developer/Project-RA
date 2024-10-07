//Assets
import coupleDelux from "@/assets/coupleDelux.jpg";
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";
import baliActivity1 from "@/assets/baliActivity1.jpeg";
import baliActivity2 from "@/assets/baliActivity2.jpeg";
import baliActivity3 from "@/assets/baliActivity3.jpeg";
import baliActivity4 from "@/assets/baliActivity4.jpeg";
import baliActivity5 from "@/assets/baliActivity5.jpeg";
import baliActivity6 from "@/assets/baliActivity6.jpeg";
import baliActivity7 from "@/assets/baliActivity7.jpeg";

export const data = {
  title: "Love Island",
  heroImg: coupleDelux,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-31.5%"],
  xRange2: ["0%", "-29.5%"],
  xRange3: ["0%", "-28%"],
  xRange4: ["0%", "-25%"],
  xRangeLast: ["0%", "0%"],

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
    color: "DDA15E",
    image: baliActivity1,
    plans: [
      {
        title: "Rest",
        data: ["Relax after your arrival"],
      },
      {
        title: "Visit",
        data: [
          "Explore local places or beaches",
          "Visit a beach club (Vue Beach Club or similar)",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Temples and Waterfalls",
    color: "F5CFDE",
    image: baliActivity2,
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
    title: "Adventure and Culture",
    color: "EB7E67",
    image: baliActivity3,
    plans: [
      {
        title: "Activities",
        data: ["Water sports (e.g., jet skiing, or parasailing)", "GWK"],
      },
      {
        title: "Visit",
        data: ["Uluwatu Temple", "Kecak Dance Performance"],
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
    color: "FFE894",
    image: baliActivity4,
    plans: [
      {
        title: "Visit",
        data: ["Explore Nusa Penida Island"],
      },
    ],
  },
  {
    day: 4,
    title: "Relaxation and Leisure",
    color: "83D3FC",
    image: baliActivity5,
    plans: [
      {
        title: "Activities",
        data: ["Spa session", "Local shopping"],
      },
      {
        title: "Visit",
        data: ["Finns Beach Club"],
      },
    ],
  },
  {
    day: 5,
    title: "Scenic Adventure and Cultural Sites",
    color: "C7E788",
    image: baliActivity6,
    plans: [
      {
        title: "Activities",
        data: ["Choose between river rafting or an ATV ride"],
      },
      {
        title: "Visit",
        data: ["Ulun Danu Beratan Temple", "Campuhan Ridge Walk"],
      },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    color: "F2A7B3",
    image: baliActivity7,
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
