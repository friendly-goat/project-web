import { Link , withRouter , Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import Login from '../Login/Login';
import './SignUp.css'
const SignUp = () => {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = useState([
        { 
            firstname: '',
            lastname: '',
            phoneNumber: '',
            email: '',
            password: '',
            cpassword: ''
    }
    ])
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        let match = true
        let notEmpty = true
        let passCheck = true
        
        if(inputFields[0].password !== inputFields[0].cpassword){
            alert('passwords do not match')
            match = false
        }
        if((inputFields[0].firstname && inputFields[0].lastname && inputFields[0].phoneNumber && inputFields[0].email && inputFields[0].password && inputFields[0].cpassword) === ""){
            alert('required fields')
            notEmpty = false
        }
        if(inputFields[0].password.length < 6){
            alert('password must be 6 characters')
            passCheck = false
        }
        if(match && notEmpty && passCheck){
            axios
            .post('http://localhost:5000/api/newuser', inputFields)
            .then((res) => {
                navigate('/login')
                console.log(res.data)
            })
            .catch((err) => alert(err.response.data))
        }
    }
    return ( 
        <div id="signup-container">
            <div id="form-container">
            <form label="login">
                {inputFields.map((input, index) => {
                    return(
                        <div key={index}>
                        <fieldset>
                            <legend>Sign Up</legend>
                            <label htmlFor="fname"><b>First name  </b></label>
                            <input type="text" placeholder="Enter Firstname" name="firstname" value={input.firstname} onChange={event => handleFormChange(index, event)} required></input>
                            <br/>
                            <br/>
                            <label htmlFor="lname"><b>Last name  </b></label>
                            <input type="text" placeholder="Enter Lastname" name="lastname" value={input.lastname} onChange={event => handleFormChange(index, event)} required></input>
                            <br/>
                            <br/>
                            <label htmlFor="phone"><b>Phone number  </b></label>
                            <input type="text" placeholder="Enter Phone number" name="phoneNumber" value={input.phoneNumber} onChange={event => handleFormChange(index, event)} required></input>
                            <br/>
                            <br/>
                            <label htmlFor="email"><b>Email  </b></label>
                            <input type="text" placeholder="Enter Email" name="email" value={input.email} onChange={event => handleFormChange(index, event)} required></input>
                            <br/>
                            <br/>
                            <label htmlFor="psw"><b>Password  </b></label>
                            <input type="password" placeholder="Enter Password" name="password" value={input.password} onChange={event => handleFormChange(index, event)} required></input>
                            <br/>
                            <br/>
                            <label htmlFor="cpsw"><b>Confirm password  </b></label>
                            <input type="password" placeholder="Enter Password" name="cpassword" value={input.cpassword} onChange={event => handleFormChange(index, event)} required></input>
                            <br/>
                            <br/>
                        </fieldset>
                    </div>
                )
                })}
                <button className="submit-btn" onClick={submit}>Submit</button>
            </form>
            <br/>
            <Link to="/login">Log in</Link>
            </div>
        </div>
     );
}
 
export default SignUp;