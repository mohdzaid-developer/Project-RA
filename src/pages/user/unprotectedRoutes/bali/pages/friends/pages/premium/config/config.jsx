//Assets
import friendsPremium from "@/assets/friendsPremium.jpg";
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
  title: "Zindhagi Na Melige Dubara",
  heroImg: friendsPremium,
  content: [
    `Immerse yourself in Bali’s vibrant culture, from traditional`,
    `ceremonies to exquisite art. Wander through lively markets, savour local`,
    `delicacies, and embrace the island’s spiritual energy. Bali invites`,
    `you to experience its unique charm and captivating beauty!`,
  ],
  xRange1: ["0%", "-17.2%"],
  xRange2: ["0%", "-15%"],
  xRange3: ["0%", "-12.5%"],
  xRange4: ["0%", "-8%"],
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
        data: ["Local beaches", "Vue Beach Club"],
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
        title: "Activities",
        data: ["Water sports (e.g., jet skiing or parasailing)"],
      },
      {
        title: "Visit",
        data: ["GWK", "Uluwatu Temple", "Kecak Dance Performance"],
      },
      {
        title: "Dinner",
        data: ["Seafood dinner at Jimbaran Beach (not included in package)"],
      },
    ],
  },
  {
    day: 2,
    title: "Adventure and Nature",
    image: baliActivity3,
    color: "EB7E67",
    plans: [
      {
        title: "Activities",
        data: ["River Rafting and ATV ride"],
      },
      {
        title: "Visit",
        data: ["Tegenungan Waterfall", "Ubud Monkey Forest (if time permits)"],
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
    title: "Relaxation and Leisure",
    image: baliActivity5,
    color: "83D3FC",
    plans: [
      {
        title: "Activities",
        data: ["Local shopping", "Spa session", "Finns Beach Club"],
      },
    ],
  },
  {
    day: 5,
    title: "Gili Trawangan Day 1",
    image: baliActivity6,
    color: "C7E788",
    plans: [
      {
        title: "Visit",
        data: ["Gili Trawangan"],
      },
    ],
  },
  {
    day: 6,
    title: "Gili Trawangan Day 2",
    image: baliActivity7,
    color: "F2A7B3",
    plans: [
      {
        title: "Return",
        data: ["Return to Bali mainland"],
      },
      {
        title: "Visit",
        data: ["Sunset at Tanah Lot Temple (if possible)"],
      },
    ],
  },
  {
    day: 7,
    title: "Volcano and Temple Tour",
    image: baliActivity8,
    color: "8EC8C5",
    plans: [
      {
        title: "Visit",
        data: [
          "Jeep tour to Mount Batur",
          "Besakih Temple",
          "Lempuyang Temple (Heaven’s Gate)",
          "Tirta Gangga",
        ],
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
