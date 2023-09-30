import React from "react";
import Card from "./card";
import "./Services.css";
import { motion } from 'framer-motion';

export default function services() {
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Service">
      <div className="s-left devide">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation
        </span>
        <a href=""></a>
        <button className="button s-button">Download</button>
        <div
          className="blur s-blur1"
          style={{ background: "#8BE8E5", filter: "blur(100px)" }}
        />
      </div>

      {/* right side Design */}

      <div className="s-right">
        <motion.div
          initial={{ left: '30rem' }}
          whileInView={{ left: '25rem' }}
          transition={transition}
          style={{ left: "25rem" }}>
          <Card
            icon="https://emojiisland.com/cdn/shop/products/17_large.png?v=1571606116"
            title="Design"
            disc="Figma , Photoshope , Adobe illustrator"
          />
        </motion.div>

        <motion.div
          initial={{ top :"15rem" ,left: '-5rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: "15rem" }}>
          <Card
            icon="https://emojiisland.com/cdn/shop/products/Sunglasses_Emoji_be26cc0a-eef9-49e5-8da2-169bb417cc0b_large.png?v=1571606036"
            title="Developer"
            disc="Html , Css , JavaScript , NodeJs , ReactJS"
          />
        </motion.div>

        <motion.div
          initial={{ top :"22rem" , left: '25rem' }}
          whileInView={{ left: '20rem' }}
          transition={transition}
          style={{ left: "20rem", top: "22rem" }}>
          <Card
            icon="https://emojiisland.com/cdn/shop/products/B01_4480d32e-5116-41c8-9638-3c8fd4c85415_large.png?v=1571606090"
            title="UI/UX"
            disc="WebDesign , AppDesign , labore et dolore magna aliquaS"
          />
        </motion.div>

      </div>
    </div>
  );
}
