import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_3t6391q',
      'template_meax8pn',
      form.current,
      '9S8Wp5Zvs_16-RMIE'
    )
      .then(() => {
        setStatus('sent');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  if (status === 'sent') {
    return (
      <div className='contactForm'>
        <div className='formSuccess'>
          <span className='formSuccessLabel'>Message sent</span>
          <p className='formSuccessText'>
            Thanks for reaching out — I'll get back to you soon.
          </p>
          <button
            className='formSuccessReset'
            onClick={() => setStatus('idle')}
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='contactForm'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        {status === 'error' && (
          <p className='formError'>Something went wrong — please try again.</p>
        )}
        <input
          type="submit"
          value={status === 'sending' ? 'Sending...' : 'Send'}
          disabled={status === 'sending'}
        />
      </form>
    </div>
  );
};

export default ContactUs;
