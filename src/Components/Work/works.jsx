import { motion } from "framer-motion";
import "./work.css";
import React from "react";


export default function Work() {
  return (
    <div className="work" id="Work">
      <div className="s-left W-left">
        <span>Work </span>
        <span>Brands</span>
        <span>
          Tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation
        </span>
        <button className="button s-button">Hire me</button>
        <div
          className="blur s-blur1"
          style={{ background: "#8BE8E5", filter: "blur(100px)" }}
        />
      </div>

      {/* right side Design */}

      <div className="w-right">
        <div className="circleOne">
          <motion.div 
          initial = {{rotate : 45}}
          whileInView={{rotate : 0}}
          viewport={{margin : '-20px'}}
          transition={{duration : 4.5 , type : 'spring'}}
          
          className="w-mainCurcle">
            <div className="w-c-Circle">
              <img
                src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-png-20.png"
                alt=""
              />
            </div>
            <div className="w-c-Circle">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-upwork-3629131-3030271.png?f=webp"
                alt=""
              />
            </div>
            <div className="w-c-Circle">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png?f=webp"
                alt=""
              />
            </div>
            <div className="w-c-Circle">
              <img
                src="https://miro.medium.com/v2/resize:fit:200/1*vzcZ7ciwZu9fHML4sP0EnA.png"
                alt=""
              />
            </div>
            <div className="w-c-Circle">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </div>
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle orangeCircle"></div>
        </div>
      </div>
    </div>
  );
}
