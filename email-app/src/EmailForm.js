import React, { useState } from 'react';
import axios from 'axios'

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    fromEmail: '',
    toEmail: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/emails', emailData);
      console.log('Response:', response);
      // Handle the response.data here
    } catch (error) {
        console.log('something is fishy....')
      console.log('Error:', error);
      // Check error.response for specific error details
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            From Email:
            <input
              type="text"
              name="fromEmail"
              value={emailData.fromEmail}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </label>
        </div>
        <div>
          <label>
            To Email:
            <input
              type="text"
              name="toEmail"
              value={emailData.toEmail}
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </label>
        </div>
        <div>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Body:
            <textarea
              name="body"
              value={emailData.body}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
