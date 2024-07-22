import "./bali.scss";

//Assets
import heroImg from "@/assets/baliHero.svg";

//Component
import LevelOnePage from "@/components/user/LevelOnePage/LevelOnePage";

const Bali = () => {
  const data = {
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
  };
  return (
    <section className="bali">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Bali;
