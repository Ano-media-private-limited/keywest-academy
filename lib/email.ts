import nodemailer from "nodemailer";

// SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls: { rejectUnauthorized: false },
});

// Course & preferred time mappings
export const courseNames: Record<string, string> = {
  "star-2026": "STAR 2026 Course",
  "level-1": "Level 1 - Professional Makeup Course",
  "level-2": "Level 2 - Masters in Makeup Artistry Course",
  "level-3": "Level 3 - MasterPro Artistry Certification",
  "level-4": "Level 4 - Global Elite Artistry Program",
  "level-5": "Level 5 - Cosmetology Course",
  "self-makeup": "Self Makeup Course",
};

export const preferredTimes: Record<string, string> = {
  morning: "Morning (10am - 1pm)",
  afternoon: "Afternoon (2pm - 5pm)",
};

// Professional email template base
const getEmailTemplateBase = (accentColor: string = "#f98ca3") => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keywest Academy</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Playfair+Display:wght@400;500&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            background-color: #fef9fb;
            font-family: 'Poppins', Arial, sans-serif;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(249, 140, 163, 0.1);
        }
        .header {
          background: #000000; /* solid black */
          padding: 30px;
          text-align: center;
          }
        .logo {
            max-width: 180px;
            height: auto;
            margin-bottom: 15px;
        }
        .accent-stripe {
            height: 4px;
            background: linear-gradient(90deg, #f98ca3, #ffd1dc, #f98ca3);
            margin: 0;
        }
        .content {
            padding: 40px;
            color: #333;
        }
        .section-title {
            color: ${accentColor};
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            margin: 30px 0 15px 0;
            border-bottom: 2px solid #ffebf0;
            padding-bottom: 8px;
        }
        .detail-item {
            background: #fff9fb;
            padding: 15px;
            border-radius: 12px;
            margin: 10px 0;
            border-left: 4px solid ${accentColor};
        }
        .highlight-box {
            background: linear-gradient(135deg, #fff9fb, #fff0f5);
            border: 2px dashed ${accentColor};
            border-radius: 15px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
        }
        .contact-info {
            background: #fef9fb;
            border-radius: 15px;
            padding: 25px;
            margin-top: 30px;
            border: 1px solid #ffe6ee;
        }
        .signature {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-style: italic;
        }
        .footer {
            background: #2c2c2c;
            color: white;
            padding: 25px;
            text-align: center;
            font-size: 14px;
        }
        .social-icons {
            margin: 20px 0;
        }
        .social-icon {
            display: inline-block;
            margin: 0 10px;
            color: white;
            font-size: 20px;
            text-decoration: none;
        }
        @media only screen and (max-width: 600px) {
            .content {
                padding: 25px;
            }
            .header {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
`;

// Send email to academy
export async function sendCompanyNotification(formData: any) {
  const { name, email, phone, course, preferredTime, message } = formData;

  const html =
    getEmailTemplateBase("#f98ca3") +
    `
    <div class="email-container">
        <div class="header">
            <img src="${
              process.env.WEBSITE_URL || "http://localhost:3000"
            }/logo.png" 
                 alt="Keywest Academy" class="logo">
            <h1 style="color: white; margin: 10px 0; font-size: 28px;">New Enquiry Received</h1>
            <p style="color: white; opacity: 0.9; margin: 0;">🎨 Makeup Academy Enquiry</p>
        </div>
        <div class="accent-stripe"></div>
        
        <div class="content">
            <div class="highlight-box">
                <h2 style="color: #f98ca3; margin: 0; font-size: 24px;">
                    ✨ New Student Interest ✨
                </h2>
                <p style="color: #666; margin: 10px 0 0 0;">
                    A prospective student has shown interest in our courses
                </p>
            </div>
            
            <h2 class="section-title">📋 Student Details</h2>
            <div class="detail-item">
                <strong>👤 Name:</strong> ${name}
            </div>
            <div class="detail-item">
                <strong>📧 Email:</strong> ${email}
            </div>
            <div class="detail-item">
                <strong>📱 Phone:</strong> ${phone}
            </div>
            
            <h2 class="section-title">🎓 Course Information</h2>
            <div class="detail-item">
                <strong>Course Interested:</strong><br>
                ${
                  course
                    ? `<span style="color: #f98ca3; font-weight: 600;">${courseNames[course]}</span>`
                    : "Not specified"
                }
            </div>
            <div class="detail-item">
                <strong>Preferred Timing:</strong><br>
                ${
                  preferredTime
                    ? `<span style="color: #f98ca3; font-weight: 600;">${preferredTimes[preferredTime]}</span>`
                    : "Not specified"
                }
            </div>
            
            <h2 class="section-title">💌 Message from Student</h2>
            <div class="detail-item">
                <p style="margin: 0; line-height: 1.6;">
                    ${message || "No additional message provided."}
                </p>
            </div>
            
            <div class="contact-info">
                <h3 style="color: #f98ca3; margin-top: 0;">📞 Quick Actions</h3>
                <p>💬 <a href="mailto:${email}" style="color: #f98ca3; text-decoration: none;">Reply to ${name}</a></p>
                <p>📱 <a href="tel:${phone}" style="color: #f98ca3; text-decoration: none;">Call ${name}</a></p>
                <p style="color: #666; font-size: 14px; margin-top: 15px;">
                    ⏰ Enquiry received: ${new Date().toLocaleString()}
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} Keywest Academy. All rights reserved.</p>
            <p style="opacity: 0.8; font-size: 12px;">
                This email was automatically generated from the website enquiry form.
            </p>
        </div>
    </div>
</body>
</html>`;

  return transporter.sendMail({
    from: `"Keywest Academy Enquiries" <${process.env.SMTP_USER}>`,
    to: process.env.COMPANY_EMAIL,
    subject: `🎨 New Enquiry: ${name} - ${
      course ? courseNames[course] : "General Enquiry"
    }`,
    html,
  });
}

// Send confirmation to user
export async function sendUserConfirmation(formData: any) {
  const { name, email, course, preferredTime } = formData;

  const html =
    getEmailTemplateBase("#f98ca3") +
    `
    <div class="email-container">
        <div class="header">
            <img src="${
              process.env.WEBSITE_URL || "http://localhost:3000"
            }/logo.png" 
                 alt="Keywest Academy" class="logo">
            <h1 style="color: white; margin: 10px 0; font-size: 28px;">Welcome to Keywest!</h1>
            <p style="color: white; opacity: 0.9; margin: 0;">Where Beauty Meets Artistry</p>
        </div>
        <div class="accent-stripe"></div>
        
        <div class="content">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="background: #fff0f5; border-radius: 50%; width: 80px; height: 80px; 
                          display: flex; align-items: center; justify-content: center; 
                          margin: 0 auto 20px; font-size: 40px;">
                    💖
                </div>
                <h2 style="color: #f98ca3; margin: 0; font-size: 26px;">
                    Thank You, ${name}!
                </h2>
                <p style="color: #666; font-size: 16px;">
                    Your beauty journey begins here ✨
                </p>
            </div>
            
            <div class="highlight-box">
                <h3 style="color: #f98ca3; margin: 0 0 15px 0;">Your Enquiry is Confirmed</h3>
                <p style="margin: 0; color: #555;">
                    Our admissions team will contact you within 24-48 hours to discuss 
                    your beauty aspirations and guide you through the next steps.
                </p>
            </div>
            
            <h2 class="section-title">📝 Your Enquiry Details</h2>
            <div class="detail-item">
                <strong>🎓 Selected Course:</strong><br>
                <span style="color: #f98ca3; font-weight: 600;">
                    ${
                      course
                        ? courseNames[course]
                        : "General Enquiry (Our team will suggest the best fit)"
                    }
                </span>
            </div>
            <div class="detail-item">
                <strong>⏰ Preferred Timing:</strong><br>
                <span style="color: #f98ca3; font-weight: 600;">
                    ${
                      preferredTime
                        ? preferredTimes[preferredTime]
                        : "Flexible - Will be discussed"
                    }
                </span>
            </div>
            
            <div class="contact-info">
                <h3 style="color: #f98ca3; margin-top: 0;">🏫 Visit Our Academy</h3>
                <p>📍 <strong>Address:</strong><br>
                Building no. 63, 2nd floor,<br>
                Lajpat Nagar 3, New Delhi - 110057</p>
                
                <p>📞 <strong>Contact:</strong><br>
                9811020094 / 9899116884</p>
                
                <p>✉️ <strong>Email:</strong><br>
                info@keywestacademy.in</p>
                
                <p style="margin-top: 15px;">
                    <a href="https://maps.google.com/?q=Keywest+Academy+Lajpat+Nagar+New+Delhi" 
                       style="background: #f98ca3; color: white; padding: 12px 25px; 
                              text-decoration: none; border-radius: 25px; display: inline-block;
                              font-weight: 600;">
                        📍 Get Directions
                    </a>
                </p>
            </div>
            
            <div style="background: #fef9fb; border-radius: 15px; padding: 20px; margin-top: 30px;">
                <h4 style="color: #f98ca3; margin-top: 0;">💡 Next Steps</h4>
                <ol style="color: #555; padding-left: 20px;">
                    <li>Our team will call you to understand your goals</li>
                    <li>Schedule a campus visit/tour</li>
                    <li>Meet our expert faculty</li>
                    <li>Discuss course curriculum and career opportunities</li>
                </ol>
            </div>
            
            <div class="signature">
                <p style="margin: 0; color: #f98ca3; font-weight: 600; font-size: 18px;">
                    With love and brushes, 💄
                </p>
                <p style="margin: 5px 0 0 0; color: #666;">
                    The Keywest Academy Team<br>
                    <span style="font-size: 14px;">Creating Beauty Professionals Since 2010</span>
                </p>
            </div>
        </div>
        
        <div class="footer">
            <div class="social-icons">
                <a href="#" class="social-icon">📘</a>
                <a href="#" class="social-icon">📷</a>
                <a href="#" class="social-icon">📹</a>
                <a href="#" class="social-icon">💼</a>
            </div>
            <p>Transform Your Passion Into Profession</p>
            <p style="opacity: 0.8; font-size: 12px; margin-top: 15px;">
                This is an automated email. Please do not reply to this address.<br>
                © ${new Date().getFullYear()} Keywest Academy of Advanced Makeup & Hair
            </p>
        </div>
    </div>
</body>
</html>`;

  return transporter.sendMail({
    from: `"Keywest Academy" <${process.env.SMTP_USER}>`,
    to: email,
    replyTo: process.env.COMPANY_EMAIL,
    subject: `✨ Welcome to Keywest Academy, ${name}! Your Beauty Journey Awaits`,
    html,
  });
}

// Optional: Send a follow-up email after 3 days (if implementing automation)
export async function sendFollowUpEmail(formData: any) {
  const { name, email, course } = formData;

  const html =
    getEmailTemplateBase("#f98ca3") +
    `
    <div class="email-container">
        <div class="header">
            <img src="${
              process.env.WEBSITE_URL || "http://localhost:3000"
            }/logo.png" 
                 alt="Keywest Academy" class="logo">
            <h1 style="color: white; margin: 10px 0; font-size: 24px;">Your Beauty Career Awaits</h1>
        </div>
        
        <div class="content">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #f98ca3; margin: 0;">Hi ${name},</h2>
                <p style="color: #666;">We noticed you were interested in our ${
                  course ? courseNames[course] : "beauty courses"
                }</p>
            </div>
            
            <div class="highlight-box">
                <h3 style="color: #f98ca3; margin: 0;">🎁 Special Offer Inside!</h3>
                <p>Book a campus tour this week and get a free makeup consultation!</p>
            </div>
            
            <p style="text-align: center; margin-top: 30px;">
                <a href="${
                  process.env.WEBSITE_URL || "http://localhost:3000"
                }/contact" 
                   style="background: #f98ca3; color: white; padding: 15px 30px; 
                          text-decoration: none; border-radius: 30px; display: inline-block;
                          font-weight: 600; font-size: 16px;">
                    📅 Schedule Your Visit Now
                </a>
            </p>
        </div>
    </div>
</body>
</html>`;

  return transporter.sendMail({
    from: `"Keywest Academy" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `💄 Exclusive Offer for ${name} from Keywest Academy`,
    html,
  });
}
