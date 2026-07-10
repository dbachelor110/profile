import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { APIContext } from 'astro';
import { POST } from './contact';

// Mock getSecret from astro:env/server
vi.mock('astro:env/server', () => ({
  getSecret: vi.fn((key: string) => {
    if (key === 'RESEND_API_KEY') return 'test_api_key';
    return undefined;
  }),
}));

// Mock sendEmail from '@/utils/sendEmail'
vi.mock('@/utils/sendEmail', () => ({
  sendEmail: vi.fn(),
}));

import { sendEmail } from '@/utils/sendEmail';
import { getSecret } from 'astro:env/server';

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 400 if RESEND_API_KEY is not set', async () => {
    vi.mocked(getSecret).mockReturnValueOnce(undefined);

    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      }),
    });

    const response = await POST({ request } as unknown as APIContext);
    expect(response.status).toBe(400);
    const data = (await response.json()) as { error?: string; success?: boolean };
    expect(data.error).toBe('RESEND_API_KEY Not Setted');
  });

  it('should return 400 if name is missing', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: 'john@example.com',
        message: 'Hello!',
      }),
    });

    const response = await POST({ request } as unknown as APIContext);
    expect(response.status).toBe(400);
    const data = (await response.json()) as { error?: string; success?: boolean };
    expect(data.error).toBe('Name, email, and message are required.');
  });

  it('should return 400 if email is invalid', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Hello!',
      }),
    });

    const response = await POST({ request } as unknown as APIContext);
    expect(response.status).toBe(400);
    const data = (await response.json()) as { error?: string; success?: boolean };
    expect(data.error).toBe('Invalid email address.');
  });

  it('should send email and return 200 on success', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      }),
    });

    const response = await POST({ request } as unknown as APIContext);
    expect(response.status).toBe(200);
    const data = (await response.json()) as { error?: string; success?: boolean };
    expect(data.success).toBe(true);
    expect(sendEmail).toHaveBeenCalledWith(
      expect.any(String),
      'Contact from John Doe',
      'from: john@example.com<br>Hello!',
      'test_api_key',
    );
  });

  it('should return 500 if sendEmail throws an error', async () => {
    vi.mocked(sendEmail).mockRejectedValueOnce(new Error('Send failed'));

    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      }),
    });

    const response = await POST({ request } as unknown as APIContext);
    expect(response.status).toBe(500);
    const data = (await response.json()) as { error?: string; success?: boolean };
    expect(data.error).toBe('Internal server error.');
  });
});
