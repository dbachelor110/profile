import { THIRD_PART_ENDPOINT_TABLE } from '@/constants';

const { resend } = THIRD_PART_ENDPOINT_TABLE;

/** 通用的 Resend 發信函數 */
export async function sendEmail(to: string, subject: string, html: string, apiKey: string) {
  const response = await fetch(resend.sendEmail, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Mmao Profile <mmao-profile@mores.group>', // 請替換成您驗證過的網域
      to: [to],
      subject: subject,
      html: html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }
}
