import React,{useState} from "react";

import * as emailjs from "emailjs-com"


export const Form = () => {
  
  const [state , setState] = useState({
    name:"",
    lastName:"",
    email:"",
    message:'',
    disabled: false,
    emailSent: null
})


const handleForm = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  setState({
      [name]: value
  })
}
const handleSubmit = (e) =>{
e.preventDefault();
emailjs
  .sendForm(
    "gmail",
    "template_ILgvG3Sj",
    "contact_form",
    "user_qk3QUxoth7hgNdkNQ3Hsu"
  )
  .then()
}
  return (
    <form action="POST" onSubmit={handleSubmit} id="contact_form">
      <div className="name-lastname-form">
        <div className="name form-input">
          <label>Nom</label>
          <input
            type="text"
            className="name-input"
            value={state.name}
            name="name"
            onChange={handleForm}

           
          />
        </div>
        <div className="last-name form-input">
          <label>Prénom</label>
          <input type="text" className="last-name-input" name="latname" value={state.lastName} onChange={handleForm}/>
        </div>
      </div>
      <div className="mail-form ">
        <div className="mail-input form-input">
          <label htmlFor="">e-mail</label>
          <input type="mail" name="email" value={state.email} onChange={handleForm} />
        </div>
      </div>
      <div className="text-form  ">
        <div className="text-input form-input">
          <label> Votre projet / vos Questions </label>
          <textarea className="long-text" type="text" value={state.message} name="message" onChange={handleForm}/>
        </div>
    
      </div>
      <div className="button-call">
        <div className="line"></div>
        <button type="submit" disabled={state.disabled}>
          <div className="button-overlay"></div>
          <input type="submit" value="confirmer"/>
        </button>
        {state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
        {state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
      </div>
    </form>
  );
};
export default Form;