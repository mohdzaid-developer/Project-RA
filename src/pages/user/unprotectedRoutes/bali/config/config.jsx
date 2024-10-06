//Assets
import heroImg from "@/assets/baliHero.webp";
import img1 from "@/assets/bali1.webp";
import img2 from "@/assets/bali2.webp";
import img3 from "@/assets/homeBali.webp";
import img4 from "@/assets/bali3.jpeg";
import img5 from "@/assets/bali4.webp";
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
  title: "Enchanted Bali",
  heroImg: heroImg,
  content: [
    `It’s a paradise of golden beaches, ancient temples, and endless adventures.`,
    `Whether you’re craving peace or thrill, Bali has it all.`,
    `Once you visit, you’ll never want to leave this magical island.`,
  ],
  xRange1: ["0%", "-28%"],
  xRange2: ["0%", "-26%"],
  xRange3: ["0%", "-24.5%"],
  xRange4: ["0%", "-21%"],
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
      description: `Feel the thrill of diving into the unknown, just like Hrithik, Farhan, and Abhay in Zindagi Na
      Milegi Dobara. Our curated experiences ensure that you not only travel but live every moment,
      be it a daring adventure or a serene sunset. Channel your inner Bunny from Yeh Jawani Hai Deewani and chase after that wanderlust. With our ‘Travel Now, Pay Later’ option, you don’t have to wait to explore the world. Go ahead, book
      that trip, and let the adventure begin!`,
      logo: levelOneFriendsLogo,
      url: "/bali/friends",
      leftImg: levelOneFriendsImage,
    },
    {
      packageName: "Family",
      description: `Managing a big family vacation can feel as epic as Baahubali. But unlike Amarendra Baahubali,
      you don’t have to go it alone. Whether it’s coordinating multiple flights, booking large
      accommodations, or planning activities for everyone, we’ve got you covered. Think of us as your
      Katappa, loyal and ready to handle any challenge.
      Remember how Allu Arjun’s character enjoys the good life in Ala Vaikunthapurramuloo? But
      unlike him, you don’t need to be super-rich to give your family a luxurious vacation! With our
      ‘Travel Now, Pay Later’ plan, you can experience premium stays and lavish experiences without
      worrying about the budget. Pamper your family, while we handle the finances`,
      logo: levelOneFamilyLogo,
      url: "/bali/family",
      leftImg: levelOneFamilyImage,
    },
    {
      packageName: "Couples",
      description: `Remember how Jessie and Karthik’s love story in Ye Maaya Chesave was beautifully captured
      in scenic locales? We’ll help you create your own cinematic romance. From strolls on pristine
      beaches to romantic dinners with breathtaking views, your love story deserves a stunning
      backdrop.
      Like the intense love story of Animal, our couple’s vacations are designed for those who live and
      love with passion. Private beach villas, candlelit dinners, and exclusive experiences ensure that
      your trip is as fiery and unforgettable as your love without the interference of Bhabhi 2, just
      kidding.`,
      logo: levelOneCoupleLogo,
      url: "/bali/couple",
      leftImg: levelOneCoupleImage,
    },
    {
      packageName: "Custom",
      description: `Tired of the same old scenes? Time to script your own story. Whether it's a breakfast on a
      beach, moment on a mountaintop, we’ve got the perfect package custom-tailored for your
      dream escape.
      “Kaha chalna hai bhai?” Wherever your heart desires! We’ll handle the details, you just focus on
      living your main character life. Be it a romantic duet, or a full-on gang war, your adventure starts
      here.
      This trip is your script. How will you write your next epic? `,
      logo: levelOneCustomLogo,
      url: "/bali/custom",
      leftImg: levelOneCustomImage,
    },
  ],
};
