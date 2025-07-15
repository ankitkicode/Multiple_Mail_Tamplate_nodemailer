const templates = {
  welcomeEmail: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f0f4f8; padding: 30px; margin: 0;">
  <div style="max-width: 600px; width: 100%; margin: auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="display: flex; align-items: center; margin-bottom: 32px;">
      <img src="https://app.clif.ai/favicon.ico" alt="CLIF Logo" style="width: 40px; height: 40px; margin-right: 12px;" />
      <span style="font-size: 28px; font-weight: 600;">
        <span style="color: #555;">CLIF</span><span style="color: #5b2be0;">.AI</span>
      </span>
    </div>
    <h2 style="color: #5b2be0; font-size: 24px; margin-bottom: 16px;">Welcome to CLIF, {{username}}!</h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
      We're excited to have you with us! CLIF.AI is here to support your career journey with smart tools, personalized insights, and expert guidance — all in one place.
    </p>
    <p style="font-size: 16px; color: #333; margin-top: 24px;">
      To get started, please use the following code to verify your email:
    </p>
    <p style="font-size: 24px; font-weight: bold; color: #5b2be0; margin: 16px 0;">
      {{otpCode}}
    </p>
    <p style="font-size: 16px; color: #333; margin-top: 32px;">
      Welcome aboard — we’re glad you're here!
    </p>
    <p style="font-size: 16px; color: #333; margin-top: 20px;">
      Best regards,<br />
      <strong>The CLIF.AI Team</strong>
    </p>
  </div>
</body>
</html>
`,

  subscriptionConfirmation: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Subscription Confirmation</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f0f4f8; padding: 30px; margin: 0;">
  <div style="max-width: 600px; width: 100%; margin: auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="display: flex; align-items: center; margin-bottom: 32px;">
      <img src="https://app.clif.ai/favicon.ico" alt="CLIF Logo" style="width: 40px; height: 40px; margin-right: 12px;" />
      <span style="font-size: 28px; font-weight: 600;">
        <span style="color: #555;">CLIF</span><span style="color: #5b2be0;">.AI</span>
      </span>
    </div>
    <h2 style="color: #5b2be0; font-size: 22px; margin-bottom: 16px;">Subscription Confirmed, {{username}}!</h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
      Thank you for subscribing to <strong>CLIF.AI</strong>. Your premium access is now active and ready to support your learning journey.
    </p>
    <table style="width: 100%; max-width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>Amount</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">₹{{amount}}</td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>Start Date</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">{{startDate}}</td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>End Date</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">{{endDate}}</td>
      </tr>
    </table>
    <a href="{{receiptLink}}" style="
      background-color: #5b2be0;
      color: #ffffff;
      padding: 12px 24px;
      display: inline-block;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
    ">View Receipt</a>
    <p style="font-size: 15px; color: #555; margin-top: 40px;">
      If you have any questions or need assistance, feel free to reach out to us.<br />
      We're excited to be part of your journey!<br />
      <strong>— The CLIF.AI Team</strong>
    </p>
  </div>
</body>
</html>
`,

  otpEmail: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OTP Verification</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f0f4f8; padding: 30px; margin: 0;">
  <div style="max-width: 600px; width: 100%; margin: auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="display: flex; align-items: center; margin-bottom: 32px;">
      <img src="https://app.clif.ai/favicon.ico" alt="CLIF Logo" style="width: 40px; height: 40px; margin-right: 12px;" />
      <span style="font-size: 28px; font-weight: 600;">
        <span style="color: #555;">CLIF</span><span style="color: #5b2be0;">.AI</span>
      </span>
    </div>
    <h2 style="color: #5b2be0; font-size: 22px; margin-bottom: 16px;">Verify Your Email</h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 12px;">Hi {{username}},</p>
    <p style="font-size: 16px; color: #333; margin-bottom: 24px;">
      Use the OTP below to verify your email address and complete your signup:
    </p>
    <p style="font-size: 26px; font-weight: bold; color: #5b2be0; margin: 16px 0;">{{otpCode}}</p>
    <p style="font-size: 15px; color: #555; margin-top: 40px;">
      If you didn’t request this, you can safely ignore it.<br />
      Thanks,<br />
      <strong>The CLIF.AI Team</strong>
    </p>
  </div>
</body>
</html>
`,

  monthlyTracker: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Monthly Progress Report</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f0f4f8; padding: 30px; margin: 0;">
  <div style="max-width: 600px; width: 100%; margin: auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="display: flex; align-items: center; margin-bottom: 32px;">
      <img src="https://app.clif.ai/favicon.ico" alt="CLIF Logo" style="width: 40px; height: 40px; margin-right: 12px;" />
      <span style="font-size: 28px; font-weight: 600;">
        <span style="color: #555;">CLIF</span><span style="color: #5b2be0;">.AI</span>
      </span>
    </div>
    <h2 style="color: #5b2be0; font-size: 22px; margin-bottom: 16px;">Your Monthly Progress Snapshot</h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 24px;">
      Here's how you've progressed this month. Keep up the great work and continue building your future with confidence.
    </p>
    <table style="width: 100%; max-width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>Resume Score</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">{{resumeScore}}</td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>Soft Skills</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">{{softSkills}}</td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>Job Readiness</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">{{jobReadiness}}</td>
      </tr>
      <tr>
        <td style="padding: 12px; background-color: #f8f9fb; border: 1px solid #e0e0e0;"><strong>Learning Hours</strong></td>
        <td style="padding: 12px; border: 1px solid #e0e0e0;">{{learningHours}} hours</td>
      </tr>
    </table>
    <a href="{{dashboardLink}}" style="
      background-color: #5b2be0;
      color: #ffffff;
      padding: 12px 24px;
      display: inline-block;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
    ">View Dashboard</a>
    <p style="font-size: 15px; color: #555; margin-top: 40px;">
      Keep learning and evolving — your goals are within reach.<br />
      <strong>— Team CLIF.AI</strong>
    </p>
  </div>
</body>
</html>
`,

  subscriptionEndAlert: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Subscription Expiry Notice</title>
</head>
<body style="font-family: 'Segoe UI', sans-serif; background-color: #f0f4f8; padding: 30px; margin: 0;">
  <div style="max-width: 600px; width: 100%; margin: auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="display: flex; align-items: center; margin-bottom: 32px;">
      <img src="https://app.clif.ai/favicon.ico" alt="CLIF Logo" style="width: 40px; height: 40px; margin-right: 12px;" />
      <span style="font-size: 28px; font-weight: 600;">
        <span style="color: #555;">CLIF</span><span style="color: #5b2be0;">.AI</span>
      </span>
    </div>
    <h2 style="color: #d72638; font-size: 22px; margin-bottom: 16px;">
      Your Subscription Ends in {{daysLeft}} Day{{daysLeft === "1" ? "" : "s"}}
    </h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
      Hi {{username}},<br />
      Your CLIF.AI subscription will expire in <strong>{{daysLeft}}</strong> day{{daysLeft === "1" ? "" : "s"}}.
      Don’t miss out on your personalized learning journey, resume tracking, and career tools — renew today to stay on track!
    </p>
    <a href="{{renewLink}}" style="
      background-color: #5b2be0;
      color: #ffffff;
      padding: 12px 24px;
      display: inline-block;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
    ">Renew Now</a>
    <p style="font-size: 15px; color: #555; margin-top: 40px;">
      Need help? Our support team is always here for you.<br />
      <strong>— The CLIF.AI Team</strong>
    </p>
  </div>
</body>
</html>
`,
};

module.exports = templates;