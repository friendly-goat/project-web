const nodemailer = require("nodemailer");
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "bakesalechurch@gmail.com",
      pass: "10323ierdna!",
    },
  });

module.exports = {
    contact: (req,res) => {
        const {name , email , msg } = req.body[0]
        const mail = {
            from: name,
            to: "bakesalechurch@gmail.com",
            subject: "Message from contact page",
            html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${msg}</p>`,
          };
          contactEmail.sendMail(mail, (error) => {
            if (error) {
                res.status(404).send("ERROR");
            } else {
                res.status(200).send("Message Sent");
            }
          });
    }
}