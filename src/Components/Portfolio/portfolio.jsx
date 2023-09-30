import "./portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const portfolio = () => {
  // portfolio page link //
  const page1 =
    "https://d2zm6ltkguvwr7.cloudfront.net/wp-content/uploads/2017/11/Dropbox-838x422.png";
  const page2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3iq6u8NmsmIwzh-MIgvKyn_ATY-A1gUn9kd6dZLhYziSvlas3NT2j6ljbny_JJCgShk&usqp=CAU";
  const page3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_B5pDQcrZQt2ADLhsJcI5echrmXsUjaZTuZC39CXakyTQh945aCKmu646qHakVa9npg&usqp=CAU";
  const page4 =
    "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format";

  return (
    
    <div className="portfolio" id="PortFolio"> 
      <div className="p-top-section">
        <span>Recent Domo</span>
        <span>Project</span>
      </div>

      <Swiper
      spaceBetween={10} 
      slidesPerView={3}
      grabCursor = {true}
      className="portfolio-slider"
      >
        <SwiperSlide >
          <img src={page1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={page2} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={page3} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={page1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={page1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={page1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={page1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default portfolio