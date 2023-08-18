import "./header.css";
import React from "react";

export default function Header() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">TingTong</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Service</li>
            <li>Exprincese</li>
            <li>PortFolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">Contect</button>
      </div>
    </div>
  );
}
