import './ContactEmail.css'
const ContactEmail = () => {
    return ( 
        <div id="contact-container">
            <label htmlFor="name"><b>Name  </b></label>
            <input type="text" placeholder="Enter Full Name" name="name" required></input>
            <br />
            <br />
            <label htmlFor="email"><b>Email  </b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>
            <br />
            <br />
            <label htmlFor="msg"><b>Message  </b></label>
            <textarea id='msg' type="text" placeholder="Include order number" name="msg" required></textarea>
            <br />
            <br />
            <button type="submit">Send</button>
        </div>
     );
}
 
export default ContactEmail;