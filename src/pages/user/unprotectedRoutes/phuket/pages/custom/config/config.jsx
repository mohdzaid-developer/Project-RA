//Assets
import levelOneCustomImage from "@/assets/levelOneCustomImage.webp";
import customStandard from "@/assets/customStandard.webp";
import customDelux from "@/assets/customDelux.webp";
import customPremium from "@/assets/customPremium.webp";

export const data = {
  title: "Custom Package",
  heroImg: levelOneCustomImage,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
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
      title: "Phuket Your Way",
      data: [
        "Thoda adjust kar lenge, Bhaiyya but not with this trip! Get all the must-see spots without breaking the bank. Think of it like the pav bhaji of vacations, simple but super satisfying. Soak in the energy at Patong Beach, snap your photos at the Big Buddha, and lagao a selfie at Phi Phi Islands. It’s a dream for beach lovers and adventure enthusiasts alike mass masala guaranteed! Ideal for those who believe in exploring the world on a budget while still having full-on fun",
      ],
      url: "/phuket/custom/standard",
      image: customStandard,
    },
    {
      title: "Phuket Dream Trails",
      data: [
        "Kuch toh bada soch, bhai! You deserve a little upgrade! This one’s for those who want thoda extra but don’t want to go all out. Picture this: the comfort of Paneer Butter Masala – not too flashy, just perfect. From private island-hopping tours to rejuvenating at elephant sanctuaries, this package elevates your holiday game. Think beachside barbecues, cultural shows, and luxury spas, but without breaking the bank For those who love thoda luxury but manageable Na zyada fancy, na simple, just sahi hai",
      ],
      url: "/phuket/custom/delux",
      image: customDelux,
    },
    {
      title: "Phuket Curated Escapes",
      data: [
        "Why be basic when you can be boss? Get ready to flex, this package is pure indulgence, like ordering biryani with double masala—you know it’s going to be extra, but it’s worth every bite! For those who want to go all out and feel like a VIP, this one’s for you. From sailing on private yachts to unwinding with spa sessions that make you feel like a raja, Phuket becomes your personal playground. Enjoy VIP entry to nightclubs, sunset dinners on the beach, and even a personal butler to cater to your every need. This is the Lamborghini of travel packages. If you’ve got a taste for the finer things in life, why not experience them on vacation too?",
      ],
      url: "/phuket/custom/premium",
      image: customPremium,
    },
  ],
};
