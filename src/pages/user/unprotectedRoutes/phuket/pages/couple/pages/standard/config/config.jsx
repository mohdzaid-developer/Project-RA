//Assets
import coupleStandard from "@/assets/coupleStandard.webp";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Phuket Romantic Retreat",
  heroImg: coupleStandard,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-22.3%"],
  xRange2: ["0%", "-20%"],
  xRange3: ["0%", "0%"],

  sliderImg: [
    phuketSlider1,
    phuketSlider2,
    phuketSlider3,
    phuketSlider4,
    phuketSlider5,
    phuketSlider6,
  ],
  price: "55,000",
};

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    image: "",
    color: "DDA15E",
    plans: [
      {
        title: "Rest",
        data: ["Relax after your arrival"],
      },
      {
        title: "Visit",
        data: [
          "(Only possible if arrived before mid-day)",
          "Commune Cafe Kata",
          "Tiger Park",
          "Promthep Cape Sunset View Point",
          "If we miss, we can do it on the rest day",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Zipline Thrills & Chills",
    image: "",
    color: "F5CFDE",
    plans: [
      {
        title: "Activities",
        data: ["Zipline", "Tiger Park"],
      },
      {
        title: "Visit",
        data: ["Big Buddha", "Three Monkey Cafe (food not included)"],
      },
    ],
  },
  {
    day: 2,
    title: "Island Romance",
    image: "",
    color: "EB7E67",
    plans: [
      {
        title: "Visit",
        data: ["Phi Phi Island or James Bond Island"],
      },
    ],
  },
  {
    day: 3,
    title: "Couples Retreat",
    image: "",
    color: "FFE894",
    plans: [
      {
        title: "Rest",
        data: ["Rest day"],
      },
    ],
  },
  {
    day: 4,
    title: "Wild Encounters",
    image: "",
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Elephant Riding", "Horse Riding"],
      },
      {
        title: "Visit",
        data: ["Phuket Town", "Cafe' Phuket View Point"],
      },
    ],
  },
  {
    day: 5,
    title: "Sunsets & Souvenirs",
    image: "",
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: [
          "Cashew Nut Factory & Pearl Factory & Souvenir Shop",
          "Rock Swing Beach & Sunset Point",
        ],
      },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    image: "",
    color: "F2A7B3",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
