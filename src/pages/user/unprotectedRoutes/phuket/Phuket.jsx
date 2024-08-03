//Component
import LevelOnePage from "@/components/user/pages/levelOnePage/LevelOnePage";

//Config
import { data } from "./config/config";

const Phuket = () => {
  return (
    <section className="phuket">
      <LevelOnePage data={data} />
    </section>
  );
};

export default Phuket;
