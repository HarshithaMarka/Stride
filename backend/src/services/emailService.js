const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
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
            from: process.env.EMAIL_USER, 
            to: email, 
            subject: 'AgileFlow: Your One-Time Verification Code',
            
            text: ` Your verification code is ${otp}. 
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