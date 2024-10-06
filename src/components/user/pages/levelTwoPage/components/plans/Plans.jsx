import { useState } from "react";
import "./plans.scss";

//Routing
import { useNavigate } from "react-router-dom";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

const Plans = ({ data }) => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(data.plans[0]);

  const handlePlanChange = (selectedPlan) => {
    setPlan(selectedPlan);
  };
  return (
    <section className="plans">
      <div className="left">
        <h2>{data.planTitle} Explore Plans</h2>
        <div className="buttons">
          {data.plans.map((item, index) => (
            <button
              key={index}
              onClick={() => handlePlanChange(item)}
              className={plan.title === item.title ? "active" : ""}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="text">
          {plan.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="urlButton">
          <button onClick={() => navigate(`${plan.url}`)}>
            Explore Plan <img src={buttonArrowImg} alt="Arrow" />
          </button>
        </div>
      </div>

      <div className="right">
        <img src={plan.image} alt={plan.title} />
      </div>
    </section>
  );
};

export default Plans;
