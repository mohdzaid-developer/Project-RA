import { useState } from "react";
import "./faq.scss";

//Assets
import downArrow from "@/assets/downArrow.webp";
import rightArrow from "@/assets/rightArrow.webp";
import ScrollText from "./scrollText/ScrollText";

const Faq = () => {
  const content = [
    "At Come Fly With Me, we believe that travel is not",
    "about the journey and the memories you create.",
  ];

  const faqData = [
    {
      question: "What makes 'Come Fly With Me' different?",
      answer:
        "At 'Come Fly With Me', we focus on a select few destinations to offer uniquely crafted travel experiences. Unlike other agencies with endless options, we provide personalized, customizable itineraries that cater specifically to your preferences and budget. Our “Travel Now, Pay Later” option also makes luxury travel more accessible and stress-free.",
    },
    {
      question: "How does the “Travel Now, Pay Later” work?",
      answer:
        "Our “Travel Now, Pay Later” option allows you to book your holiday and pay in installments. This flexible payment plan helps you manage your travel expenses better without delaying your dream vacation. For more details, please contact our customer service team.",
    },
    {
      question: "Can I customize my travel package?",
      answer:
        "Absolutely! We offer customizable packages to ensure your holiday is tailored to your needs. Whether you have specific preferences, health considerations, or special requests, we’re here to create a personalized itinerary that suits you perfectly.",
    },
    {
      question: "How long are your standard travel packages?",
      answer:
        "Our main packages are designed for 5 days and 5 nights. This duration is perfect for a quick yet enriching getaway, covering major attractions and ensuring you have a fulfilling travel experience without needing an extended break from your daily life.",
    },
    {
      question: "What’s included in your travel packages?",
      answer:
        "Our packages include return flights, accommodation, visas, transfers, activities, and sightseeing. We aim to provide a complete travel experience so you can focus on enjoying your trip.",
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
                  <p>{index + 1}. </p>
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
