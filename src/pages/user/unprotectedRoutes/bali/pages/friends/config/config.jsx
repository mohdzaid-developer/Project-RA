//Assets
import levelOneFriendsImage from "@/assets/levelOneFriendsImage.webp";
import friendsStandard from "@/assets/friendsStandard.jpg";
import friendsDelux from "@/assets/friendsDelux.jpg";
import friendsPremium from "@/assets/friendsPremium.jpg";

export const data = {
  title: "Friends Package",
  heroImg: levelOneFriendsImage,
  content: [
    `Bali - Ever wished life had a skip button? Just like in 'Meku Mathrame Cheptha,'`,
    `this trip is your ultimate escape, making you wonder how you ever lived`,
    ` without it. Get ready for an all-thrill, nochill vacation`,
  ],
  xRange1: ["0%", "-27%"],
  xRange2: ["0%", "-25%"],
  xRange3: ["0%", "-23%"],
  xRange4: ["0%", "-20%"],
  xRangeLast: ["0%", "0%"],

  planTitle: "Friends",

  plans: [
    {
      title: "Friends forever bali",
      data: [
        `As seen in the film Ee Nagaraniki Emaindi, there’s always that one friend, Vivek, who turns
drunken conversations into grand plans for a dream vacation. Remember when Vivek said, "Life
is all about moments of joy and celebration"? Yet, despite the excitement, money and planning
often kept those dreams just out of reach.`,
        `But now, we’re here to help you escape those hurdles. With our travel plan, you can turn your
long-discussed adventures into reality, because, as Vivek would say, "Why wait for the perfect
moment when you can create it?"`,
        `Let us handle the details while you focus on rediscovering yourself and creating unforgettable
memories.`,
        `Make those dream conversations a reality. After all, “Life is too short to wait.`,
      ],
      url: "/bali/friends/standard",
      image: friendsStandard,
    },
    {
      title: "Party Island bali",
      data: [
        `Are you and your friends in desperate need of a break? Tired of the endless assignments,
        exams, and sleepless nights? Is your life feeling like a never-ending reel of “Tumse Na Ho
        Payega” moments?`,
        `Ready for an escape plan that’s spicier than a Hyderabadi biryani? Imagine sipping cocktails while your only worry is getting sand in your shoes, not in your
        textbooks. Ready to ditch the campus drama for some Bali drama?
        Don’t just dream about it, live it.`,
        `Trust us, once upon a time I was a student like you, and I know exactly what you need. Bhai,
        saath hai tumhara, I’ll handle everything for you. After all, who needs another group project
        when you can have a group escape?`,
      ],
      url: "/bali/friends/delux",
      image: friendsDelux,
    },
    {
      title: "Zindhagi Na Melige Dubara",
      data: [
        `We get it, Life’s hectic, and planning a vacation that’s as perfect as your Instagram feed can feel
like an impossible task. But don’t worry, hum hain na! We specialize in turning your Bali dreams
into a luxurious reality that’s so seamless, you’ll think, "Yeh log kaise kar lete hain?"`,

        `From the moment you imagine sipping cocktails by the infinity pool to actually living like royalty
in a beachside villa, we’re the only ones who can make it happen just the way you envisioned.`,

        `We handle every detail with so much care and passion, there’s no chance of any "Arrey yaar,
yeh kya ho gaya?" moments. With us, you’re not just booking a trip; you’re setting the stage for
unforgettable memories. Join us, and get ready for a vacation that will make your friends say,
Wah, yeh trip toh blockbuster thi!`,
      ],
      url: "/bali/friends/premium",
      image: friendsPremium,
    },
  ],
};
