//Assets
import levelOneCoupleImage from "@/assets/levelOneCoupleImage.webp";
import coupleStandard from "@/assets/coupleStandard.webp";
import coupleDelux from "@/assets/coupleDelux.webp";
import couplePremium from "@/assets/couplePremium.webp";

export const data = {
  title: "Couple Package",
  heroImg: levelOneCoupleImage,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-28%"],
  xRange2: ["0%", "-26%"],
  planTitle: "Couple",
  plans: [
    {
      title: "Standard",
      data: [
        "Standard Bali Couple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/bali/couple/standard",
      image: coupleStandard,
    },
    {
      title: "Delux",
      data: [
        "Delux Bali Couple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/bali/couple/delux",
      image: coupleDelux,
    },
    {
      title: "Premium",
      data: [
        "Premium Bali Couple ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/bali/couple/premium",
      image: couplePremium,
    },
  ],
};
