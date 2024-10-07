//Assets
import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";
import friendsStandard from "@/assets/friendsStandard.jpg";
import friendsDelux from "@/assets/friendsDelux.jpg";
import friendsPremium from "@/assets/friendsPremium.jpg";

export const data = {
  title: "Friends Package",
  heroImg: levelOneFriendsImage,
  content: [
    `Because you deserve a break! Swap the noise of city traffic for the soothing`,
    `sounds of waves crashing on the shore. Trade your chai breaks for tropical`,
    `smoothies under a palm tree. Phuket isn’t just a destination; it’s the paradise`,
    `you didn’t know you needed. it a top destination for tourists from around the world.`,
  ],
  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Friends",
  plans: [
    {
      title: "Phuket Party patrol",
      data: [
        "This isn’t just another vacation—it’s a chance to recharge, reconnect, and rediscover what it means to relax. From peaceful sunsets to thrilling adventures, Phuket is where your dream vacation becomes reality. Bas ek baar chale jao you’ll want to go back again and again.",
        "With our 'Travel Now, Pay Later' option, your dream trip to Phuket is just a click away. No need to stress about the budget; just focus on packing your bags and getting ready for an unforgettable experience.",
        "Phuket is calling! Whether you’re a beach bum or an adventure junkie, this trip is all about you!",
      ],
      url: "/phuket/friends/standard",
      image: friendsStandard,
    },
    {
      title: "Phuket BFF Escape ",
      data: [
        "Friendship isn’t just about hanging out in cafes or watching movies together. It’s about creating memories that will make you laugh years down the line. Whether it’s deep conversations by the beach, spontaneous road trips around the island, or just goofing around in the markets, Phuket is where your bond gets stronger.",
        "Whether you're celebrating a milestone or just taking a break from the daily grind, this trip is all about living your best life with your best friends by your side.",
        "We're here to make sure every detail is taken care of, from flights to fun, so you can focus on what's really important: having the time of your life. It's our responsibility to unlock the magic of Phuket—it's your responsibility to enjoy every second of it.",
      ],
      url: "/phuket/friends/delux",
      image: friendsDelux,
    },
    {
      title: "Squad goals: Phuket edition",
      data: [
        "From parasailing to island hopping, Phuket’s adventure scene is calling out to your inner Mastikhor. Whether you’re daring each other to try something new or just laughing at each other’s fails, these moments will become the stuff of legends.",
        "Phuket’s street food scene is perfect for those late-night munchies with friends. Imagine roaming the vibrant markets, tasting exotic flavors, and arguing over who found the best dish. These are the memories that make trips unforgettable.",
        "Why wait? With our 'Travel Now, Pay Later' option, you and your friends can pack your bags and head to Phuket without worrying about the budget. Dosti mein no tension, only fun.",
      ],
      url: "/phuket/friends/premium",
      image: friendsPremium,
    },
  ],
};
