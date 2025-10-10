const nodemailer = require('nodemailer');
// 1. Configure the Transporter (Connects to the email server)
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your service (e.g., SendGrid, Outlook, etc.)
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

/**
 * Sends a verification email containing the generated OTP code.
 */
const sendVerificationEmail = async (email, otp) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: email, // Recipient address
            subject: 'AgileFlow: Your One-Time Verification Code',
            // Using a simple text message for the OTP
            text: `Thank you for registering with AgileFlow! Your verification code is ${otp}. 
                   This code is valid for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Verification email successfully queued for ${email}`);

    } catch (error) {
        console.error('FATAL: Error sending verification email:', error);
        // Re-throw the error so the calling controller can handle the failure
        throw new Error('Failed to send verification email due to server error.');
    }
};

module.exports = sendVerificationEmail;