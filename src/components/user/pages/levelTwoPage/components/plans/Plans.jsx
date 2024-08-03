import { useState } from "react";
import "./plans.scss";

//Routing
import { Link } from "react-router-dom";

//Assets
import buttonArrowImg from "@/assets/rightArrow.svg";
import baliFriendsStandard from "@/assets/baliFriendsStandard.svg";
import baliFriendsDelux from "@/assets/baliFriendsDelux.svg";
import baliFriendsPremium from "@/assets/baliFriendsPremium.svg";

const Plans = () => {
  const data = [
    {
      title: "Standard",
      data: [
        "Standard ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/",
      image: baliFriendsStandard,
    },
    {
      title: "Delux",
      data: [
        "Delux ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/",
      image: baliFriendsDelux,
    },
    {
      title: "Premium",
      data: [
        "Premium ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      url: "/",
      image: baliFriendsPremium,
    },
  ];

  const [plan, setPlan] = useState(data[0]);

  const handlePlanChange = (selectedPlan) => {
    setPlan(selectedPlan);
  };

  return (
    <section className="plans">
      <div className="left">
        <h2>Friends Escape Plans</h2>
        <div className="buttons">
          {data.map((item, index) => (
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
          <button>
            Escape Plan <img src={buttonArrowImg} alt="Arrow" />
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
