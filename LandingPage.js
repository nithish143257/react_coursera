import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // يمكنك إضافة CSS هنا
//import background from '../assets/background.jpg';  
function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundImage: "C:\src\assets\ggg.jpg" }}>
      <div className="content">
        <h1>Paradise Nursery</h1>
        <p>Welcome to Paradise Nursery, your go-to place for beautiful and healthy house plants.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
 