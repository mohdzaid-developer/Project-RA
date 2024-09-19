//Assets
import couplePremium from "@/assets/couplePremium.webp";

//Assets
import baliSlider1 from "@/assets/baliSlider1.jpg";
import baliSlider2 from "@/assets/baliSlider2.jpg";
import baliSlider3 from "@/assets/baliSlider3.jpg";
import baliSlider4 from "@/assets/baliSlider4.jpg";
import baliSlider5 from "@/assets/baliSlider5.jpg";
import baliSlider6 from "@/assets/baliSlider6.jpg";

export const data = {
  title: "Valentines Week",
  heroImg: couplePremium,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-22.3%"],
  xRange2: ["0%", "-20%"],
  xRange3: ["0%", "0%"],

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

export const activities = {
  image: "",
  itinerary: [
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
          data: ["Explore local places", "Dinner at Savaya Beach Club"],
        },
      ],
    },
    {
      day: 1,
      title: "Temples and Scenic Views",
      plans: [
        {
          title: "Visit",
          data: [
            "Taman Ayun Temple",
            "ATV or river rafting",
            "Ulun Danu Beratan Temple",
            "Handara gate",
          ],
        },
      ],
    },
    {
      day: 2,
      title: "Water Sports and Culture",
      plans: [
        {
          title: "Activities",
          data: ["Water sports (e.g., jet skiing, parasailing)"],
        },
        {
          title: "Visit",
          data: ["Garuda Wisnu Kencana (GWK)", "Uluwatu Temple", "Kecak dance"],
        },
        {
          title: "Dinner",
          data: ["Seafood dinner at Jimbaran Beach"],
        },
      ],
    },
    {
      day: 3,
      title: "Island Adventure",
      plans: [
        {
          title: "Visit",
          data: ["Day Trip to Nusa Penida"],
        },
      ],
    },
    {
      day: 4,
      title: "Relaxation and Leisure",
      plans: [
        {
          title: "Activities",
          data: ["Rest Day", "Spa session", "Local shopping"],
        },
        {
          title: "Visit",
          data: ["Finns Beach Club"],
        },
      ],
    },
    {
      day: 5,
      title: "Gili Trawangan Day 1",
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
      title: "Cultural Exploration",
      plans: [
        {
          title: "Visit",
          data: [
            "Gembleng Waterfall",
            "Explore Sawa Gung (rice terraces)",
            "Ring making experience",
            "Bukit Tegenungan",
          ],
        },
      ],
    },
    {
      day: 8,
      title: "Departure Day",
      plans: [
        {
          title: "Departure",
          data: ["Prepare for your flight home"],
        },
      ],
    },
  ],
};
