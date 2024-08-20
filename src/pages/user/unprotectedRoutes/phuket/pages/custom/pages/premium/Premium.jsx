//Components
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

//Config
import { data } from "./config/config";

const Premium = () => {
  return (
    <section>
      <LevelThreePage data={data} />
    </section>
  );
};

export default Premium;
