//Assets
import familyStandard from "@/assets/familyStandard.jpg";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Phuket family fiesta",
  heroImg: familyStandard,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-22.3%"],
  xRange2: ["0%", "-22%"],
  xRange3: ["0%", "-20%"],
  xRange4: ["0%", "-16.5%"],
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
          "Aquaria Phuket",
          "Tiger Park",
          "If we miss, we can do it on the rest day",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Dolphin Day Out",
    image: "",
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: ["Dolphin Show", "Crocodile Farm"],
      },
    ],
  },
  {
    day: 2,
    title: "Island Explorers",
    image: "",
    color: "EB7E67",
    plans: [
      {
        title: "Visit",
        data: ["Phi Phi Island (Standard) or James Bond Island"],
      },
    ],
  },
  {
    day: 3,
    title: "Rest Day",
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
    title: "Cultural Exploration",
    image: "",
    color: "83D3FC",
    plans: [
      {
        title: "Visit",
        data: ["Bird Farm", "Big Buddha", "Phuket Town"],
      },
    ],
  },
  {
    day: 5,
    title: "Family Fun Day",
    image: "",
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: [
          "Souvenir Shop",
          "Monkey Hill",
          "Sunset View Point",
          "Night Market Patong",
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
