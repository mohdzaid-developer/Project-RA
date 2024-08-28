//Assets
import heroImg from "@/assets/baliHero.webp";
import img1 from "@/assets/bali1.webp";
import img2 from "@/assets/bali2.webp";
import img3 from "@/assets/homeBali.webp";
import img4 from "@/assets/bali3.webp";
import img5 from "@/assets/bali4.webp";
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
  title: "Enchanted Bali",
  heroImg: heroImg,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-28%"],
  xRange2: ["0%", "-26%"],
  xRange3: ["0%", "-25%"],
  xRange4: ["0%", "-23%"],
  xRange5: ["0%", "-21.5%"],
  xRange6: ["0%", "18%"],

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
        "Picture this: The sun’s blazing down, the waves are crashing, and your squad is living their best lives. Bali is your playground, where every corner is an invitation to adventure. Kick off the day with a surf session at Kuta, dive into the local food scene with a feast of Babi Guling, and as the sun dips low, hit Seminyak’s hottest spots where the party never stops. And those secret waterfalls you’ve heard about? They’re waiting for you to discover. Ready to turn your Bali trip into legend? The island is calling, and it’s time to answer.",
      logo: levelOneFriendsLogo,
      url: "/bali/friends",
      leftImg: levelOneFriendsImage,
    },
    {
      packageName: "Family",
      description:
        "Imagine the joy on your kids’ faces as they splash in crystal-clear waters, while you unwind under swaying palm trees. Bali isn’t just a destination—it’s a treasure trove of family adventures waiting to be discovered. Explore Ubud’s mystical Monkey Forest, embark on a thrilling rafting trip down the Ayung River, or simply spend the day building sandcastles at Sanur Beach. Every day in Bali is a new chapter in your family’s epic tale. Let’s make those family memories magical, where every smile is brighter under the Bali sun.",
      logo: levelOneFamilyLogo,
      url: "/bali/family",
      leftImg: levelOneFamilyImage,
    },
    {
      packageName: "Couples",
      description:
        "Escape to Bali, where every sunset is a painting, and every moment is pure magic. Think private dinners under the stars, luxurious villas nestled in lush jungles, and spa days that leave you floating on air. Whether you’re hiking hand in hand to Uluwatu’s clifftop temples or sharing a sunrise on Mount Batur, Bali is the canvas where your love story unfolds. Let’s craft your romantic escape, where every whisper of the wind carries a secret meant just for you.",
      logo: levelOneCoupleLogo,
      url: "/bali/couple",
      leftImg: levelOneCoupleImage,
    },
    {
      packageName: "Custom",
      description:
        "Your Bali, your rules. Whether you’re a thrill-seeker craving the rush of ATV rides through the jungle, a culture enthusiast eager to dive into the local traditions, or simply someone looking to unwind in paradise, we’ll design an itinerary that’s as unique as you are. From off-the-beaten-path temples to secret beaches that feel like your own private paradise, Bali is ready to be discovered—exactly how you want to experience it.",
      logo: levelOneCustomLogo,
      url: "/bali/custom",
      leftImg: levelOneCustomImage,
    },
  ],
};
