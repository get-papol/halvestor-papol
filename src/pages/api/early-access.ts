import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter, halvestorEmailTemplate } from '@/lib/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email required' });
  }

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'You’re on the Halvestor Early Access list',
    html: halvestorEmailTemplate(
      'Welcome to Halvestor',
      'Thank you for joining our early access list. We’ll notify you as soon as Halvestor is ready to help you invest with clarity, confidence, and full Sharia compliance.',
    ),
  });

  return res.status(200).json({ success: true });
}
