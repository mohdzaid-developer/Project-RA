//Assets
import levelOneFamilyImage from "@/assets/levelOneFamilyImage.jpg";
import familyStandard from "@/assets/familyStandard.jpg";
import familyDelux from "@/assets/familyDelux.jpg";
import familyPremium from "@/assets/familyPremium.jpg";

export const data = {
  title: "Family Package",
  heroImg: levelOneFamilyImage,
  content: [
    `Phuket, the enchanting island of Indonesia, beckons travelers with`,
    ` its mesmerizing beauty and rich cultural heritage. Known as the`,
    `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
    `it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-27.8%"],
  xRange2: ["0%", "-25.5%"],
  xRange3: ["0%", "-24%"],
  xRange4: ["0%", "-21%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Family",
  plans: [
    {
      title: "Phuket family fiesta",
      data: [
        `From the moment you step off the plane in Phuket, it’s all about “Swag Se Swagat” But instead
of a red carpet, there’s a pristine beach waiting to welcome your family. The kids will go nuts
over the turquoise waters, while you channel your inner Rajinikanth with some slow-motion
walks by the shore.`,
        `Don’t forget to capture those candid moments for Instagram (or should we say InstaReel?)because what’s a family vacation without a little filmy drama?`,
        `Don’t miss out on making memories that’ll have your family quoting movie lines for years to
come. Book your Phuket family package from Hyderabad today. Whether you’re into the drama,
the action, or the comedy, this trip has it all—minus the commercial breaks.`,
      ],
      url: "/phuket/family/standard",
      image: familyStandard,
    },
    {
      title: "Phuket family Bliss",
      data: [
        `How about an action-packed day? We’re talking elephant rides, zip-lining, and more! It’s like a
Baahubali battle scene but with more fun and less CGI. And if you’re feeling brave, why not try
some water sports? Don’t worry; we promise you won’t have to fight a bull like Rana in Kick.`,
        `As your Phuket adventure comes to an end, cue the slow-motion airport farewell scene. But
instead of shedding tears like in Kabhi Alvida Naa Kehna, your family is already planning the
next trip back.`,
        `Don’t Miss the Blockbuster: Book your family’s Phuket adventure today and make every
moment a scene-stealer.`,
      ],
      url: "/phuket/family/delux",
      image: familyDelux,
    },
    {
      title: "Family Funland Phuket",
      data: [
        "Premium Phuket Family ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/phuket/family/premium",
      image: familyPremium,
    },
  ],
};
