import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="main-content">
        {/* Your main content goes here */}
      </div>

      <div className="footer-container">
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="social-icons">
              <p>Powered by</p>
              <ul>
                <li>Mkononi Limited</li>
                <li className="mail">
                  <a href="mailto:info@skizatunes.com">info@skizatunes.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;

