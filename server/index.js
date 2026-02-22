const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/* ===============================
   HOMEPAGE
================================= */
app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Vixa Labs - Secure OTP Authentication</title>
      <style>
        body { font-family: Arial; background:#f4f6f9; padding:40px; color:#333; }
        .box { background:white; padding:30px; border-radius:10px; max-width:800px; margin:auto; box-shadow:0 4px 12px rgba(0,0,0,0.1);}
        h2 { color:#2c3e50; }
        a { text-decoration:none; color:#007bff; }
      </style>
    </head>
    <body>
      <div class="box">
        <h2>Vixa Labs - Secure Authentication Backend</h2>
        <p>This backend service is deployed for OTP-based user authentication and transactional service communication.</p>

        <h3>Service Purpose</h3>
        <ul>
          <li>User login verification via One-Time Password (OTP)</li>
          <li>Account onboarding confirmation</li>
          <li>Service-related transactional alerts</li>
        </ul>

        <p><strong>No marketing, promotional, or bulk messaging is performed.</strong></p>

        <hr/>
        <p>
          <a href="/use-case">Messaging Use Case</a> |
          <a href="/privacy">Privacy Policy</a> |
          <a href="/terms">Terms of Service</a> |
          <a href="/contact">Contact</a>
        </p>

        <p style="font-size:14px;color:#666;">© 2026 Vixa Labs | Punjab, India</p>
      </div>
    </body>
  </html>
  `);
});

/* ===============================
   USE CASE
================================= */
app.get("/use-case", (req, res) => {
  res.send(`
    <h2>Messaging Use Case - Vixa Labs</h2>
    <p><strong>Purpose:</strong> Secure OTP authentication for registered users.</p>
    <p><strong>Message Type:</strong> Transactional only.</p>
    <p><strong>Trigger:</strong> User initiates login or onboarding process.</p>
    <p><strong>Opt-in Method:</strong> Users provide their phone number during account registration or service onboarding.</p>
    <p><strong>Opt-out:</strong> Users may request number removal via support email.</p>
    <p><strong>Message Volume:</strong> Low-volume, user-triggered messages only.</p>
  `);
});

/* ===============================
   PRIVACY POLICY
================================= */
app.get("/privacy", (req, res) => {
  res.send(`
    <h2>Privacy Policy - Vixa Labs</h2>
    <p>Phone numbers are collected solely for authentication and service communication purposes.</p>
    <p>We do not sell, rent, or share user data with third parties.</p>
    <p>All communication is consent-based and transactional.</p>
    <p>Data is retained only as long as necessary for service functionality.</p>
  `);
});

/* ===============================
   TERMS
================================= */
app.get("/terms", (req, res) => {
  res.send(`
    <h2>Terms of Service - Vixa Labs</h2>
    <p>This service provides secure authentication and transactional messaging for registered users.</p>
    <p>Users agree to provide accurate information during onboarding.</p>
    <p>Misuse of the system for spam or unauthorized activity is strictly prohibited.</p>
  `);
});

/* ===============================
   CONTACT
================================= */
app.get("/contact", (req, res) => {
  res.send(`
    <h2>Contact Information</h2>
    <p>Email: support@vixalabs.in</p>
    <p>Location: Punjab, India</p>
    <p>Support Hours: Monday - Friday, 10:00 AM - 6:00 PM IST</p>
  `);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
