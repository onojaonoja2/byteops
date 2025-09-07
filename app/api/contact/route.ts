import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Rate limiting (optional)
    // You can implement rate limiting here if needed

    // Send email
    await sendEmail({ name, email, subject, message });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}