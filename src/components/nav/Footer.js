import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Thaiios</h4>
            <h6 className="list-unstyled">
              <li>416-420-4444</li>
              <li>1800 Yonge St</li>
              <li>North York, Ontario</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Thaiios Payment Products</h4>
            <ui className="list-unstyled">
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Gift Cards</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Get to Know Us</h4>
            <ui className="list-unstyled">
              <li>Careers</li>
              <li>Online Shopping FAQ</li>
              <li>Service & Repair Centre</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="text-center col-sm">&copy;{new Date().getFullYear()} Thaiios | All rights reserved | Terms Of Service | Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
