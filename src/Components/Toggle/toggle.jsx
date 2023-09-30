import "./toggle.css";

import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const HandelClick = () => {
    theme.dispatch({ type: "toggle" })
  }
  return (
    <div className="toggle"
      onClick={HandelClick}>
      <Sun />
      <Moon />
      <div className="toggle-button"
        style={darkMode ? { right: "2px" } : { left: '2px' }}
      ></div>
    </div>
  )
}

export default Toggle