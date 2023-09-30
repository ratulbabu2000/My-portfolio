import "./exprincese.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Exprinces() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="e-report" id="Exprincese">
      <div className="achivement">
        <div className="circle">01</div>
        <span>Year</span>
        <span>Exprinces</span>
      </div>
      <div className="achivement">
        <div className="circle">05</div>
        <span>Demo</span>
        <span>Project</span>
      </div>
      <div className="achivement">
        <div className="circle">00</div>
        <span>Year</span>
        <span>Companies</span>
      </div>
    </div>
  );
}
