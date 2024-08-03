import "./bali.scss";

//Component
import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

//Config
import { data } from "./config/config";

const Bali = () => {
  return (
    <section className="bali">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Bali;
