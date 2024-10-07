//Assets
import familyStandard from "@/assets/familyStandard.jpg";

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

export const data = {
  title: "Explore bali",
  heroImg: familyStandard,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-31%"],
  xRange2: ["0%", "-29%"],
  xRange3: ["0%", "-27.5%"],
  xRange4: ["0%", "-25%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [
    baliSlider1,
    baliSlider2,
    baliSlider3,
    baliSlider4,
    baliSlider5,
    baliSlider6,
  ],
  price: "55,000",
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
        title: "Activities",
        data: ["Visit nearby places", "Local shopping"],
      },
    ],
  },
  {
    day: 1,
    title: "Cultural and Nature Exploration",
    image: baliActivity2,
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: [
          "Tanah Lot Temple",
          "Ubud Monkey Forest",
          "Elephant Care experience",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Southern Bali Highlights",
    image: baliActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Visit",
        data: [
          "Garuda Wisnu Kencana (GWK) Cultural Park",
          "Uluwatu Temple",
          "Optional: Kecak Dance or visit Bali's southernmost point",
          "Pandawa Beach",
        ],
      },
      {
        title: "Dinner",
        data: [
          "Enjoy seafood at Jimbaran Beach (not included, only suggestion)",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "Rest Day",
    image: baliActivity4,
    color: "FFE894",
    plans: [
      {
        title: "Rest",
        data: ["Relax the entire day."],
      },
    ],
  },
  {
    day: 4,
    title: "Waterfalls and Relaxation",
    image: baliActivity5,
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Optional activity: ATV or River Rafting"],
      },
      {
        title: "Visit",
        data: ["Kanto Lampo Waterfalls", "Tegalalang Rice Terrace"],
      },
    ],
  },
  {
    day: 5,
    title: "Adventure and Fun",
    image: baliActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: ["Tegenungan Waterfall", "Waterbom Bali (water park)"],
      },
    ],
  },
  {
    day: 6,
    title: "Departure Day",
    image: baliActivity7,
    color: "F2A7B3",
    plans: [
      {
        title: "Departure",
        data: ["Prepare for your flight home."],
      },
    ],
  },
];
