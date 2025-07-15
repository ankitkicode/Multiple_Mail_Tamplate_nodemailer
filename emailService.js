const nodemailer = require('nodemailer');

// Setup mail transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or use SMTP host + port
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password', // Use Gmail App Password if 2FA is enabled
  },
});

// Send email function
async function sendEmail({ to, subject, html }) {
  const mailOptions = {
    from: '"CLIF.AI" <your-email@gmail.com>',
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}: ${info.messageId}`);
  } catch (err) {
    console.error(`❌ Failed to send email:`, err);
  }
}

module.exports = sendEmail;
