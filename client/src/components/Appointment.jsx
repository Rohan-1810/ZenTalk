import React, { useState } from 'react';
import './styles/Appointment.css';
import Navbar1 from './Navbar1';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to backend)
    setSubmitted(true);
  };

  return (
    <div className="appointment-container">
      <Navbar1/>
      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank You!</h3>
          <p>Your appointment request has been submitted. We will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
        <h2 className='book'>Book an Appointment</h2>
          <div className="form-group">
            {/* <label htmlFor="name">Full Name:</label> */}
            <input
            className='in'
              type="text"
              id="name"
              value={name}
              placeholder='Full Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input
            className='in'
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="phone">Phone:</label> */}
            <input
            className='in'
              type="tel"
              id="phone"
              value={phone}
              placeholder='Phone'
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="date">Preferred Date:</label> */}
            <input
            className='in'
              type="date"
              id="date"
              value={date}
              placeholder='Preferred Date'
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="time">Preferred Time:</label> */}
            <input
            className='in'
              type="time"
              id="time"
              value={time}
              placeholder='Preferred Time'
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="message">Message (Optional):</label> */}
            <textarea
              id="message"
              className='in'
              value={message}
              placeholder='Message(Optional)'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Appointment;
