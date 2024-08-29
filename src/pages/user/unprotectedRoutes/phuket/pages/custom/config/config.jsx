//Assets
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";
import familyStandard from "@/assets/familyStandard.webp";
import familyDelux from "@/assets/familyDelux.webp";
import familyPremium from "@/assets/familyPremium.webp";

export const data = {
  title: "Custom Package",
  heroImg: levelOneCustomImage,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-28%"],
  xRange2: ["0%", "-26%"],
  planTitle: "Custom",
  plans: [
    {
      title: "Standard",
      data: [
        "Standard phuket custom ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/custom/standard",
      image: familyStandard,
    },
    {
      title: "Delux",
      data: [
        "Delux phuket custom ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/custom/delux",
      image: familyDelux,
    },
    {
      title: "Premium",
      data: [
        "Premium phuket custom ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/custom/premium",
      image: familyPremium,
    },
  ],
};
