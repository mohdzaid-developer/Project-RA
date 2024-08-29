//Assets
import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";
import friendsStandard from "@/assets/friendsStandard.webp";
import friendsDelux from "@/assets/friendsDelux.webp";
import friendsPremium from "@/assets/friendsPremium.webp";

export const data = {
  title: "Friends Package",
  heroImg: levelOneFriendsImage,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-28%"],
  xRange2: ["0%", "-26%"],
  planTitle: "Friends",
  plans: [
    {
      title: "Standard",
      data: [
        "Standard Phuket friends ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/friends/standard",
      image: friendsStandard,
    },
    {
      title: "Delux",
      data: [
        "Delux Phuket friends ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/friends/delux",
      image: friendsDelux,
    },
    {
      title: "Premium",
      data: [
        "Premium Phuket Family ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/friends/premium",
      image: friendsPremium,
    },
  ],
};
