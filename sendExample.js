const sendEmail = require('./emailService');
const templates = require('./templates');
const renderTemplate = require('./renderTemplate');

// 1. Send Welcome Email
async function sendWelcomeEmail() {
  const html = renderTemplate(templates.welcomeEmail, {
    username: 'John Doe',
    otpCode: '123456',
  });

  await sendEmail({
    to: 'user@example.com',
    subject: 'Welcome to CLIF.AI!',
    html,
  });
}

// 2. Send OTP Email
async function sendOtpEmail() {
  const html = renderTemplate(templates.otpEmail, {
    username: 'John Doe',
    otpCode: '987654',
  });

  await sendEmail({
    to: 'user@example.com',
    subject: 'Your OTP Code for CLIF.AI',
    html,
  });
}

// 3. Send Subscription Confirmation
async function sendSubscriptionConfirmation() {
  const html = renderTemplate(templates.subscriptionConfirmation, {
    username: 'John Doe',
    amount: '999',
    startDate: '2025-07-01',
    endDate: '2025-08-01',
    receiptLink: 'https://clif.ai/receipt/123456',
  });

  await sendEmail({
    to: 'user@example.com',
    subject: 'CLIF.AI Subscription Confirmed',
    html,
  });
}

// 4. Send Monthly Tracker
async function sendMonthlyTracker() {
  const html = renderTemplate(templates.monthlyTracker, {
    resumeScore: '85',
    softSkills: 'Strong',
    jobReadiness: 'High',
    learningHours: '22',
    dashboardLink: 'https://clif.ai/dashboard',
  });

  await sendEmail({
    to: 'user@example.com',
    subject: 'Your Monthly CLIF.AI Progress',
    html,
  });
}

// 5. Send Subscription End Alert
async function sendSubscriptionEndAlert() {
  const html = renderTemplate(templates.subscriptionEndAlert, {
    username: 'John Doe',
    daysLeft: '3',
    renewLink: 'https://clif.ai/renew',
  });

  await sendEmail({
    to: 'user@example.com',
    subject: 'Your CLIF.AI Subscription Is Expiring',
    html,
  });
}

// Call any function here to test:
sendWelcomeEmail();
// sendOtpEmail();
// sendSubscriptionConfirmation();
// sendMonthlyTracker();
// sendSubscriptionEndAlert();
