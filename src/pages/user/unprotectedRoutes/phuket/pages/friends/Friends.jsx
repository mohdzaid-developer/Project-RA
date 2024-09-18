//Components
import LevelTwoPage from "@/components/user/pages/levelTwoPage/LevelTwoPage";

//Config
import { data } from "./config/config";

const Friends = () => {
  return (
    <section>
      <LevelTwoPage data={data} />
    </section>
  );
};

export default Friends;
