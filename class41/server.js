const nodemailer = require("nodemailer");

// create the transporter object 

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "abc@gmail.com",
        pass: "bnsf jvug dwao zgos"
    }
});

// const recipients = [
//     "akhila@gmail.com",
//     "sivakumar@gmail.com",
//     "yokesh@gmail.com"
// ]

// set up the email data
const mailOptions = {
    from: "customercare@redbus.com",
    // to: recipients,
    to: "abc@gmail.com",
    subject: "hello this is venkat from guvi hcl",
    html: "<b>Hello how are you today hope everything is fine"
}

// send the mail
transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.log("unable to send the mail")
    }
    console.log("message is sent successfully", info.messageId)
})