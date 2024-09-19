//Assets
import couplePremium from "@/assets/couplePremium.webp";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Sunsets & Sweethearts in Phuket",
  heroImg: couplePremium,
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
    image: "",
    color: "",
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
    image: "",
    color: "",
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
    title: "Explore Phuket",
    image: "",
    color: "",
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
    image: "",
    color: "",
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
    image: "",
    color: "",
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
