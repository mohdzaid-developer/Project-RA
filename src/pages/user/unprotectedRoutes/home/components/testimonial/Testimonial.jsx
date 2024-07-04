import "./testimonial.scss";

//Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//Assets
import defaultProfileImg from "@/assets/defaultProfileImg.png";

const Testimonial = () => {
  const data = [
    {
      name: "Jayanth",
      profilePic: defaultProfileImg,
      para1:
        "I recently spent a week in Phuket, and thanks to Vishnu and his team, it was an unforgettable experience. Our stay at the luxurious 10-bedroom villa was incredible, featuring a private pool and games room. Vishnu's meticulous planning ensured we enjoyed a mix of both iconic and hidden gems in Phuket.",
      para2:
        "One of the highlights was a day trip to the Phi Phi Islands, where we snorkeled in crystal-clear waters and relaxed on pristine beaches. The trip to James Bond Island and Phang Nga Bay was another standout, offering breathtaking views and an exhilarating experience exploring sea caves by kayak.",
      para3:
        "We also visited the vibrant Phuket Old Town with its stunning Sino-Portuguese architecture and charming cafes. The Sunday Walking Street Market was a delight, filled with unique local foods and crafts. The recommendations for restaurants were spot-on, with each meal being an adventure in itself. I can’t recommend Vishnu’s services enough!",
    },
    {
      name: "Tarun",
      profilePic: defaultProfileImg,
      para1:
        "Phuket has always been on my travel bucket list, and Vishnu and his team made this trip beyond exceptional. Staying in a sprawling 10-bedroom villa with a private pool was the perfect start to our adventure.",
      para2:
        "The itinerary included a visit to the Big Buddha, offering panoramic views of the island, and a serene afternoon at Wat Chalong, Phuket’s largest and most revered temple. We also had a blast at the Andamanda Phuket Water Park, which was great fun for both kids and adults alike.",
      para3:
        "The day trip to the Phi Phi Islands was the highlight, where we enjoyed snorkeling and sightseeing. Vishnu also organized a trip to the Elephant Jungle Sanctuary, providing an ethical and unforgettable experience with these gentle giants . Exploring the bustling Phuket Weekend Night Market was another must-do, filled with a variety of foods and unique finds . Vishnu’s restaurant recommendations were fantastic, making each meal memorable. ",
    },
    {
      name: "Eshwar",
      profilePic: defaultProfileImg,
      para1:
        "Our recent trip to Phuket was absolutely perfect, thanks to Vishnu and his amazing team. We stayed in a magnificent 10-bedroom villa, complete with a pool and a games room that kept everyone entertained.",
      para2:
        "The itinerary was diverse and thrilling. We enjoyed a day trip to Phi Phi Islands, where the turquoise waters and sandy beaches were nothing short of paradise. Another memorable outing was the zipline adventure at Hanuman World, offering an adrenaline rush with stunning views from the treetops.",
      para3:
        "Vishnu also took us to Phuket Old Town, with its charming streets and local eateries, and the vibrant Bangla Road for a taste of the nightlife . The Phuket Sunday Walking Street Market was a fantastic experience, brimming with local cuisine and crafts. Each restaurant recommended by Vishnu was a culinary delight, making this trip one for the books.",
    },
  ];
  return (
    <section className="testimonial">
      <div className="content">
        <p className="title">Unforgettable</p>
        <h2>
          Testimonial the Best of <span>Bali and Phuket</span>
        </h2>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.profilePic} alt="" />
            <h4>{item.name}</h4>
            <div className="message">
              <p>{item.para1}</p>
              <p>{item.para2}</p>
              <p>{item.para3}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
