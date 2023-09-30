import "./contect.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contect() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ijnf4hm', 'template_cd5yaaa', form.current, 'CndIYG6aD31oAjGbl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contect" id="Contect">
      <div className="c-left s-left">
        <span>Get in tuch</span>
        <span>Contect me</span>
      </div>

      {/* right Side */}

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = "from_name" className="user" placeholder="Name" />
          <input type="email" name = "from_email" className="user" placeholder="Email" />
          <textarea name = "message"  className="user" placeholder="Massage" />
          <input type="submit" className="button" value="send" />
        </form>
      </div>
    </div>
  );
}
