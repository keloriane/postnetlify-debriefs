import React,{useState} from "react";

import emailjs from 'emailjs-com'
export const Form = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <form action="POST" onSubmit={sendEmail}>
      <div className="name-lastname-form">
        <div className="name form-input">
          <label>Nom</label>
          <input
            type="text"
            className="name-input"
         
            name="name"
           
          />
        </div>
        <div className="last-name form-input">
          <label>Prénom</label>
          <input type="text" className="last-name-input" />
        </div>
      </div>
      <div className="mail-form ">
        <div className="mail-input form-input">
          <label htmlFor="">e-mail</label>
          <input type="mail" />
        </div>
      </div>
      <div className="text-form  ">
        <div className="text-input form-input">
          <label> Votre projet / vos Questions </label>
          <textarea className="long-text" type="text" />
        </div>
    
      </div>
      <div className="button-call">
        <div className="line"></div>
        <button type="submit">
          <div className="button-overlay"></div>
          <input type="submit" value="confirmer"/>
        </button>
      </div>
    </form>
  );
};
export default Form;