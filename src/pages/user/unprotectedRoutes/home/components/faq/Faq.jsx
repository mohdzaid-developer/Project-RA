import { useState } from "react";
import "./faq.scss";

//Assets
import downArrow from "../../../../../../assets/downArrow.svg";
import rightArrow from "../../../../../../assets/rightArrow.svg";
import ScrollText from "./scrollText/ScrollText";

const Faq = () => {
  const content = [
    "At Project RA, Travel Agency, we believe that travel is not",
    "about the journey and the memories you create.",
  ];

  const faqData = [
    {
      question: "This is question 1?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render the user interface as the data changes.",
    },
    {
      question: "This is question 2?",
      answer:
        "You can install React using the npm package manager. Run the command 'npm install react' to install the core React library. Additionally, you might need to install 'react-dom' for web rendering and 'react-scripts' for creating React applications with Create React App.",
    },
    {
      question: "This is question 3?",
      answer:
        "React components are the building blocks of a React application. They are reusable, self-contained pieces of UI that can be composed to create complex user interfaces. Components can be class components or functional components.",
    },
  ];

  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    if (isClicked === index) {
      return setIsClicked(false);
    } else {
      setIsClicked(index);
    }
  };

  return (
    <>
      <div className="faq-container">
        <ScrollText content={content} />
        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={index} className="faq" onClick={() => toggleFaq(index)}>
              <div className="title">
                <div className="test">
                  <p>12-12-12</p>
                  <h1>{item.question}</h1>
                </div>
                {isClicked === index ? (
                  <img src={downArrow} alt="" />
                ) : (
                  <img src={rightArrow} alt="" />
                )}
              </div>

              <div className={`content ${isClicked === index ? "show" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
2;
