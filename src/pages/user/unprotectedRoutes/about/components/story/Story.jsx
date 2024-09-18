import "./story.scss";
import guy from "@/assets/guy.webp";

const Story = () => {
  return (
    <section className="story">
      <div className="story-container">
        <h2>Our Story: A Journey of Dreams and Determination</h2>

        <div className="content">
          <img src={guy} alt="" />
          <div className="text">
            <p>
              I'm Vishnu, founder of Come Fly with Me. My love for travel began
              in childhood, thanks to my parents, who believed that the world
              was the best classroom. Each trip we took was an adventure that
              fueled my passion for exploring.
            </p>
            <p>
              In 2018, I moved to Australia and spent six years traveling across
              Asia as a solo budget traveler. I faced the challenges every
              traveler knows—uncertainty, scams, and financial struggles—but
              these experiences only deepened my love for the journey.
            </p>
            <p>
              One defining moment was in a small Thai village, where I met a
              local family after spending my last few baht on a meal. They
              welcomed me into their home, and despite the language barrier, we
              connected over food and laughter. It was a powerful reminder that
              travel is about more than just seeing places; it’s about the
              connections we make and the sense of belonging we find, even far
              from home.
            </p>
            <p>
              This experience inspired me to create Come Fly with Me, a way to
              share the joy of travel and help others create their own
              life-changing adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
