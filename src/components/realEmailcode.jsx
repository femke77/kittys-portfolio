// example of working email form with emailjs - Not connected to the other contact form or the app right now

// 𝗺𝗮𝗸𝗲 𝘀𝘂𝗿𝗲 𝘂𝘀𝗲𝗿_𝗻𝗮𝗺𝗲 𝗺𝗮𝘁𝗰𝗵𝗲𝘀 𝗼𝗻 𝘁𝗵𝗲 𝗲𝗺𝗮𝗶𝗹𝗷𝘀 𝘄𝗲𝗯𝘀𝗶𝘁𝗲
// 𝘂𝘀𝗲𝗥𝗲𝗳 𝗮𝗹𝗹𝗼𝘄𝘀 𝘂𝘀 𝘁𝗼 𝗮𝗰𝗰𝗲𝘀𝘀 𝘁𝗵𝗲 .𝗰𝘂𝗿𝗿𝗲𝗻𝘁 𝗼𝗯𝗷𝗲𝗰𝘁. 𝗜𝘁 𝘄𝗼𝗻'𝘁 𝘁𝗿𝗶𝗴𝗴𝗲𝗿 𝗿𝗲𝗿𝗲𝗻𝗱𝗲𝗿
// 𝘂𝘀𝗲𝗦𝘁𝗮𝘁𝗲 𝗮𝗹𝗹𝗼𝘄𝘀 𝘂𝘀 𝘁𝗼 𝗰𝗹𝗲𝗮𝗿 𝘁𝗵𝗲 𝗳𝗼𝗿𝗺 𝗮𝗻𝗱 𝗽𝘂𝘁 𝘁𝗵𝗲 "𝘀𝗲𝗻𝘁" 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗼𝗻 𝘁𝗵𝗲 𝘀𝗰𝗿𝗲𝗲𝗻

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [hiddenState, setHiddenState] = useState(true);

  const { user_name, user_email, subject, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c01fp3m', 'template_0759zjm', form.current, 'HLScYYxkOCDwDU0SN')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setFormState({user_name: "", user_email: "", subject: "", message: ""})
    setHiddenState(false);
  }

    const handleValidation = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
  <form ref={form} onSubmit={sendEmail} className="contact-form">
    <div className="user-info">
      <input type="text" value={user_name} name="user_name" className="name-input" id="contact-name" placeholder='name' onChange={handleChange} onBlur={handleValidation}></input>
      <input type="email" value={user_email} name="user_email" className="email-input" id="contact-email" placeholder='email' onChange={handleChange} onBlur={handleValidation}></input>
    </div>
    <div className="message-content">
      <input name="subject" value={subject} className="subject-input" id="contact-subject" placeholder='subject' onChange={handleChange} onBlur={handleValidation}></input>
      <textarea name="message" value={message} className="message-input" id="contact-message" placeholder='message' onChange={handleChange} onBlur={handleValidation}></textarea>
    </div>
    <div className="send-button">
      <input type="submit" value="send" id="send-email"/>
    </div>
    <div className= { hiddenState ? "hidden-toast" : ""}>
      Email Sent. 
    </div>
  </form>
  );
}

//add the "hidden-toast" css for the sent div
// ⁡⁢⁡⁢⁣⁣.hidden-toast {display:none} ⁡