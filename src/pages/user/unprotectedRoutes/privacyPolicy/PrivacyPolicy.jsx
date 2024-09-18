import { privacyPolicy } from "./data.js";

import "./privacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="hero">
        <h2>Privacy Policy</h2>
      </div>

      <div className="content">
        {privacyPolicy.map((section, index) => (
          <div key={index} className="section">
            <h2>{section.heading}</h2>

            {section.content.map((item, itemIndex) => {
              if (typeof item === "string") {
                return <p key={itemIndex}>{item}</p>;
              }

              if (item.subheading && item.details) {
                return (
                  <div key={itemIndex} className="subsection">
                    <h3>{item.subheading}</h3>

                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="detail-section">
                        {typeof detail === "string" && <p>{detail}</p>}

                        {Array.isArray(detail.items) && (
                          <ul>
                            {detail.items.map((listItem, listIndex) => {
                              const [label, description] = listItem.split(": ");

                              return (
                                <li key={listIndex}>
                                  <span className="list-label">{label}:</span>{" "}
                                  {description}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
