import nodemailer from 'nodemailer';
import { ContactSubmission } from '@shared/schema';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
};

// Create transporter
const transporter = nodemailer.createTransporter(EMAIL_CONFIG);

export interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = transporter;
  }

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendContactFormEmail(data: EmailData): Promise<boolean> {
    try {
      const mailOptions = {
        from: `"JJM Technology Contact Form" <${EMAIL_CONFIG.auth.user}>`,
        to: 'request@jjmtechllc.com',
        subject: `New Contact Form Submission - ${data.service} Service Inquiry`,
        html: this.generateContactEmailHTML(data),
        text: this.generateContactEmailText(data)
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  private generateContactEmailHTML(data: EmailData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #2563eb; }
          .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981; margin-top: 10px; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>JJM Technology LLC Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.firstName} ${data.lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="label">Service Interest:</div>
              <div class="value">${this.formatServiceName(data.service)}</div>
            </div>
            
            <div class="field">
              <div class="label">Project Description:</div>
              <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>This message was sent from the JJM Technology LLC contact form.</p>
              <p>Reply directly to: ${data.email}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateContactEmailText(data: EmailData): string {
    return `
New Contact Form Submission - JJM Technology LLC

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
Service Interest: ${this.formatServiceName(data.service)}

Project Description:
${data.message}

---
This message was sent from the JJM Technology LLC contact form.
Reply directly to: ${data.email}
    `.trim();
  }

  private formatServiceName(service: string): string {
    const serviceMap: { [key: string]: string } = {
      'gen-ai': 'Generative AI',
      'ai-automation': 'AI Automation',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'cloud-solutions': 'Cloud Solutions',
      'consulting': 'Tech Consulting'
    };
    return serviceMap[service] || service;
  }

  // Test email configuration
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Email server connection verified');
      return true;
    } catch (error) {
      console.error('Email server connection failed:', error);
      return false;
    }
  }
}

export const emailService = EmailService.getInstance();
