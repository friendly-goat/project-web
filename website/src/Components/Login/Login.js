import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Login.css'
const Login = () => {
  const navigate = useNavigate()
  const [inputFields, setInputFields] = useState([
    {
      email: "",
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
    if ((inputFields[0].email && inputFields[0].password) === "") {
      alert("required fields");
      notEmpty = false;
    }
    if (notEmpty) {
      //console.log(inputFields);
      axios
        .post("http://localhost:5000/api/login", inputFields, {withCredentials: true})
        .then((res) => {
          console.log(res.data.email)
          document.session = res.data
          console.log(document.session)
          if(res.data.email === 'bakesalechurch@gmail.com'){
            navigate('/admin')
          }else{
            navigate('/shop')
          }
          //alert(res.data);
        })
        .catch(() => alert("Password and email do not match"));
    }
  };

  return (
    <div id="login-container">
      <div id="form-container">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <fieldset>
              <legend>Login</legend>
              <label htmlFor="email">
                <b>email </b>
              </label>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={input.email}
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
              </fieldset>
            </div>
          );
        })}
      </form>
      <button className="submit-btn" onClick={login}>Submit</button>
      <br />
      <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
