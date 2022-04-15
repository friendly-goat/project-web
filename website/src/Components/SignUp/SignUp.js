import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const SignUp = () => {
    const [inputFields, setInputFields] = useState([
        { 
            firstname: '',
            lastname: '',
            username: '',
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
        if(inputFields[0].password !== inputFields[0].cpassword){
            alert('passwords do not match')
            match = false
        }
        if((inputFields[0].firstname && inputFields[0].lastname && inputFields[0].username && inputFields[0].phoneNumber && inputFields[0].email && inputFields[0].password && inputFields[0].cpassword) === ""){
            alert('required fields')
            notEmpty = false
        }
        if(match && notEmpty){
            axios
            .post('http://localhost:5000/api/newuser', inputFields)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        }
        
    }
    return ( 
        <div id="signup-container">
            <form>
                {inputFields.map((input, index) => {
                return(
                    <div key={index}>
                        <label htmlFor="fname"><b>First name  </b></label>
                        <input type="text" placeholder="Enter Firstname" name="firstname" value={input.firstname} onChange={event => handleFormChange(index, event)} required></input>
                        <br/>
                        <br/>
                        <label htmlFor="lname"><b>Last name  </b></label>
                        <input type="text" placeholder="Enter Lastname" name="lastname" value={input.lastname} onChange={event => handleFormChange(index, event)} required></input>
                        <br/>
                        <br/>
                        <label htmlFor="uname"><b>Username  </b></label>
                        <input type="text" placeholder="Enter Username" name="username" value={input.username} onChange={event => handleFormChange(index, event)} required></input>
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
                    </div>
                )
                })}
                <button onClick={submit}>Submit</button>
            </form>
            <br/>
            <Link to="/login">Log in</Link>
        </div>
     );
}
 
export default SignUp;