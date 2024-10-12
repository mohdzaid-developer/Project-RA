//Assets
import familyDelux from "@/assets/familyDelux.jpg";
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
  title: "Phuket family Bliss",
  heroImg: familyDelux,
  content: [
    `Phuket is a vibrant blend of sun-soaked beaches and lively`,
    `culture. Enjoy mouthwatering street food, exciting water sports,`,
    `and breathtaking sunsets. Embrace the island’s laid-back`,
    `vibe and create lasting memories in this tropical haven.`,
  ],
  xRange1: ["0%", "-25%"],
  xRange2: ["0%", "-22.5%"],
  xRange3: ["0%", "-20.8%"],
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
        title: "Visit",
        data: [
          "(Only possible if arrived before mid-day)",
          "Aquaria Phuket (Adult)",
          "AR Trickeye Museum (Child)",
          "If we miss, we can do it on the rest day",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Dolphin Delights",
    image: phuketActivity2,
    color: "F5CFDE",
    plans: [
      {
        title: "Activities",
        data: ["Elephant riding"],
      },
      {
        title: "Visit",
        data: [
          "Crocodile Farm",
          "Dolphins Bay Phuket - Deluxe Row",
          "Three Monkey Cafe",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Sacred Journeys",
    image: phuketActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Visit",
        data: ["Phi Phi Island Day Tour or James Bond Island"],
      },
    ],
  },
  {
    day: 3,
    title: "Day of Rest",
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
    title: "Beachside Bliss",
    image: phuketActivity5,
    color: "83D3FC",
    plans: [
      {
        title: "Visit",
        data: ["Tiger Park", "Monkey Show", "Carnival Magic"],
      },
    ],
  },
  {
    day: 5,
    title: "Market Marvels",
    image: phuketActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: [
          "Cashew Nut Factory",
          "Big Bee Farm and Souvenir Shop",
          "Monkey Hill",
          "Phuket Night Market (Saturday)",
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
