//Assets
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";
import customStandard from "@/assets/customStandard.webp";
import customDelux from "@/assets/customDelux.webp";
import customPremium from "@/assets/customPremium.webp";

export const data = {
  title: "Custom Package",
  heroImg: levelOneCustomImage,
  content: [
    `Bali, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-19.5%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Custom",
  plans: [
    {
      title: "Bali Your Way",
      data: [
        `Thoda adjust kar lenge, Bhaiyya but not with this trip! Get all the must-see spots without breaking the bank. Think of it like the pav bhaji of vacations, simple but super satisfying. Witness the grandeur of Uluwatu Temple perched on cliffs, take a peaceful stroll through Bali’s rice terraces, and unwind at famous beaches like Kuta. For that extra sprinkle of magic, experience the vibrant night markets that’ll have you saying "Wah, kya mast vibe hai!" Ideal for those who believe in exploring the world on a budget while still having full-on fun`,
      ],
      url: "/bali/custom/standard",
      image: customStandard,
    },
    {
      title: "Bali Dreamscape",
      data: [
        "Kuch toh bada soch, bhai! You deserve a little upgrade! This one’s for those who want thoda extra but don’t want to go all out. Picture this: the comfort of Paneer Butter Masala – not too flashy, just perfect. Enjoy semi-luxury accommodations that feel like home away from home, indulge in sunset dinners by the beach, and experience a yacht ka scene with your friends or family. Tour Bali’s temples, waterfall treks, and markets where you can bargain Hyderabadi style for some hidden treasures. For those who love thoda luxury but manageable Na zyada fancy, na simple, just sahi hai",
      ],
      url: "/bali/custom/delux",
      image: customDelux,
    },
    {
      title: "Bali Crafted Journeys",
      data: [
        "Why be basic when you can be boss? Get ready to flex, this package is pure indulgence, like ordering biryani with double masala—you know it’s going to be extra, but it’s worth every bite! For those who want to go all out and feel like a VIP, this one’s for you. Luxuriate in private villa stays where you’ll have your personal chef whipping up gourmet meals, enjoy a private pool party overlooking the jungle, and spend your evenings at exclusive beach clubs. Need a custom-tailored itinerary? We got you covered, every day’s a surprise because you deserve the royal treatment. This is the Lamborghini of travel packages. If you’ve got a taste for the finer things in life, why not experience them on vacation too?",
      ],
      url: "/bali/custom/premium",
      image: customPremium,
    },
  ],
};
