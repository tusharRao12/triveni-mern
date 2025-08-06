import { Link } from 'react-router-dom';
import { useState } from 'react';

const FrontFooter = () => {
  const [isHiddenVisible, setIsHiddenVisible] = useState(false);

  const handleArrowClick = () => {
    setIsHiddenVisible(prev => !prev);
  };

  return (
    <div className="footer">
      <div className="topft">
        <div className="container">
          <div className="hidden">
            <div className="col-md-1 col-md-offset-2 col-xs-4">
              <p><Link to="/who-we-are">Who we are</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/businesses">Businesses</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/triveni-brands">Brands</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/investors">Investors</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/community">Community</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/media-releases">Media</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/life-at-triveni">Join Us</Link></p>
            </div>
            <div className="col-md-1 col-xs-4">
              <p><Link to="/contact-us">Contact Us</Link></p>
            </div>
          </div>

          <div className="btmarrow" onClick={handleArrowClick} style={{ cursor: 'pointer' }}>
            <img src="/images/arrow-icon.webp" loading="lazy" alt="arrow" className="img-responsive" style={{
              transform: isHiddenVisible ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}/>
            <img src="/images/arrow-icon.webp" loading="lazy" alt="arrow" className="img-responsive" style={{
              transform: isHiddenVisible ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }} />
          </div>
        </div>
      </div>

      <div className="mainfooter" style={{ display: isHiddenVisible ? 'block' : 'none' }}>
        <div className="container">
          <div className="col-md-4 col-xs-12">
            <img src="/images/logo-white-new.svg" loading="lazy" className="img-responsive" alt="logo" />
            <p>
              8th Floor, Express Trade Towers, Plot No. 15 & 16,
              <span>Sector 16-A, Noida - 201301, India.</span>
            </p>
          </div>

          <div className="col-md-2 col-xs-6">
            <p><Link to="/who-we-are">Who we are</Link></p>
            <ul>
              <li><Link to="/who-we-are?p=sugar-business">Sugar Business</Link></li>
              <li><Link to="/who-we-are?p=engineering-business">Engineering Business</Link></li>
              <li><Link to="/who-we-are?p=mission">Mission, Vision & Values</Link></li>
              <li><Link to="/who-we-are?p=sustaining-excellence">Purpose & Priorities</Link></li>
              <li><Link to="/who-we-are?p=our-heritagee">Milestones</Link></li>
              <li><Link to="/who-we-are?p=leadership-team">Leadership Team</Link></li>
              <li><Link to="/who-we-are?p=innovation">Pioneering Innovation</Link></li>
              <li><Link to="/who-we-are?p=awards-accolades">Awards</Link></li>
              <li><Link to="/who-we-are?p=certification-accreditations">Certification</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-xs-6">
            <p><Link to="/businesses">Businesses</Link></p>
            <ul>
              <li><Link to="/sugar">Sugar</Link></li>
              <li><Link to="/alcohol">Alcohol</Link></li>
              <li><Link to="/power-transmission">Power Transmission</Link></li>
              <li><Link to="/water-solutions">Water Solutions</Link></li>
              <li><Link to="/defence">Defence</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-xs-6">
            <p><Link to="/investors">Investors</Link></p>
            <ul>
              <li><Link to="/investors?p=investor-overview">Overview</Link></li>
              <li><Link to="/investors?p=in-key-highlight">Key Highlights</Link></li>
              <li><Link to="/investors?p=investor-kit">Investors Kit</Link></li>
              <li><Link to="/investors?p=kpi">Key Performance Indicator</Link></li>
              <li><Link to="/financials?q=financial-report">Financials</Link></li>
              <li><Link to="/corporate-governance?q=overview">Corporate Governance</Link></li>
              <li><Link to="/shareholders-information?q=agm-transcript">Shareholders Information</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-xs-6">
            <p><Link to="/community">Community</Link></p>
            <ul>
              <li><Link to="/community?sec=csr">CSR</Link></li>
              <li><Link to="/community?sec=sustainability">Sustainability</Link></li>
              <li><Link to="/community?sec=ehs">EHS</Link></li>
            </ul>
          </div>

          <div className="clearfix" />

          <div className="col-md-8 col-md-offset-4">
            <div className="footer-linkss">
              <ul>
                <li><Link to="/triveni-brands">Brands</Link></li>
                <li><Link to="/media-releases">Media</Link></li>
                <li><Link to="/life-at-triveni">Join Us</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
                <li><Link to="/resource-centre">Resources</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footercp">
        <div className="container">
          <div className="col-md-2">
            <div className="mbnum anotherMbl">
              <p>+91-120-4308000</p>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookies-policy">Cookies Policy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <p>© {new Date().getFullYear()} Triveni Engineering & Industries Ltd.</p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/triveniengineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <img src="/images/linkdin-icon.webp" alt="linkedin" width="33" height="33" loading="lazy" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCJla4fACodZmBS5PPsaBFiw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="youtube"
                >
                  <img src="/images/youtube-icon.webp" alt="youtube" width="33" height="33" loading="lazy" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/triveniengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <img src="/images/fb-icon.webp" alt="facebook" width="33" height="33" loading="lazy" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontFooter