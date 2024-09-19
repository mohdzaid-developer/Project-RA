//Assets
import familyPremium from "@/assets/familyPremium.webp";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Family Funland Phuket",
  heroImg: familyPremium,
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
    color: "",
    plans: [
      {
        title: "Rest",
        data: ["Relax after your arrival"],
      },
      {
        title: "Visit",
        data: [
          "(Only possible if arrived before mid-day)",
          "Commune Cafe for sunset",
        ],
      },
      {
        title: "Activities",
        data: [
          "Jet Ski or Banana Boat or Parasailing (any one)",
          "If we miss, we can do it on the rest day",
        ],
      },
    ],
  },
  {
    day: 1,
    title: "Sail to Paradise",
    image: "",
    color: "",
    plans: [
      {
        title: "Visit",
        data: ["Phi Phi Premium By Catamaran or James Bond Island"],
      },
    ],
  },
  {
    day: 2,
    title: "Tiger Trails & Town Tales",
    image: "",
    color: "",
    plans: [
      {
        title: "Activities",
        data: ["Elephant riding"],
      },
      {
        title: "Visit",
        data: ["Tiger Park", "Phuket Old Town"],
      },
    ],
  },
  {
    day: 3,
    title: "Family R&R",
    image: "",
    color: "",
    plans: [
      {
        title: "Rest",
        data: ["Rest day"],
      },
    ],
  },
  {
    day: 4,
    title: "Thrill Seekers Unite",
    image: "",
    color: "",
    plans: [
      {
        title: "Activities",
        data: ["Shooting gun 10 shots - pistol", "Yona Beach Club Pool Bed"],
      },
    ],
  },
  {
    day: 5,
    title: "Temple Treasures",
    image: "",
    color: "",
    plans: [
      {
        title: "Activities",
        data: ["Zip Line", "Horse Riding"],
      },
      {
        title: "Visit",
        data: ["Chalong Temple", "Big Buddha"],
      },
    ],
  },
  {
    day: 6,
    title: "Carnival Magic Day",
    image: "",
    color: "",
    plans: [
      {
        title: "Visit",
        data: ["Monkey Show", "Carnival Magic"],
      },
    ],
  },
  {
    day: 7,
    title: "Choose Your Own Adventure",
    image: "",
    color: "",
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
    color: "",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
