//Assets
import coupleDelux from "@/assets/coupleDelux.webp";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Love Birds in Phuket",
  heroImg: coupleDelux,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-24.3%"],
  xRange2: ["0%", "-22%"],
  xRange3: ["0%", "0%"],

  sliderImg: [
    phuketSlider1,
    phuketSlider2,
    phuketSlider3,
    phuketSlider4,
    phuketSlider5,
    phuketSlider6,
  ],
  price: "75,000",
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
          data: [
            "(Only possible if arrived before mid-day)",
            "Tiger Park",
            "Cafe Phuket View Point",
            "If we miss, we can do it on the rest day",
          ],
        },
      ],
    },
    {
      day: 1,
      title: "Zip Through Adventure",
      plans: [
        {
          title: "Activities",
          data: ["Zipline"],
        },
        {
          title: "Visit",
          data: ["Chalong Temple", "Big Buddha", "Phuket Town"],
        },
      ],
    },
    {
      day: 2,
      title: "Lovers’ Island Escape",
      plans: [
        {
          title: "Visit",
          data: ["Phi Phi Island Day Tour or James Bond Island Day Catamaran"],
        },
      ],
    },
    {
      day: 3,
      title: "Day of Serenity",
      plans: [
        {
          title: "Rest",
          data: ["Rest day"],
        },
      ],
    },
    {
      day: 4,
      title: "Sunset Lovers’ Cruise",
      plans: [
        {
          title: "Activities",
          data: ["Elephant Riding", "ATV, River Rafting"],
        },
        {
          title: "Visit",
          data: ["Sunset Dinner on Boat"],
        },
      ],
    },
    {
      day: 5,
      title: "Beachside Treasures",
      plans: [
        {
          title: "Visit",
          data: [
            "Cashew Nut Factory",
            "Big Bee Farm and Souvenir Shop",
            "Monkey Hill",
            "Phuket Night Market",
          ],
        },
      ],
    },
    {
      day: 6,
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
