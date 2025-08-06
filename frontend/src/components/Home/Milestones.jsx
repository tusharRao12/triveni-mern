import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const milestoneData = [
  {
    year: '2024',
    img: 'https://www.trivenigroup.com/storage/files/milestone/milestone-2024-img.webp',
    alt: '2024',
    paragraphs: [
      `<b>Company</b><br>The Company announced the upgrade of its long-term rating to ICRA AA+...`,
      `Acquisition of stake in Sir Shadi Lal Enterprises Limited (SSEL)...`,
      `<b>Alcohol Business</b><br>The Company commenced a new multi-feed distillery at Rani Nangal...`,
      `IMFL Business: The Company commenced marketing and selling its own brands...`,
    ],
  },
  {
    year: '2023',
    img: 'https://www.trivenigroup.com/storage/files/milestone/milestone-2023-img.webp',
    alt: '2023',
    paragraphs: [
      `During the year, the Company announced a buyback resulting in a record distribution of ₹800 crore...`,
      `<b>Triveni Sports Private Limited (TSPL)</b> through its franchise...`,
      `<b>Power Transmission Business:</b> First High Power (27.5 MW)...`,
      `<b>Water Business:</b> Maldives - Triveni completed and handed over four out of six islands...`,
    ],
  },
  {
    year: '2022',
    img: 'https://www.trivenigroup.com/storage/files/milestone/1657774241.webp',
    alt: '2022',
    paragraphs: [
      `During the year, the Company announced a buyback resulting in a record distribution of ₹800 crore...`,
      `<b>Triveni Sports Private Limited (TSPL)</b> through its franchise...`,
      `<b>Power Transmission Business:</b> First High Power (27.5 MW)...`,
      `<b>Water Business:</b> Maldives - Triveni completed and handed over four out of six islands...`,
    ],
  },
  // Add more objects for years like 2022, 2021, etc.
];


const Milestones = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="section section3" id="Our-Heritage">
      <div className="container">
        <h2 className="main-heading">MILESTONES</h2>

        <div className="our-heritage">
          <div className="row milestone-content">
            <div className="col-md-6">
              <img
                src={milestoneData[activeIndex].img}
                alt={milestoneData[activeIndex].alt}
                loading="lazy"
                width="430"
                height="270"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6">
              <div className="scrollbar-who">
                {milestoneData[activeIndex].paragraphs.map((para, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: para }}></p>
                ))}
              </div>
            </div>
          </div>

          <div className="milestone-carousel">
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              navigation
              modules={[Navigation]}
              breakpoints={{
                0: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
            >
              {milestoneData.map((item, index) => (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`year-button ${index === activeIndex ? 'active' : ''}`}
                  >
                    {item.year}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milestones