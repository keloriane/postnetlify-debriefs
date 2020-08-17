import React, from "react";
import {Link} from "react-router-dom";

export const Form = () => {

    
   

   
  return (
    <form action="POST" data-netlify="true">
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
        <div className="data-filed" data-netlify-recaptcha="true">

        </div>
      </div>
      <div className="button-call">
        <div className="line"></div>
        <input type="submit">
          <div className="button-overlay"></div>
          <p>CONFIRMER</p>
        </input>
      </div>
    </form>
  );
};
export default Form;