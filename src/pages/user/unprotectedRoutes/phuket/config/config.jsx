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
import levelOneFamilyImage from "@/assets/levelOneFamilyImage.jpg";
import levelOneCoupleImage from "@/assets/levelOneCoupleImage.jpg";
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";

export const data = {
  title: "Enchanted Phuket",
  heroImg: heroImg,
  content: [
    `Phuket is a slice of paradise where turquoise waters kiss golden sands, and every sunset paints`,
    `the sky in dreamy hues. Lush greenery, vibrant markets, and hidden coves make this island a`,
    `treasure trove of natural beauty and cultural charm. Whether you're soaking up the sun or`,
    `exploring its wonders, Phuket's allure is simply irresistible.`,
  ],
  xRange1: ["0%", "-25.5%"],
  xRange2: ["0%", "-23%"],
  xRange3: ["0%", "-21.5%"],
  xRange4: ["0%", "-18%"],
  xRangeLast: ["0%", "0%"],

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
      description: `Imagine this: You and your gang chilling like the Bollywood cast, but this time, the backdrop isn’t
Goa, it's Phuket! Jet skis, beach volleyball, and a private yacht, perfect for your Insta reels,
because "Phuket mein jo hota hai, woh Hyderabad mein viral hota hai"
Book Now and make your travel dreams a reality—Hyderabadi style Shero ki tarah yaaro ke
saath Phuket ki yaadon mein kho jao`,
      logo: levelOneFriendsLogo,
      url: "/phuket/friends",
      leftImg: levelOneFriendsImage,
    },
    {
      packageName: "Family",
      description: `For the Entire Kutumbh Who Loves a Good Time "Family ke saath Phuket ka trip? Here’s the
plan: You, your parents, your kiddos—basically, the entire crew on a fun-filled adventure where
the only thing more memorable than the beaches are the laughs you’ll share. It’s like Hum
Saath Saath Hain, but with more sunscreen and less saas-bahu drama`,
      logo: levelOneFamilyLogo,
      url: "/phuket/family",
      leftImg: levelOneFamilyImage,
    },
    {
      packageName: "Couples",
      description: `"For the Lovebirds Who Want Their Own Bollywood Romance "Ab yeh nasha tumko Phuket le
chal!" Picture this: A romantic dinner on the beach, with the soft strumming of a guitar in the
background, just like in Aashiqui 2. Walk hand-in-hand down the shore, and before you know it,
you're living the Celebrity-couple dream."`,
      logo: levelOneCoupleLogo,
      url: "/phuket/couple",
      leftImg: levelOneCoupleImage,
    },
    {
      packageName: "Custom",
      description: `Why settle for the usual when you can have a Phuket experience tailored just for us? Let’s
design our dream escape—whether it’s sunset yacht rides or private beach dinners, we’ll turn
every ‘what if’ into ‘oh yes!’ Our customized plan isn’t just a trip; it’s our very own love story,
scripted and directed by us. Ready to make every moment unforgettable? Let’s start planning
our perfect getaway, one cheeky detail at a time.`,
      logo: levelOneCustomLogo,
      url: "/phuket/custom",
      leftImg: levelOneCustomImage,
    },
  ],
};
