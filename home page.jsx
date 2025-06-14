import React from 'react';

const Home = () => {
  return (
    <div className="home-section">
      <div className="map-container">
        {/* Replace with your embedded map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="350"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>GET IN TOUCH</h2>
                  <p>Have some questions?<br />Feel free to ask them anytime</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button className="send-button">Send Message →</button>
      </div>
    </div>
  );
};

export default Home;