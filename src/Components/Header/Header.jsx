import "./header.css";
import React from "react";
import Toggle from '../Toggle/toggle'
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">TingTong</div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
          <Link spy = {true} to = 'Navbar' smooth = {true} activeClass="activeClass"><li>Home</li></Link>
          <Link spy = {true} to = 'Service' smooth = {true} ><li>Service</li></Link>
          <Link spy = {true} to = 'Exprincese' smooth = {true} ><li>Exprincese</li></Link>
          <Link spy = {true} to = 'PortFolio' smooth = {true} ><li>PortFolio</li></Link>
          
          </ul>
        </div>
        <button className="button"><Link spy = {true} to = 'Contect' smooth = {true} >Contect</Link></button>
      </div>
    </div>
  );
}
