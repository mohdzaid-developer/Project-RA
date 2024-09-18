import "./termsAndConditions.scss";
import { termsAndConditionsPoints } from "./data";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <div className="hero">
        <h2>Terms & Conditions</h2>
      </div>

      <div className="content">
        {termsAndConditionsPoints.map((item, index) => (
          <div className="data" key={index}>
            <h3>
              {index + 1}. {item.title}:
            </h3>
            <div className="details">
              {item.details.map((detail, detailIndex) => {
                if (!detail.subData) {
                  return <p key={detailIndex}>{detail}</p>;
                } else {
                  return (
                    <div key={detailIndex} className="subData">
                      <p>{detail.subData.content}</p>
                      <ul>
                        {detail.subData.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
