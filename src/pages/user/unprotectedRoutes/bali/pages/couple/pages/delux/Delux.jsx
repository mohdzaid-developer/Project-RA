//Components
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

//Config
import { data } from "./config/config";

const Delux = () => {
  return (
    <section>
      <LevelThreePage data={data} />
    </section>
  );
};

export default Delux;
