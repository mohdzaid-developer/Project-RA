//Assets
import friendsPremium from "@/assets/friendsPremium.webp";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Squad goals: Phuket edition",
  heroImg: friendsPremium,
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
  price: "1,00,000",
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
    image: "",
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
    title: "Wildlife & Wonders",
    image: "",
    color: "EB7E67",
    plans: [
      {
        title: "Activities",
        data: ["Elephant riding", "ATV, River Rafting"],
      },
      {
        title: "Visit",
        data: ["Sunset View Point"],
      },
    ],
  },
  {
    day: 3,
    title: "Rest & Recharge",
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
    title: "Beach Bash",
    image: "",
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Shooting gun 10 shot - pistol", "Yona Beach Club Pool Bed"],
      },
    ],
  },
  {
    day: 5,
    title: "Killer Day Out",
    image: "",
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: ["Dolphin Show", "Crocodile Farm"],
      },
    ],
  },
  {
    day: 6,
    title: "Phuket Nights",
    image: "",
    color: "F2A7B3",
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
    day: 7,
    title: "Choose Your Phuket",
    image: "",
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
    image: "",
    color: "D4A5A5",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
