import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Business = () => {
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="business-sec">
          <h2 className="main-heading">BUSINESSES</h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={false}
            // autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="parent">
                <div className="child bg-four">
                  <div className="bus-con">
                    <img src="/images/sugar-new.webp" className="img-responsive" loading="lazy" alt="White Indian Sugar" />
                    <h3>Sugar</h3>
                    <div className="banner-btn">
                      <a href="/sugar" className="orgbtn">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="parent">
                <div className="child bg-six">
                  <div className="bus-con">
                    <img src="/images/Alcohol-&-Ethanol.webp" className="img-responsive" loading="lazy" alt="wastewater treatment solution" />
                    <h3>Water Solutions</h3>
                    <div className="banner-btn">
                      <a href="/alcohol" className="orgbtn hvr-sweep-to-right">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="parent">
                <div className="child bg-two">
                  <div className="bus-con">
                    <img src="/images/Alcohol-&-Ethanol.webp" className="img-responsive" loading="lazy" alt="Gear &amp; Gearbox Manufacturer" />
                    <h3>Power Transmission</h3>
                    <div className="banner-btn">
                      <a href="/alcohol" className="orgbtn hvr-sweep-to-right">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="parent">
                <div className="child bg-seven">
                  <div className="bus-con">
                    <img src="/images/Alcohol-&-Ethanol.webp" className="img-responsive" loading="lazy" alt="Gear &amp; Gearbox Manufacturer" />
                    <h3>Power Transmission</h3>
                    <div className="banner-btn">
                      <a href="/alcohol" className="orgbtn hvr-sweep-to-right">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Slide 5 */}
            <SwiperSlide>
              <div className="parent">
                <div className="child bg-eight">
                  <div className="bus-con">
                    <img src="/images/Alcohol-&-Ethanol.webp" className="img-responsive" loading="lazy" alt="Defence Supplier" />
                    <h3>Defence</h3>
                    <div className="banner-btn">
                      <a href="/alcohol" className="orgbtn hvr-sweep-to-right">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Business;
