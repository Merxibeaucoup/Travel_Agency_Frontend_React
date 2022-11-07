import React from "react";

import { useState } from "react";
const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitContact = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">Contact form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          name=""
          placeholder="Your name eg. smith"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="group">
        <input
          type="email"
          className="group__control"
          name=""
          placeholder="Your email eg. smith@email.com"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div className="group">
        <textarea
          name=""
          id=""
          cols="12"
          rows="8"
          className="group__textarea"
          placeholder="Write your message eg. I have troubles "
          defaultValue={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        ></textarea>
      </div>
      <div className="group">
        <input
          type="submit"
          value="send email &rarr;"
          className="btn-dark-sm"
        />
      </div>
    </form>
  );
};

export default ContactForm;
