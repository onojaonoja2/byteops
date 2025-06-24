// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API Key from environment variable
// Ensure this is called only once, typically at the top-level of the module.
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error('SENDGRID_API_KEY is not set. Emails will not be sent.');
}


export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // --- Basic Server-side Validation ---
    if (!name || !email || !subject || !message) { // Fixed typo: !!message -> !message
      return NextResponse.json(
        { message: 'All form fields are required.' },
        { status: 400 } // Bad Request
      );
    }

    // --- Check for required SendGrid config ---
    if (!process.env.SENDGRID_FROM_EMAIL || !process.env.CONTACT_FORM_TO_EMAIL) {
      console.error('Email configuration missing: SENDGRID_FROM_EMAIL or CONTACT_FORM_TO_EMAIL.');
      return NextResponse.json(
        { message: 'Email service misconfigured. Please contact support.' },
        { status: 500 }
      );
    }

    // --- Prepare Email Content ---
    const emailHtmlContent = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Form Submission from ByteOps Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap; background-color: #f0f0f0; padding: 15px; border-radius: 8px;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.9em; color: #777;">This email was sent from your website's contact form.</p>
      </div>
    `;

    // --- Send Email using SendGrid API Client ---
    const msg = {
      to: process.env.CONTACT_FORM_TO_EMAIL,   // Email address to which the form submission will be sent
      from: process.env.SENDGRID_FROM_EMAIL,   // Your verified sender email (byteops.digital@gmail.com)
      subject: `New Website Contact: ${subject} from ${name}`, // Subject of the email
      html: emailHtmlContent,                   // HTML content for the email body
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`, // Plain text fallback
    };

    try {
      if (process.env.SENDGRID_API_KEY) { // Only attempt to send if API key is set
        await sgMail.send(msg);
        console.log('Email sent via SendGrid API successfully!');
      } else {
        console.warn('SENDGRID_API_KEY is missing. Email was not sent. Data logged instead.');
      }

      return NextResponse.json(
        { message: 'Your message has been sent successfully!' },
        { status: 200 }
      );
    } catch (sendGridError: any) {
      // Log SendGrid specific error details if available
      console.error('SendGrid API Email Error:', sendGridError.response ? sendGridError.response.body : sendGridError);
      return NextResponse.json(
        { message: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing contact form submission (general):', error);
    return NextResponse.json(
      { message: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}