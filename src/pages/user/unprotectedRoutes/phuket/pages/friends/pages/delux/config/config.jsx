//Assets
import friendsDelux from "@/assets/friendsDelux.jpg";
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
  title: "Phuket BFF Escape",
  heroImg: friendsDelux,
  content: [
    `Phuket is a vibrant blend of sun-soaked beaches and lively`,
    `culture. Enjoy mouthwatering street food, exciting water sports,`,
    `and breathtaking sunsets. Embrace the island’s laid-back`,
    `vibe and create lasting memories in this tropical haven.`,
  ],
  xRange1: ["0%", "-24.7%"],
  xRange2: ["0%", "-22.5%"],
  xRange3: ["0%", "-20.5%"],
  xRange4: ["0%", "-17%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [
    phuketSlider1,
    phuketSlider2,
    phuketSlider3,
    phuketSlider4,
    phuketSlider5,
    phuketSlider6,
  ],
  price: "75,000",
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
        title: "Activities",
        data: [
          "(Only possible if arrived before mid-day)",
          "Elephant Riding",
          "ATV",
          "If we miss, we can do it on the rest day",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Island Hoppers",
    image: phuketActivity2,
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: ["Phi Phi Island or James Bond Island"],
      },
    ],
  },
  {
    day: 2,
    title: "Culture Quest",
    image: phuketActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Visit",
        data: ["Chalong Temple", "Big Buddha", "Phuket Town", "Premium Spa"],
      },
      {
        title: "Activities",
        data: ["Zipline", "Tiger Park"],
      },
    ],
  },
  {
    day: 3,
    title: "Recharge & Relax",
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
    title: "Nature & Nibbles",
    image: phuketActivity5,
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Horse riding on the beach"],
      },
      {
        title: "Visit",
        data: ["Commune Cafe", "Kayaking at Yanui Beach", "Sunset View Point"],
      },
    ],
  },
  {
    day: 5,
    title: "Night Market Mania",
    image: phuketActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: [
          "Cashew Nut Factory",
          "Big Bee Farm and Souvenir Shop",
          "Monkey Hill",
          "Phuket Night Market (only on Saturday)",
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
