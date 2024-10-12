//Assets
import coupleStandard from "@/assets/coupleStandard.jpg";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";
import phuketActivity1 from "@/assets/phuketActivity1.jpg";
import phuketActivity2 from "@/assets/phuketActivity2.jpg";
import phuketActivity3 from "@/assets/phuketActivity3.jpg";
import phuketActivity4 from "@/assets/phuketActivity4.jpg";
import phuketActivity5 from "@/assets/phuketActivity5.jpg";
import phuketActivity6 from "@/assets/phuketActivity6.jpg";
import phuketActivity7 from "@/assets/phuketActivity7.jpg";

export const data = {
  title: "Phuket Romantic Retreat",
  heroImg: coupleStandard,
  content: [
    `Phuket, Thailand’s largest island, is a tropical paradise of stunning`,
    `beaches and vibrant nightlife. Enjoy rich culture, delicious cuisine, `,
    `and thrilling adventures like snorkelling and hiking. Experience`,
    `unforgettable moments and embrace the island’s enchanting beauty!`,
  ],
  xRange1: ["0%", "-19.5%"],
  xRange2: ["0%", "-16.8%"],
  xRange3: ["0%", "-14.8%"],
  xRange4: ["0%", "-10.5%"],
  xRangeLast: ["0%", "0%"],

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
    image: phuketActivity1,
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
    image: phuketActivity2,
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
    image: phuketActivity3,
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
    image: phuketActivity4,
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
    image: phuketActivity5,
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
    image: phuketActivity6,
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
    image: phuketActivity7,
    color: "F2A7B3",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
