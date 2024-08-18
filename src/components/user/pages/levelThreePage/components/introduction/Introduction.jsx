import "./introduction.scss";

//Assets
import arrow from "@/assets/dottedArrow.png";

const Introduction = () => {
  const data = [
    {
      day: "Day 1: Arrival Day",
      rest: ["Relax after your arrival"],
      visit: ["Visit nearby places", "Local shopping"],
      activities: [],
      lunch: "",
      dinner: "",
      image: arrow,
      imgClass: "arrow1",
      cardClass: "card1",
    },
    {
      day: "Day 2: Cultural and Nature Exploration",
      visit: ["Cultural and Nature Exploration", "Ubud Monkey Forest"],
      activities: ["Elephant Care experience"],
      lunch: "At a local restaurant",
      dinner: "",
      image: arrow,
      imgClass: "arrow2",
      cardClass: "card2",
    },
    {
      day: "Day 3: Southern Bali Highlights",
      visit: [
        "Garuda Wisnu Kencana (GWK) Cultural Park",
        "Uluwatu Temple",
        "Watch the Kecak Dance / Visit the southernmost point of Bali",
        "Pandawa Beach",
      ],
      activities: [],
      lunch: "",
      dinner: "Enjoy seafood at Jimbaran Beach",
      image: arrow,
      imgClass: "arrow3",
      cardClass: "card3",
    },
    {
      day: "Day 6: Departure Day",
      departure: "Prepare for your flight home",
      image: arrow,
      imgClass: "arrow4",
      cardClass: "card4",
    },
    {
      day: "Day 5: Adventure and Fun",
      visit: ["Tegenungan Waterfall"],
      activities: ["Zoo / Waterbom Bali (water park)"],
      lunch: "",
      dinner: "",
      image: arrow,
      imgClass: "arrow4",
      cardClass: "card5",
    },
    {
      day: "Day 4: Waterfalls and Relaxation",
      visit: ["Kanto Lampo waterfalls", "Tegalalang Rice Terrace"],
      activities: ["Optional activity or relaxation"],
      lunch: "At a scenic spot",
      dinner: "",
      cardClass: "card6",
    },
  ];

  return (
    <section className="intro">
      <h2>Activities we provide</h2>

      <div className="content">
        {data.map((item, index) => (
          <div className={`card-container ${item.cardClass}`}>
            <div className="card" key={index}>
              <h3>{item.day}</h3>

              {item.rest && item.rest.length > 0 && (
                <p>
                  <span>Rest:</span> {item.rest}
                </p>
              )}

              {item.visit && item.visit.length > 0 && (
                <div>
                  <span>Places to Visit:</span>
                  {item.visit.map((place, i) => (
                    <p key={i}>{place}</p>
                  ))}
                </div>
              )}

              {item.activities && item.activities.length > 0 && (
                <div>
                  <span>Activities:</span>
                  {item.activities.map((activity, i) => (
                    <p key={i}>{activity}</p>
                  ))}
                </div>
              )}

              {item.lunch && (
                <p>
                  <span>Lunch:</span> {item.lunch}
                </p>
              )}

              {item.dinner && (
                <p>
                  <span>Dinner:</span> {item.dinner}
                </p>
              )}

              {item.departure && (
                <p>
                  <span>Departure:</span> {item.departure}
                </p>
              )}
            </div>
            <img src={item.image} alt="" className="arrow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
