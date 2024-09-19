//Assets
import friendsStandard from "@/assets/friendsStandard.webp";
import phuketSlider1 from "@/assets/phuketSlider1.jpg";
import phuketSlider2 from "@/assets/phuketSlider2.jpg";
import phuketSlider3 from "@/assets/phuketSlider3.jpg";
import phuketSlider4 from "@/assets/phuketSlider4.jpg";
import phuketSlider5 from "@/assets/phuketSlider5.jpg";
import phuketSlider6 from "@/assets/phuketSlider6.jpg";

export const data = {
  title: "Phuket Party patrol",
  heroImg: friendsStandard,
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
  price: "55,000",
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
      title: "Islands Unleashed",
      plans: [
        {
          title: "Visit",
          data: ["Phi Phi Island day tour or James Bond Island"],
        },
      ],
    },
    {
      day: 2,
      title: "Temples & Traditions",
      plans: [
        {
          title: "Activities",
          data: ["Elephant riding"],
        },
        {
          title: "Visit",
          data: ["Chalong Temple", "Big Buddha"],
        },
      ],
    },
    {
      day: 3,
      title: "Rest & Reset",
      plans: [
        {
          title: "Rest",
          data: ["Rest day"],
        },
      ],
    },
    {
      day: 4,
      title: "Thrills on Wheels",
      plans: [
        {
          title: "Activities",
          data: ["ATV Ride"],
        },
        {
          title: "Visit",
          data: ["Rang Hill View Point", "Phuket Town"],
        },
      ],
    },
    {
      day: 5,
      title: "Sunset Seekers",
      plans: [
        {
          title: "Visit",
          data: [
            "Cashew Nut Factory & Souvenir Shop",
            "Yanui Beach & Promthep Cape Sunset View Point",
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
