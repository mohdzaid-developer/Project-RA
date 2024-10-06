//Assets
import familyDelux from "@/assets/familyDelux.webp";

//Assets
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";

export const data = {
  title: "Life's better in bali",
  heroImg: familyDelux,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-24.3%"],
  xRange2: ["0%", "-23%"],
  xRange3: ["0%", "-21%"],
  xRange4: ["0%", "-17.5%"],
  xRangeLast: ["0%", "0%"],

  sliderImg: [
    baliSlider1,
    baliSlider2,
    baliSlider3,
    baliSlider4,
    baliSlider5,
    baliSlider6,
  ],
  price: "75,000",
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
        data: ["A nearby place or relax at the beach"],
      },
      {
        title: "Dinner",
        data: ["Dinner at a beachside restaurant"],
      },
    ],
  },
  {
    day: 1,
    title: "Temples and Nature",
    image: "",
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: [
          "Tanah Lot Temple",
          "Tegenungan Waterfall",
          "Ubud Monkey Forest",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "Cultural Exploration",
    image: "",
    color: "EB7E67",
    plans: [
      {
        title: "Visit",
        data: [
          "Garuda Wisnu Kencana (GWK) Cultural Park",
          "Uluwatu Temple",
          "Watch the Kecak Dance",
        ],
      },
      {
        title: "Dinner",
        data: ["Enjoy seafood at Jimbaran Beach"],
      },
    ],
  },
  {
    day: 3,
    title: "Adventure and Relaxation",
    image: "",
    color: "FFE894",
    plans: [
      {
        title: "Activities",
        data: ["Choose between an ATV Ride or River Rafting"],
      },
      {
        title: "Visit",
        data: ["Ulun Danu Beratan Temple (Lake Beratan)"],
      },
    ],
  },
  {
    day: 4,
    title: "Rest Day",
    image: "",
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Relax and take it easy", "Local shopping at nearby markets"],
      },
      {
        title: "Rest",
        data: ["Spa experience for relaxation"],
      },
    ],
  },
  {
    day: 5,
    title: "Island Adventure",
    image: "",
    color: "C7E788",
    plans: [
      {
        title: "Activities",
        data: ["Explore Nusa Penida Island"],
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
