const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Email configurations
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: email,
        to: 'alina1818sport@gmail.com', // Replace with your email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.sendFile(path.join(__dirname, 'thank_you.html'));
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
