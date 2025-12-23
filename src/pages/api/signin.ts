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
    subject: 'Sign in to Halvestor',
    html: halvestorEmailTemplate(
      'Sign-in requested',
      'We received a request to sign in to Halvestor. If this was you, your access will be enabled shortly. If not, you can safely ignore this email.',
    ),
  });

  return res.status(200).json({ success: true });
}
