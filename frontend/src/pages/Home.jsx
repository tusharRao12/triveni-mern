import MainLayout from '../layouts/MainLayout';
import Business from '../components/Home/Business';
import Milestones from '../components/Home/Milestones';
import axios from 'axios';

const Home = () => {
  const fetchUsers = async () => {
  const res = await axios.get('http://localhost:5000/api/users');
    console.log(res.data);
  };
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
          <Business/>
      </div>
      <Milestones/>
      <div className="section" id="Our-Performance">
        <section className="ourPerformance">
          <div className="container">
            <div className="row">
              {/* Heading */}
              <div className="col-md-12">
                <div className="allHeads">
                  <h3>PERFORMANCE</h3>
                </div>
              </div>

              {/* Left Side */}
              <div className="col-md-6">
                <div className="revenueForm">
                  <div className="indRevenue bg_1">
                    <div>
                      <h3>
                        <span>Rs.</span>
                        <span className="counter">5689.2</span>
                        <sub>cr</sub>
                      </h3>
                    </div>
                    <div>
                      <p>
                        Revenue from Operations <span className="dispTxts">(Net of excise duty) FY 25</span>
                      </p>
                    </div>
                  </div>

                  <div className="indRevenue bg_2">
                    <div>
                      <h3>
                        <span className="counter">3</span>
                        <sub>x</sub>
                      </h3>
                    </div>
                    <div>
                      <p>
                        Revenue from operations <span className="dispTxts">(Net of Excise Duty) FY 16-25</span>
                      </p>
                    </div>
                  </div>

                  <div className="indRevenue bg_3">
                    <div>
                      <h3>
                        <span className="counter">3.7</span>
                        <sub>x</sub>
                      </h3>
                    </div>
                    <div>
                      <p>EBITDA FY 16-25</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-md-6">
                <div className="smallHeads">
                  <h4>Annual Report</h4>
                </div>
                <div className="annualReport">
                  <img
                    src="https://www.trivenigroup.com/storage/performence_image/TEIL-Mockup-home.webp"
                    loading="lazy"
                    className="img-responsive"
                    width="555"
                    height="286"
                    alt="Annual Report"
                  />
                  <div className="allDownloads">
                    <div className="insDownload">
                      <a
                        href="https://www.trivenigroup.com/storage/files/annual-report/Triveni%20Engineering_AR_23_10mb.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>Click to download FY 24 PDF version</p>
                        <img
                          src="https://www.trivenigroup.com/storage/performence_image/pdf.webp"
                          width="14"
                          height="17"
                          alt="PDF Icon"
                        />
                      </a>
                    </div>

                    <div className="insDownload">
                      <a
                        href="https://www.trivenigroup.com/Annual-Report-2023-24/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>Click to view web version</p>
                        <img
                          src="https://www.trivenigroup.com/storage/performence_image/view-web-version-icon.webp"
                          loading="lazy"
                          width="14"
                          height="14"
                          alt="View Icon"
                        />
                      </a>
                    </div>

                    <div className="insDownload">
                      <a href="https://www.trivenigroup.com/investors?p=investor-overview">
                        <p>Click to go to Investors</p>
                        <img
                          src="https://www.trivenigroup.com/storage/performence_image/view-web-version-icon.webp"
                          loading="lazy"
                          width="14"
                          height="14"
                          alt="Investors Icon"
                        />
                      </a>
                    </div>

                    <div className="insDownload">
                      <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer">
                        <p>Click to go to ODR Platform</p>
                        <img
                          src="https://www.trivenigroup.com/storage/performence_image/view-web-version-icon.webp"
                          loading="lazy"
                          width="14"
                          height="14"
                          alt="ODR Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="section section5" id="Working-Towards" style={{
  backgroundImage: 'url("https://www.trivenigroup.com/storage/banners/1635854272.webp")',
}}></div>
      <div className="section section6" id="better-Future" style={{
  backgroundImage: 'url("https://www.trivenigroup.com/storage/banners/session-6-new.webp")',
}}>
          <div className="container">
            <div className="row">
              <p style={{
                fontSize: '25px',
                fontWeight: 700,
                color: '#fff',
                textAlign: 'center',
                paddingTop: '65px',
                textTransform: 'uppercase',
              }}>
                Working Towards Building A Better Future</p>
                <div className="banner-btn inbtn abt-btn">
              <a href="/community" className="orgbtn hvr-sweep-to-right">Explore</a>
            </div>
            </div>
          </div>
      </div>
      <div className="section homePageSec section7" id="Join-the-team" style={{
  backgroundImage: 'url("https://www.trivenigroup.com/storage/banners/joinus-banner-image.webp")',
}}>
        <div className="container">
          <div className="jointm">
            <h4 style={{
            fontSize: '25px',
            fontWeight: 700,
            color: '#fff',
            textTransform: 'uppercase',
            paddingBottom: '20px',
          }}>Join Us</h4>
            <p className="Up">
            Triveni brings together the best of diverse worlds; we are a fast-growing conglomerate with market leadership across businesses and a culture that emphasises the constant development of every individual. The end objective for everyone is to attain personal milestones and contribute to winning teams. 
            </p>
            <div className="banner-btn inbtn abt-btn">
              <a href="/life-at-triveni" className="orgbtn hvr-sweep-to-right">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
