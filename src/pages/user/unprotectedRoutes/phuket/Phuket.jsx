import "./phuket.scss";

//Assets
import heroImg from "@/assets/phuketHero.svg";

//Component
import LevelOnePage from "@/components/user/LevelOnePage/LevelOnePage";

const Phuket = () => {
  const data = {
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
  };
  return (
    <section className="phuket">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Phuket;
