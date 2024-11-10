import React from 'react';
import './Donation_v2.css';

const Donation_v2 = () => {
  return (
    <div className="Donation_v2_main">
      <div className="Donation_v2_container">
        <h1>Donation to Health Umbrella (NGO) will get income tax relaxation under 80 G</h1>
        <p>
          This project involves cherry picking important testimonials shared by common man suffering from different diseases 
          and their unique experience of dealing with different therapies, spread over different platforms. To our knowledge 
          this is the first time we are trying to collect common man’s wisdom and experience systematically according to a 
          particular disease and its treatment through different therapies in one single platform. This is very much the need 
          of the hour.
        </p>
        <div className="Donation_v2_form">
          <h2>Make a Donation</h2>
          <p>
            Every donation no matter how big or small makes a significant difference to our cause. 
            Thank you for doing your part to help.
          </p>
          <form>
            <div className="Donation_v2_form-group">
              <input type="email" placeholder="Email Address*" required />
              <input type="text" placeholder="Phone No.*" required />
            </div>
            <div className="Donation_v2_form-group">
              <input type="text" placeholder="Address*" required />
              <input type="number" placeholder="Donation Amount*" required />
            </div>
            <textarea placeholder="Message/Support"></textarea>
            <div className="Donation_v2_checkbox-container">
              <input type="checkbox" id="emailUpdates" />
              <label htmlFor="emailUpdates">
                I would like to receive occasional updates via email
              </label>
            </div>
            <button type="submit">Submit Donation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation_v2;
