import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function halvestorEmailTemplate(title: string, message: string) {
  return `
  <div style="font-family: Inter, Arial, sans-serif; background:#f4f7fb; padding:40px">
    <div style="max-width:600px;margin:auto;background:#0b4f78;border-radius:12px;padding:32px;color:#ffffff">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <img src="https://halvestor-papol.vercel.app/logo.png" height="36" />
        <h2 style="margin:0;font-weight:600">Halvestor</h2>
      </div>

      <h1 style="font-size:22px;margin-bottom:16px">${title}</h1>

      <p style="font-size:15px;line-height:1.6;color:#dbeafe">
        ${message}
      </p>

      <div style="margin-top:32px;font-size:13px;color:#9fbad6">
        © ${new Date().getFullYear()} Halvestor. Sharia-compliant investing made simple.
      </div>
    </div>
  </div>
  `;
}
