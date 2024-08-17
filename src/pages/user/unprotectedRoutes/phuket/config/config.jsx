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
        "Get ready to crank up the fun with your best mates in Phuket! This island is all about living it up—from adrenaline-pumping water sports and epic island-hopping adventures to vibrant nights out in Patong that you’ll be talking about for years. Imagine sailing the turquoise waters of Phang Nga Bay, exploring the hidden coves of Phi Phi, and then hitting the night markets where the energy is infectious. Phuket is your ultimate playground, where every day is an adventure, and every night is a story in the making.",
      logo: levelOneFriendsLogo,
      url: "/phuket/friends",
      leftImg: levelOneFriendsImage,
    },
    {
      packageName: "Family",
      description:
        "Pack your bags and bring the whole family—Phuket is where unforgettable memories are made. Whether it’s exploring the colorful marine life at the Phuket Aquarium, taking a traditional Thai cooking class together, or just relaxing on the sun-kissed beaches of Kata, there’s something here for everyone. Watch as your kids’ eyes light up at the sight of elephants at a local sanctuary, and feel the bonds of family grow stronger with every new adventure. Phuket isn’t just a destination—it’s the backdrop for your family’s greatest story.",
      logo: levelOneFamilyLogo,
      url: "/phuket/family",
      leftImg: levelOneFamilyImage,
    },
    {
      packageName: "Couples",
      description:
        "Escape to Phuket, where romance and luxury blend seamlessly. Picture yourselves on a private yacht, cruising along the Andaman Sea at sunset, or walking hand in hand through the historic streets of Old Phuket Town. Enjoy candlelit dinners on the beach, couples’ massages in world-class spas, and discover secret spots where it’s just the two of you. Phuket is more than just a destination—it’s the perfect setting for your love story, filled with moments that linger long after the trip is over.",
      logo: levelOneCoupleLogo,
      url: "/phuket/couple",
      leftImg: levelOneCoupleImage,
    },
    {
      packageName: "Custom",
      description:
        "Phuket is an island of endless possibilities, and your adventure should be as unique as you are. Whether you’re dreaming of a high-octane adventure packed with water sports and jungle treks, a cultural immersion into Thai traditions, or a serene retreat in a luxury villa, we’ll tailor every detail to your desires. Let’s craft a journey that reflects your passions, where every experience is a new discovery, and every day is a masterpiece.",
      logo: levelOneCustomLogo,
      url: "/phuket/custom",
      leftImg: levelOneCustomImage,
    },
  ],
};
