import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className="home-title">V-Pay</h2>
        <p className="home-welcome">Experience seamless and secure payments</p>
      </header>
      <main className="home-main">
        <section className="home-about">
          <h3>About Us</h3>
          <p>
            V-Pay is a cutting-edge payment solution designed to make your
            transactions seamless and secure. Join us and experience the
            future of digital payments.
          </p>
        </section>
        <section className="home-features">
          <h3>Features</h3>
          <ul>
            <li>Easy and quick transactions</li>
            <li>Secure payment processing</li>
            <li>User-friendly interface</li>
            <li>24/7 customer support</li>
          </ul>
        </section>
        <section className="home-call-to-action">
          <button className="cta-button">Get Started</button>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 V-Pay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
