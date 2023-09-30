import "./card.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { color } from "framer-motion";

export default function Card({ icon, title, disc }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="c-card"
    style={{background : darkMode ? 'black' : ''}}>
      <img src={icon} alt="" />
      <span style={{color : darkMode ? 'white' : ''}}>{title}</span>
      <span>{disc}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
}
