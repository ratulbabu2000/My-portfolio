import React from 'react'
import "./main.css";
import FlotingDiv from "./floutingDiv";
import Blue from "../../blue.png";
import Orange from "../../orange.png";
import Sohel from "../../sohel.png";
import Sunglass from "../../sunglass.png";
import { motion } from 'framer-motion';
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Main() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color : darkMode ? "white" : ""}}>Hy! I Am</span>
          <span>SOHEL RANA</span>
          <span>
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip Ut
            enim ad minim veniam .
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icon">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt=""
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />
        </div>
      </div>

      <div className="i-right">
          <img src={Blue} alt="" />
          <img src={Orange} alt="" />
          <img src={Sohel} alt="" />
          
        <motion.img
          initial={{ left: '-15%' }}
          whileInView={{ left: '-4%' }}
          transition={transition}
          style={{ right: "", top: "-6%" }} src={Sunglass} />

        <motion.div
          initial={{ top: '-3%', left: '80%' }}
          whileInView={{ left: '75%' }}
          transition={transition}

          style={{ top: "-3%", left: "75%" }}>
          <FlotingDiv
            image="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
            text1="Web"
            text2="Devloper"
          />
        </motion.div>

        <motion.div
          initial={{ left: '-15%' }}
          whileInView={{ left: '-4%' }}
          transition={transition}

          style={{ top: "65%", left: "3%" }}>
          <FlotingDiv
            image="https://image.similarpng.com/very-thumbnail/2020/08/Like-icon-on-transparent-PNG.png"
            text1="UI/UX"
            text2="Designer"
          />
        </motion.div>

        {/* blur Div */}

        <div
          className="blur"
          style={{
            background: "#880ED4",
            filter: "blur(150px)",
            top: "-10%",
            left: "55%"
          }}
        />
        <div
          className="blur"
          style={{
            background: "#8BE8E5",
            top: "55%",
            left: "-20%",
            filter: "blur(100px)"
          }}
        />
      </div>
    </div>
  );
}
