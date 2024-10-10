//Components
import Hero from "../levelOnePage/components/hero/Hero";
import Introduction from "./components/introduction/Introduction";
import Activities from "./components/activities/Activities";
import Description from "./components/description/Description";
import Payment from "./components/payment/Payment";

//Routing
import { useLocation } from "react-router-dom";

const LevelThreePage = ({ data, activities }) => {
  const location = useLocation();

  return (
    <section className="levelThreePage">
      <Hero data={data} />
      {location.pathname.includes("custom") ? (
        <div style={{ marginBottom: "150px" }}></div>
      ) : (
        <>
          <Introduction activities={activities} />
          <Activities data={data} />
        </>
      )}

      <Description />
      <Payment data={data} />
    </section>
  );
};

export default LevelThreePage;
