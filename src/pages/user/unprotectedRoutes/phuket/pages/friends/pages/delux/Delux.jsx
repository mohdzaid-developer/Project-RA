//Components
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

//Config
import { data, activities } from "./config/config";

const Delux = () => {
  return (
    <section>
      <LevelThreePage data={data} activities={activities} />
    </section>
  );
};

export default Delux;
