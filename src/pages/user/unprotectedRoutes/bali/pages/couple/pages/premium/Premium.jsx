//Components
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

//Config
import { data, activities } from "./config/config";

const Premium = () => {
  return (
    <section>
      <LevelThreePage data={data} activities={activities} />
    </section>
  );
};

export default Premium;
