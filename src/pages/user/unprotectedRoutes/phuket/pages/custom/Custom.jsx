//Components
import LevelTwoPage from "@/components/user/pages/levelTwoPage/LevelTwoPage";

//Config
import { data } from "./config/config";

const Custom = () => {
  return (
    <section>
      <LevelTwoPage data={data} />
    </section>
  );
};

export default Custom;
