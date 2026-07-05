import { describe, it, expect } from 'vitest';
import { translations } from './translations';

describe('i18n translations integrity', () => {
  it('should have both "zh" and "en" translations', () => {
    expect(translations.zh).toBeDefined();
    expect(translations.en).toBeDefined();
  });

  it('should have matching translation keys for both languages', () => {
    const zhKeys = Object.keys(translations.zh);
    const enKeys = Object.keys(translations.en);

    expect(zhKeys).toEqual(enKeys);
  });

  it('should have matching sub-keys for common namespaces', () => {
    // Nav subkeys
    expect(Object.keys(translations.zh.nav)).toEqual(Object.keys(translations.en.nav));

    // Hero subkeys
    expect(Object.keys(translations.zh.hero)).toEqual(Object.keys(translations.en.hero));

    // About subkeys
    expect(Object.keys(translations.zh.about)).toEqual(Object.keys(translations.en.about));

    // Skills subkeys
    expect(Object.keys(translations.zh.skills.categories)).toEqual(
      Object.keys(translations.en.skills.categories),
    );

    // Paradigm subkeys
    expect(Object.keys(translations.zh.paradigm)).toEqual(Object.keys(translations.en.paradigm));

    // Contact subkeys
    expect(Object.keys(translations.zh.contact)).toEqual(Object.keys(translations.en.contact));
  });

  it('should contain jobs in resume with same count and schema', () => {
    expect(translations.zh.resume.jobs.length).toBe(translations.en.resume.jobs.length);
    expect(translations.zh.resume.jobs.length).toBeGreaterThan(0);

    for (let i = 0; i < translations.zh.resume.jobs.length; i++) {
      const zhJob = translations.zh.resume.jobs[i];
      const enJob = translations.en.resume.jobs[i];

      expect(zhJob.company).toBeDefined();
      expect(enJob.company).toBeDefined();
      expect(zhJob.achievements.length).toBe(enJob.achievements.length);
    }
  });
});
