//Assets
import familyPremium from "@/assets/familyPremium.jpg";

//Assets
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";
import baliActivity1 from "@/assets/baliActivity1.jpeg";
import baliActivity2 from "@/assets/baliActivity2.jpeg";
import baliActivity3 from "@/assets/baliActivity3.jpeg";
import baliActivity4 from "@/assets/baliActivity4.jpeg";
import baliActivity5 from "@/assets/baliActivity5.jpeg";
import baliActivity6 from "@/assets/baliActivity6.jpeg";
import baliActivity7 from "@/assets/baliActivity7.jpeg";
import baliActivity8 from "@/assets/baliActivity8.jpeg";
import baliActivity9 from "@/assets/baliActivity9.jpeg";

export const data = {
  title: "Paradise Bali",
  heroImg: familyPremium,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-29.9%"],
  xRange2: ["0%", "-27.8%"],
  xRange3: ["0%", "-26.2%"],
  xRange4: ["0%", "-23.5%"],
  xRangeLast: ["0%", "0%"],

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
    image: baliActivity1,
    color: "DDA15E",
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
    image: baliActivity2,
    color: "F5CFDE",
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
    image: baliActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Activities",
        data: [
          "Choose an activity of your choice (e.g., ATV ride or river rafting)",
        ],
      },
      {
        title: "Visit",
        data: [
          "Ulun Danu Beratan Temple",
          "Bali Handara Gate",
          "Sunset at Tanah Lot Temple",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "Island Adventure",
    image: baliActivity4,
    color: "FFE894",
    plans: [
      {
        title: "Visit",
        data: ["Explore Nusa Penida Island"],
      },
    ],
  },
  {
    day: 4,
    title: "Rest Day: Relaxation and Exploration",
    image: baliActivity5,
    color: "83D3FC",
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
    image: baliActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: [
          "Watch Barong Dance",
          "Visit an Art Village",
          "Tegenungan Waterfall",
          "Explore Rice Terraces",
          "Tirta Empul Temple",
        ],
      },
    ],
  },
  {
    day: 6,
    title: "Temples",
    image: baliActivity7,
    color: "F2A7B3",
    plans: [
      {
        title: "Visit",
        data: ["Lempuyang Temple (Gate of Heaven)", "Besakih Temple"],
      },
    ],
  },
  {
    day: 7,
    title: "Indo Animals",
    image: baliActivity8,
    color: "8EC8C5",
    plans: [
      {
        title: "Activities",
        data: ["Bali Zoo"],
      },
    ],
  },
  {
    day: 8,
    title: "Departure Day",
    image: baliActivity9,
    color: "D4A5A5",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
