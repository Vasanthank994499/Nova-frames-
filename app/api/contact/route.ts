import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    const formData = new URLSearchParams();
    formData.append('_subject', `⚡ New NovaFrames Inquiry: ${name || 'Client'} (${service || 'General'})`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_replyto', email);
    formData.append('Client Name', name || '');
    formData.append('Client Email', email || '');
    formData.append('Company Name', company || 'Not specified');
    formData.append('Selected Service', service || 'Not specified');
    formData.append('Budget Range', budget || 'Not specified');
    formData.append('Project Scope & Message', message || '');
    formData.append('Submitted At', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

    // Send via FormSubmit AJAX endpoint
    const response = await fetch('https://formsubmit.co/ajax/novaframes02@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Referer': 'https://novaframes.in',
      },
      body: formData.toString(),
    });

    const result = await response.json();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Email dispatch error:', error);
    return NextResponse.json({ success: true, warning: 'Captured' });
  }
}
