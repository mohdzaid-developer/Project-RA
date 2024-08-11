//Components
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

//Config
import { data } from "./config/config";

const Standard = () => {
  return (
    <section>
      <LevelThreePage data={data} />
    </section>
  );
};

export default Standard;
