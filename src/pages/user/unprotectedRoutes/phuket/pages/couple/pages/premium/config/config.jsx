//Assets
import couplePremium from "@/assets/couplePremium.jpg";
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
import phuketActivity8 from "@/assets/phuketActivity8.jpg";

export const data = {
  title: "Sunsets & Sweethearts in Phuket",
  heroImg: couplePremium,
  content: [
    `Phuket promises endless adventure and relaxation. With pristine`,
    `beaches, exhilarating water activities, and lush landscapes,`,
    `it's the perfect destination for thrill-seekers and serenity lovers alike.`,
    `Dive into a world of unforgettable experiences on this beautiful island!`,
  ],
  xRange1: ["0%", "-11.7%"],
  xRange2: ["0%", "-9%"],
  xRange3: ["0%", "-6%"],
  xRange4: ["0%", "0%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [
    phuketSlider1,
    phuketSlider2,
    phuketSlider3,
    phuketSlider4,
    phuketSlider5,
    phuketSlider6,
  ],
  price: "1,00,000",
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
          "Cafe Phuket View Point",
        ],
      },
      {
        title: "Activities",
        data: [
          "Horse Riding on the Beach",
          "Jet Ski or Banana Boat or Parasailing (any one)",
          "If we miss, we can do it on the rest day",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Private Island Romance",
    image: phuketActivity2,
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: [
          "Phi Phi Island Premium By Catamaran Boat",
          "James Bond Island by Private Boat",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Nature's Love Affair",
    image: phuketActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Activities",
        data: ["Elephant Riding", "River Rafting"],
      },
      {
        title: "Visit",
        data: ["Andamanda"],
      },
    ],
  },
  {
    day: 3,
    title: "Spa & Serenity",
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
    title: "Explore Phuket",
    image: phuketActivity5,
    color: "83D3FC",
    plans: [
      {
        title: "Visit",
        data: [
          "Three Monkey Restaurant (food not included)",
          "Rang Hill & Phuket Town Tour",
        ],
      },
    ],
  },
  {
    day: 5,
    title: "Firearms & Flames (Sunset)",
    image: phuketActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Activities",
        data: ["Shooting Gun 10 Shots - Pistol", "Yona Beach Club Pool Bed"],
      },
    ],
  },
  {
    day: 6,
    title: "Swing into Sunset",
    image: phuketActivity7,
    color: "F2A7B3",
    plans: [
      {
        title: "Visit",
        data: [
          "Commune Cafe (food not included)",
          "Rock Swing Beach",
          "Sunset View Point",
        ],
      },
    ],
  },
  {
    day: 7,
    title: "Free Spirits Day",
    image: phuketActivity8,
    color: "8EC8C5",
    plans: [
      {
        title: "Custom",
        data: ["You can choose anything that you want to do in Phuket"],
      },
    ],
  },
  {
    day: 8,
    title: "Departure Day",
    image: phuketActivity3,
    color: "D4A5A5",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
