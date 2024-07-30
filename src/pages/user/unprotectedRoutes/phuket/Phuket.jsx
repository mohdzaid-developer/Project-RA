import "./phuket.scss";

//Assets
import heroImg from "@/assets/phuketHero.svg";
import img1 from "@/assets/phuket1.svg";
import img2 from "@/assets/phuket2.svg";
import img3 from "@/assets/homePhuket.svg";
import img4 from "@/assets/phuket3.svg";
import img5 from "@/assets/phuket4.svg";

//Component
import LevelOnePage from "@/components/user/LevelOnePage/LevelOnePage";

const Phuket = () => {
  const data = {
    title: "Phuket",
    heroImg: heroImg,
    content: [
      `Phuket, the enchanting island of Indonesia, beckons travelers with`,
      ` its mesmerizing beauty and rich cultural heritage. Known as the`,
      `"Island of the Gods,"Bali offers a diverse range of experiences,making `,
      `it a top destination for tourists from around the world.`,
    ],
    xRange1: ["0%", "-25.5%"],
    xRange2: ["0%", "-23%"],
    galleryImg: [img1, img2, img3, img4, img5],
  };
  return (
    <section className="phuket">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Phuket;
