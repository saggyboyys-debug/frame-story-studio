import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const { name, email, projectType, message } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `New Project Inquiry — ${projectType}`,
    html: `
      <div style="background: #0a0a0a; color: #f0f0f0; padding: 40px; font-family: sans-serif;">
        <h2 style="color: #D4A017; border-bottom: 1px solid #2A2A2A; padding-bottom: 10px;">
          New Inquiry — FriVaar Productions
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <div style="margin-top: 20px; padding: 20px; background: #111; border-left: 4px solid #D4A017;">
          <p>${message}</p>
        </div>
        <p style="margin-top: 30px; font-size: 12px; color: #888;">
          Sent from frivaarproductions.com contact form
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
}
