import { useState } from "react";
import "./contect.css";

export default function Contect() {
  return (
    <div className="contect">
      <div className="c-left s-left">
        <span>Get in tuch</span>
        <span>Contect me</span>
      </div>

      {/* right Side */}

      <div className="c-right">
        <form>
          <input type="text" className="user" placeholder="Name" />
          <input type="text" className="user" placeholder="Email" />
          <textarea type="text" className="user" placeholder="Massage" />
          <input type="submit" className="button" value="send" />
        </form>
      </div>
    </div>
  );
}
