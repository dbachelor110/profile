import { vi } from 'vitest';

export const getSecret = vi.fn((key: string) => {
  return process.env[key];
});
