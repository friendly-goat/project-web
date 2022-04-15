import { Link, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const Login = () => {
  const [inputFields, setInputFields] = useState([
    {
      username: "",
      password: "",
    },
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const login = (e) => {
    e.preventDefault();
    let notEmpty = true;
    if ((inputFields[0].username && inputFields[0].password) === "") {
      alert("required fields");
      notEmpty = false;
    }
    if (notEmpty) {
      //console.log(inputFields);
      axios
        .post("http://localhost:5000/api/login", inputFields)
        .then((res) => {
          alert(res.data);
          axios
            .get("http://localhost:5000", { withCredentials: true })
            .then((Cres) => {
              console.log("cookie made");
            });
        })
        .catch(() => alert("Password and username do not match"));
    }
  };

  return (
    <div id="login-container">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <label htmlFor="username">
                <b>Username </b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={input.username}
                onChange={(event) => handleFormChange(index, event)}
                required
              ></input>
              <br />
              <br />
              <label htmlFor="password">
                <b>Password </b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={input.password}
                onChange={(event) => handleFormChange(index, event)}
                required
              ></input>
              <br />
              <br />
            </div>
          );
        })}
      </form>
      <button onClick={login}>Submit</button>
      <br />
      <br />
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default Login;
