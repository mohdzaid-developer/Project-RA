//Components
import LevelThreePage from "@/components/user/pages/levelThreePage/LevelThreePage";

//Config
import { data, activities } from "./config/config";

const Standard = () => {
  return (
    <section>
      <LevelThreePage data={data} activities={activities} />
    </section>
  );
};

export default Standard;
