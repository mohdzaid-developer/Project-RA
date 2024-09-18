import "./refundPolicy.scss";

//Data
import { refundPolicy } from "./data";

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <div className="hero">
        <h2>Refund Policy</h2>
      </div>

      <div className="content">
        {refundPolicy.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            {section.sections.map((subSection, subIndex) => (
              <div key={subIndex}>
                <h3>{subSection.heading}</h3>

                {Array.isArray(subSection.content) ? (
                  <>
                    {subSection.content.map((contentItem, contentIndex) => (
                      <div key={contentIndex}>
                        {typeof contentItem === "string" ? (
                          <p>{contentItem}</p>
                        ) : (
                          <div className="cancellation-schedule">
                            <h4>Cancellation Schedule</h4>
                            {contentItem.cancellationSchedule.map(
                              (scheduleItem, scheduleIndex) => (
                                <div key={scheduleIndex}>
                                  <p>
                                    <strong>
                                      {scheduleIndex + 1}. {scheduleItem.period}
                                      :{" "}
                                    </strong>
                                    {scheduleItem.refundTerms}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <p>{subSection.content}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundPolicy;
