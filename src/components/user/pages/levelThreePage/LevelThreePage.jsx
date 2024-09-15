//Components
import Hero from "../levelOnePage/components/hero/Hero";
import Introduction from "./components/introduction/Introduction";
import Activities from "./components/activities/Activities";
import Description from "./components/description/Description";
import Payment from "./components/payment/Payment";

//Routing
import { useLocation } from "react-router-dom";

const LevelThreePage = ({ data }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <section className="levelThreePage">
      <Hero data={data} />
      {location.pathname === "/bali/custom/standard" ||
      location.pathname === "/bali/custom/premium" ||
      location.pathname === "/bali/custom/delux" ||
      location.pathname === "/phuket/custom/standard" ||
      location.pathname === "/phuket/custom/premium" ||
      location.pathname === "/phuket/custom/delux" ? (
        <div style={{ marginBottom: "150px" }}></div>
      ) : (
        <>
          <Introduction />
          <Activities data={data} />
          <Description />
        </>
      )}

      <Payment data={data} />
    </section>
  );
};

export default LevelThreePage;
