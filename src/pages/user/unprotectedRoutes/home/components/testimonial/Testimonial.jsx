import "./testimonial.scss";

//Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//Assets
import quotes from "@/assets/quotes.webp";
import tarun from "@/assets/tarun.jpg";
import eshwar from "@/assets/eshwar.jpg";
import kaushik from "@/assets/kaushik.jpg";
import jayanth from "@/assets/jayanth.jpg";

const Testimonial = () => {
  const data = [
    {
      name: "Jayanth",
      profilePic: jayanth,
      para1:
        "I recently spent a week in Phuket, and thanks to Vishnu and his team, it was an unforgettable experience. Our stay at the luxurious 10-bedroom villa was incredible. Vishnu's meticulous planning ensured we enjoyed a mix of both iconic and hidden gems in Phuket.",
      para2:
        "One of the highlights was a day trip to the Phi Phi Islands, where we snorkeled in crystal-clear waters and relaxed on pristine beaches. The trip to James Bond Island and Phang Nga Bay was another standout, offering breathtaking views and an exhilarating experience exploring sea caves by kayak.",
    },
    {
      name: "Tarun",
      profilePic: tarun,
      para1:
        "Phuket has always been on my travel bucket list, and Vishnu and his team made this trip beyond exceptional. Staying in a sprawling 10-bedroom villa with a private pool was the perfect start to our adventure.",
      para2:
        "The itinerary included a visit to the Big Buddha, offering panoramic views of the island, and a serene afternoon at Wat Chalong, Phuket’s largest and most revered temple. We also had a blast at the Andamanda Phuket Water Park, which was great fun for both kids and adults alike.",
    },
    {
      name: "Eshwar",
      profilePic: eshwar,
      para1:
        "Our recent trip to Phuket was absolutely perfect, thanks to Vishnu and his amazing team. We stayed in a magnificent 10-bedroom villa, complete with a pool and a games room that kept everyone entertained.",
      para2:
        "The itinerary was diverse and thrilling. We enjoyed a day trip to Phi Phi Islands, where the turquoise waters and sandy beaches were nothing short of paradise. Another memorable outing was the zipline adventure at Hanuman World, offering an adrenaline rush with stunning views from the treetops.",
    },
    {
      name: "Sai Kaushik Nampalli",
      profilePic: kaushik,
      para1:
        "Our honeymoon in Bali was a dream come true, filled with breathtaking landscapes and memorable experiences. From a warm welcome in Ubud to witnessing a hilltop sunrise, and kayaking through stunning waters, each day was a new adventure. The scenic drive to Uluwatu Temple, and Kechak dance, made for unforgettable moments.",
      para2:
        "We ended our trip with some shopping, poolside relaxation, and a couple’s massage. A huge thank you to Badri from the travel agency for making every detail perfect. We can't wait to return and explore even more of Bali’s beauty!",
    },
  ];

  return (
    <section className="testimonial">
      <div className="content">
        <h2>Happy Customers</h2>
        <img src={quotes} alt="" />
      </div>
      <Swiper
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="top-card">
              <img src={item.profilePic} alt="" />
              <h4>{item.name}</h4>
              <p>Happy Customer</p>
            </div>
            <div className="bottom-card">
              <div className="message">
                <p>{item.para1}</p>
                <p>{item.para2}</p>
                <p>{item.para3}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
