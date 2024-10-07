//Assets
import coupleStandard from "@/assets/coupleStandard.jpg";
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
  title: "Romantic getaway",
  heroImg: coupleStandard,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-25.2%"],
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
        data: ["Visit nearby beaches or local places", "Shopping"],
      },
    ],
  },
  {
    day: 1,
    title: "Cultural and Scenic Exploration",
    image: baliActivity2,
    color: "F5CFDE",
    plans: [
      {
        title: "Visit",
        data: [
          "Garuda Wisnu Kencana (GWK) Cultural Park",
          "Uluwatu Temple",
          "(Optional) Watch the Kecak Dance",
          "Karang Boma Cliff",
          "Padang Padang Beach",
        ],
      },
      {
        title: "Dinner",
        data: ["Enjoy seafood at Jimbaran Beach"],
      },
    ],
  },
  {
    day: 2,
    title: "Temples and Nature",
    image: baliActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Activities",
        data: [
          "Choose between an ATV Ride or River Rafting",
          "Enjoy the famous Bali Swing",
        ],
      },
      {
        title: "Visit",
        data: ["Ubud Monkey Forest"],
      },
    ],
  },
  {
    day: 3,
    title: "Adventure and Scenic Views",
    image: baliActivity4,
    color: "FFE894",
    plans: [
      {
        title: "Visit",
        data: [
          "Tanah Lot Temple",
          "Tegenungan Waterfall",
          "Ulun Danu Beratan Temple (Lake Beratan)",
        ],
      },
    ],
  },
  {
    day: 4,
    title: "Rest Day",
    image: baliActivity5,
    color: "83D3FC",
    plans: [
      {
        title: "Rest",
        data: ["Relax the entire day"],
      },
    ],
  },
  {
    day: 5,
    title: "Villages and Walks",
    image: baliActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: [
          "Penglipuran Village",
          "Alas Harum Bali (for swing, coffee plantation, and more)",
          "Campuhan Ridge Walk",
        ],
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
        data: ["Prepare for your flight home"],
      },
    ],
  },
];
