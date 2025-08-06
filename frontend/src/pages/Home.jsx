import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="section section1">
        <video
          className="hidden-xs"
          width="100%"
          height="auto"
          muted
          autoPlay
          loop
          playsInline
        >
          <source
            src="https://www.trivenigroup.com/storage/banners/desktop_final.mp4"
            type="video/mp4"
          />
        </video>

        <video
          className="visible-xs"
          width="100%"
          height="auto"
          muted
          autoPlay
          loop
          playsInline
        >
          <source
            src="https://www.trivenigroup.com/storage/banners/mobile/mobile_final.mp4"
            type="video/mp4"
          />
        </video>

        <div className="container">
          <div className="col-md-7">
            <div className="banner-content">
              <h1>INSPIRED ENGINEERING</h1>
              <p>
                As we close on almost a century of pioneering work in sectors
                that are the building blocks of the economy, we look to continue
                our sustainable success story for the next 100 years.
              </p>

              <div className="banner-btn">
                <a
                  href="https://www.trivenigroup.com/who-we-are"
                  className="orgbtn"
                >
                  Who we are
                </a>
              </div>

              <div className="bannernum" style={{ display: 'none' }}>
                <div className="col-md-3 col-xs-4">
                  <h6>
                    <span className="counter counter1">17</span>
                  </h6>
                  <p>World-class Facilities</p>
                  <div className="txtline">
                    <div className=""></div>
                  </div>
                </div>

                <div className="col-md-3 col-xs-4">
                  <h6>
                    <span className="counter counter1">200</span>K+
                  </h6>
                  <p>Hectare Area Under Sugarcane</p>
                  <div className="txtline">
                    <div className=""></div>
                  </div>
                </div>

                <div className="col-md-3 col-xs-4">
                  <h6>
                    <span className="counter counter1">61000</span>
                  </h6>
                  <p>Tonnes per day crushing capacity</p>
                  <div className="txtline">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arrowSection">
          <div className="arrowContainer inspired-btmbtn">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
      {/* Home buisness */}
      <div className="section section2 bus-sec" id="Business">

    </div>
    </MainLayout>
  );
};

export default Home;
