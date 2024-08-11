//Assets
import heroImg from "@/assets/phuketHero.webp";
import img1 from "@/assets/phuket1.webp";
import img2 from "@/assets/phuket2.webp";
import img3 from "@/assets/homePhuket.webp";
import img4 from "@/assets/phuket3.webp";
import img5 from "@/assets/phuket4.webp";
import levelOnePackageLogo from "@/assets/levelOnePackageLogo.webp";
import levelOneFriendsLogo from "@/assets/levelOneFriendsLogo.webp";
import levelOneFamilyLogo from "@/assets/levelOneFamilyLogo.webp";
import levelOneCoupleLogo from "@/assets/levelOneCoupleLogo.webp";
import levelOneCustomLogo from "@/assets/levelOneCustomLogo.webp";
import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";
import levelOneFamilyImage from "@/assets/levelOneFamilyImage.webp";
import levelOneCoupleImage from "@/assets/levelOneCoupleImage.webp";
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";

export const data = {
  title: "Enchanted Phuket",
  heroImg: heroImg,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-25.5%"],
  xRange2: ["0%", "-23%"],
  galleryImg: [img1, img2, img3, img4, img5],
  packageData: [
    {
      test: (
        <div className="title">
          <h2>Packages</h2>
          <img src={levelOnePackageLogo} alt="" />
        </div>
      ),
      packageName: "Friends",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      logo: levelOneFriendsLogo,
      url: "/phuket/friends",
      leftImg: levelOneFriendsImage,
    },
    {
      packageName: "Family",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      logo: levelOneFamilyLogo,
      url: "/phuket/family",
      leftImg: levelOneFamilyImage,
    },
    {
      packageName: "Couples",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      logo: levelOneCoupleLogo,
      url: "/phuket/couple",
      leftImg: levelOneCoupleImage,
    },
    {
      packageName: "Custom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      logo: levelOneCustomLogo,
      url: "/phuket/custom",
      leftImg: levelOneCustomImage,
    },
  ],
};
