import "./ContactEmail.css";
import React from "react";
import axios from "axios";
const ContactEmail = () => {
  const [inputFields, setInputFields] = React.useState([
    {
      name: "",
      email: "",
      msg: "",
    },
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const send = (e) => {
    e.preventDefault();
    let notEmpty = true;
    if (
      (inputFields[0].name && inputFields[0].email && inputFields[0].msg) === ""
    ) {
      alert("required fields");
      notEmpty = false;
    }
    if (notEmpty) {
      axios
        .post("http://localhost:5000/api/contact", inputFields)
        .then((res) => {
          alert(res.data);
        })
    }
  };
  return (
    <div id="contact-container">
        <div id="form-container">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <label htmlFor="name">
                <b>Name </b>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
                required
              ></input>
              <br />
              <br />
              <label htmlFor="email">
                <b>Email </b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                value={input.email}
                onChange={(event) => handleFormChange(index, event)}
                required
              ></input>
              <br />
              <br />
              <label htmlFor="msg">
                <b>Message </b>
              </label>
              <textarea
                id="msg"
                type="text"
                placeholder="Include order number"
                name="msg"
                value={input.msg}
                onChange={(event) => handleFormChange(index, event)}
                required
              ></textarea>
              <br />
              <br />
            </div>
          );
        })}
      </form>
      <button onClick={send}>Send</button>
      </div>
    </div>
  );
};

export default ContactEmail;
