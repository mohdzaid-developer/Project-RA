//Assets
import familyPremium from "@/assets/familyPremium.webp";

//Assets
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";

export const data = {
  title: "Paradise Bali",
  heroImg: familyPremium,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-22.3%"],
  xRange2: ["0%", "-20%"],
  sliderImg: [
    baliSlider1,
    baliSlider2,
    baliSlider3,
    baliSlider4,
    baliSlider5,
    baliSlider6,
  ],
  price: "1,00,000",
};

export const activities = [
  {
    day: 0,
    title: "Arrival Day",
    plans: [
      {
        title: "Rest",
        data: ["Relax after your arrival"],
      },
      {
        title: "Visit",
        data: ["Nearby places"],
      },
      {
        title: "Dinner",
        data: ["At a beachfront restaurant"],
      },
    ],
  },
  {
    day: 1,
    title: "Temples and Culture",
    plans: [
      {
        title: "Visit",
        data: [
          "Garuda Wisnu Kencana (GWK) Cultural Park",
          "Pandawa Beach",
          "Uluwatu Temple",
          "Kecak Dance Performance",
        ],
      },
      {
        title: "Dinner",
        data: ["Seafood dinner at Jimbaran Beach"],
      },
    ],
  },
  {
    day: 2,
    title: "Adventure and Scenic Views",
    plans: [
      {
        title: "Visit",
        data: [
          "Visit Ulun Danu Beratan Temple",
          "Explore Bali Handara Gate",
          "Sunset at Tanah Lot Temple",
        ],
      },
      {
        title: "Activities",
        data: ["Choose an activity of your choice (e.g., ATV ride or surfing)"],
      },
    ],
  },
  {
    day: 3,
    title: "Island Adventure",
    plans: [
      {
        title: "Visit",
        data: ["Explore Nusa Penida Island"],
      },
    ],
  },
  {
    day: 4,
    title: "Relaxation and Exploration",
    plans: [
      {
        title: "Activities",
        data: ["Rest Day", "Spa session", "Local shopping"],
      },
    ],
  },
  {
    day: 5,
    title: "Culture and Nature",
    plans: [
      {
        title: "Visit",
        data: [
          "Watch Barong Dance",
          "Visit an Art Village",
          "Tegenungan Waterfall",
          "Explore Rice Terraces",
          "Visit Tirta Empul Temple",
        ],
      },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    plans: [
      {
        title: "Activities",
        data: ["Alas Harum and Kanto Lampo Waterfall"],
      },
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
