import "./bali.scss";

//Assets
import heroImg from "@/assets/baliHero.svg";
import img1 from "@/assets/bali1.svg";
import img2 from "@/assets/bali2.svg";
import img3 from "@/assets/homeBali.svg";
import img4 from "@/assets/bali3.svg";
import img5 from "@/assets/bali4.svg";

//Component
import LevelOnePage from "@/components/user/LevelOnePage/LevelOnePage";

const Bali = () => {
  const data = {
    title: "Bali",
    heroImg: heroImg,
    content: [
      `Bali, the enchanting island of Indonesia, beckons travelers with`,
      ` its mesmerizing beauty and rich cultural heritage. Known as the`,
      `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
      `it a top destination for tourists from around the world.`,
    ],
    xRange1: ["0%", "-28%"],
    xRange2: ["0%", "-26%"],
    galleryImg: [img1, img2, img3, img4, img5],
  };
  return (
    <section className="bali">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Bali;
