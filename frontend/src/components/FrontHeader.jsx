import { Link } from "react-router-dom";
import React, { useState } from 'react';

const FrontHeader = () => {
  const [activeNav, setActiveNav] = useState(null);

  const handleMenuClick = (e) => {
    e.preventDefault();
    const navId = e.currentTarget.getAttribute('data');
    setActiveNav(navId);
  };

  const closeMenu = () => setActiveNav(null);
  return (
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="navbar-header">
            <div className="logo">
              <Link to ="./">
                <img
                  src="/images/TEIL_Logo.svg"
                  loading="lazy"
                  width="195"
                  height="44"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="rimobilePart">
              <div className="ham-icon">
                <img
                  src="/images/menu.webp"
                  loading="lazy"
                  width="24"
                  height="20"
                  alt="Menu"
                />
              </div>
            </div>
          </div>

          <div className="menu">
            <ul className="dropdown">
              <li>
                <Link to ="#" onClick={handleMenuClick} className="new-navopen" data="1">
                  Who we are
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleMenuClick} className="new-navopen" data="2">
                  Businesses
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleMenuClick} className="new-navopen" data="4">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleMenuClick} className="new-navopen" data="3">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/community" className="new-navopen">Community</Link>
              </li>
              <li>
                <Link to="/media-releases" className="new-navopen">Media</Link>
              </li>
              <li>
                <Link to="/life-at-triveni" className="new-navopen">Join us</Link>
              </li>
              <li>
                <Link to="/contact-us" className="new-navopen">Contact</Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/triveniengineering/"
                  target="_blank"
                  rel="noreferrer"
                  className="new-navopen"
                >
                  <img
                    src="/images/linkdin-icon.svg"
                    loading="lazy"
                    alt=""
                    width="55"
                    height="14"
                    className="img-responsive"
                  />
                </Link>
              </li>
            </ul>
          </div>

            {/* WHO WE ARE - Section 1 */}
            <div className="newnavv nv1" style={{ display: activeNav === "1" ? 'block' : 'none' }}>
              <div className="container">
                <div className="cross-btn" onClick={closeMenu}>
                  <img src="/images/menu-cross.webp" loading="lazy" width="28" height="27" alt="icon" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="left-new-nav">
                        <h2>WHO WE ARE</h2>
                        <p>An Integrated, Innovation-led conglomerate. Driven by product quality, engineering efficiency, technology, and strong relationships.</p>
                        <Link to="/who-we-are">Go to this page &gt;</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="left-new-nav underwho">
                        <Link to="/who-we-are?sec=agriculture-business" className="more-pages">Sugar Business</Link><br />
                        <Link to="/who-we-are?sec=engineering-business" className="more-pages">Engineering Business</Link><br />
                        <Link to="/who-we-are?sec=mission" className="more-pages">Mission, Vision & Values</Link><br />
                        <Link to="/who-we-are?sec=sustaining-excellence" className="more-pages">Sustaining Excellence</Link><br />
                        <Link to="/who-we-are?sec=our-heritagee" className="more-pages">Our Heritage</Link><br />
                        <Link to="/who-we-are?sec=leadership-team" className="more-pages">Leadership Team</Link><br />
                        <Link to="/who-we-are?sec=innovation" className="more-pages">Pioneering Innovation</Link><br />
                        <Link to="/who-we-are?sec=awards-accolades" className="more-pages">Awards & Accolades</Link><br />
                        <Link to="/who-we-are?sec=certification-accreditations" className="more-pages">Certification & Accreditations</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-new-nav">
                    <Link to="/who-we-are?sec=ovrview-business">
                      <img src="/images/menu-who-we-are.webp" loading="lazy" className="img-responsive" alt="Who we are" />
                      <p className="ovrwsubgd">OVERVIEW</p>
                      <p>A diversified and differentiated corporate, Triveni Engineering & Industries Limited is a fast-growing group delivering profitable growth and sustained value delivery.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BUSINESSES */}
            <div className="newnavv nv2" style={{ display: activeNav === "2" ? 'block' : 'none' }}>
              <div className="container">
                <div className="cross-btn" onClick={closeMenu}>
                  <img src="/images/menu-cross.webp" loading="lazy" width="28" height="27" alt="icon" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="left-new-nav">
                        <p className="hdngmenustyle">BUSINESSES</p>
                        <p>Built to Inspire. Driving sustainable growth through innovation, quality and customer-centricity</p>
                        <Link to="/businesses">Go to this page &gt;</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="left-new-nav underbusiness">
                        <Link to="/sugar" className="more-pages">Sugar</Link><br />
                        <Link to="/alcohol" className="more-pages">Alcohol</Link><br />
                        <Link to="/power-transmission" className="more-pages">Power Transmission</Link><br />
                        <Link to="/water-solutions" className="more-pages">Water Solutions</Link><br />
                        <Link to="/defence" className="more-pages">Defence</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-new-nav">
                    <Link to="/businesses?sec=business">
                      <img src="/images/menu-business.webp" loading="lazy" className="img-responsive" alt="Business" />
                      <p className="ovrwsubgd">OVERVIEW</p>
                      <p>A diversified business conglomerate, Triveni Engineering and Industries Limited has been able to remain relevant to changing times and needs.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BRANDS */}
            <div className="newnavv nv3" style={{ display: activeNav === "3" ? 'block' : 'none' }}>
              <div className="container">
                <div className="cross-btn" onClick={closeMenu}>
                  <img src="/images/menu-cross.webp" loading="lazy" width="28" height="27" alt="icon" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="left-new-nav">
                        <p className="hdngmenustyle">BRANDS</p>
                        <p>Triveni Brands is the FMCG Division of the Triveni Group, which currently includes Shagun Sugar, Triveni Sugar, and the Private Label Business.</p>
                        <Link to="/triveni-brands">Go to this page &gt;</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="left-new-nav underbusiness">
                        <Link to="/triveni-brands#sugar" className="new-navopen">Triveni Sugar</Link>
                        <Link to="/triveni-brands#shagunsugar" className="new-navopen">Shagun Sugar</Link>
                        <Link to="/triveni-brands#privatelabel" className="new-navopen">Private Label Manufacturing</Link>
                        <Link to="/triveni-brands#continental" className="new-navopen">Triveni Continental Kings</Link>
                        <Link to="/triveni-brands#crafters" className="new-navopen">The Crafters Stamp</Link>
                        <Link to="/triveni-brands#matsya" className="new-navopen">Matsya</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-new-nav">
                    <Link to="/triveni-brands#Business">
                      <img src="/images/menu-business-brands.webp" loading="lazy" className="img-responsive" alt="" />
                      <p className="ovrwsubgd">OVERVIEW</p>
                      <p>The mission of this division is to create innovative and high-quality products that delight customers. Our products have a strong omnichannel strategy, and we are committed to growing in a sustainable manner while keeping the customer at the very center.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* INVESTORS */}
            <div className="newnavv nv4" style={{ display: activeNav === "4" ? 'block' : 'none' }}>
              <div className="container">
                <div className="cross-btn" onClick={closeMenu}>
                  <img src="/images/menu-cross.webp" loading="lazy" width="28" height="27" alt="icon" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="left-new-nav">
                        <p className="hdngmenustyle">INVESTORS</p>
                        <p>Inspired performance Driven by industry-leading results, translating into long-term value delivery for all stakeholders.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="left-new-nav underinvestor">
                        <Link to="/investors?p=investor-overview" className="more-pages">Overview</Link><br />
                        <Link to="/investors?p=investor-kit" className="more-pages">Investor Kit</Link><br />
                        <Link to="/financials?q=financial-report" className="more-pages">Financials</Link><br />
                        <Link to="/financials?q=annual-report" className="more-pages">Annual Reports</Link><br />
                        <Link to="/corporate-governance?q=overview" className="more-pages">Corporate Governance</Link><br />
                        <Link to="/shareholders-information?q=shareHolding-pattern" className="more-pages">Shareholding Pattern</Link><br />
                        <Link to="/shareholders-information?q=agm-transcript" className="more-pages">Shareholders Information</Link><br />
                        <Link to="/shareholders-information?q=stock-exchange-filings" className="more-pages">Stock Exchange Filings</Link><br />
                        <Link to="/shareholders-information?q=clause-46-of-lodr" className="more-pages">Disclosures under Regulation 46 of the LODR</Link><br />
                        <Link to="/shareholders-information?q=agm-transcript" className="more-pages">Annual General Meeting Transcript</Link><br />
                        <Link to="/shareholders-information?q=survey-form" className="more-pages">Shareholder Survey</Link><br />
                        <Link to="/investors?p=contactus" className="more-pages">Investor Contact</Link><br />
                        <Link to="/shareholder-contact" className="more-pages">Shareholders Contact</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-new-nav">
                    <Link to="/investors?sec=investor-overview">
                      <img src="/images/menu-investor.webp" loading="lazy" className="img-responsive" alt="Investor" />
                      <p className="ovrwsubgd">OVERVIEW</p>
                      <p>Our strategy is designed to balance business profitability with inclusive growth across the stakeholder matrix.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default FrontHeader;