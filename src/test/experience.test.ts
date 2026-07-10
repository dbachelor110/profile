import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

function parseFrontmatter(fileContent: string) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const yaml = match[1];
  const data: Record<string, any> = {};
  yaml.split('\n').forEach(line => {
    // Strip comments
    const cleanLine = line.split('#')[0].trim();
    if (!cleanLine) return;

    const colonIndex = cleanLine.indexOf(':');
    if (colonIndex !== -1) {
      const key = cleanLine.substring(0, colonIndex).trim();
      let value = cleanLine.substring(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      }
      if (value === '' || value === 'null') {
        data[key] = null;
      } else if (!isNaN(Number(value)) && value !== '') {
        data[key] = Number(value);
      } else {
        data[key] = value;
      }
    }
  });
  return data;
}

describe('Work Experience i18n Symmetry Validation', () => {
  const zhDir = path.resolve(process.cwd(), 'src/content/experience/zh');
  const enDir = path.resolve(process.cwd(), 'src/content/experience/en');

  it('should have both directories existing', () => {
    expect(fs.existsSync(zhDir)).toBe(true);
    expect(fs.existsSync(enDir)).toBe(true);
  });

  const zhFiles = fs.existsSync(zhDir) ? fs.readdirSync(zhDir).filter(f => f.endsWith('.md')) : [];
  const enFiles = fs.existsSync(enDir) ? fs.readdirSync(enDir).filter(f => f.endsWith('.md')) : [];

  it('should have exactly matching file names in both zh and en collections', () => {
    expect(zhFiles.sort()).toEqual(enFiles.sort());
  });

  zhFiles.forEach(filename => {
    describe(`Experience File: ${filename}`, () => {
      it('should exist in both folders and have symmetric structures', () => {
        const zhFilePath = path.join(zhDir, filename);
        const enFilePath = path.join(enDir, filename);

        expect(fs.existsSync(zhFilePath)).toBe(true);
        expect(fs.existsSync(enFilePath)).toBe(true);

        const zhContent = fs.readFileSync(zhFilePath, 'utf-8');
        const enContent = fs.readFileSync(enFilePath, 'utf-8');

        const zhMeta = parseFrontmatter(zhContent);
        const enMeta = parseFrontmatter(enContent);

        expect(zhMeta).not.toBeNull();
        expect(enMeta).not.toBeNull();

        if (zhMeta && enMeta) {
          // Validate company, location, title, start, end are defined and typed properly
          expect(typeof zhMeta.company).toBe('string');
          expect(zhMeta.company.trim()).not.toBe('');
          expect(typeof enMeta.company).toBe('string');
          expect(enMeta.company.trim()).not.toBe('');

          expect(typeof zhMeta.location).toBe('string');
          expect(typeof enMeta.location).toBe('string');

          expect(typeof zhMeta.title).toBe('string');
          expect(typeof enMeta.title).toBe('string');

          expect(typeof zhMeta.start).toBe('number');
          expect(zhMeta.start).toBeGreaterThan(190000);
          expect(zhMeta.start).toBeLessThan(210000);

          expect(enMeta.start).toBe(zhMeta.start);

          if (zhMeta.end !== null && zhMeta.end !== undefined) {
            expect(typeof zhMeta.end).toBe('number');
            expect(zhMeta.end).toBeGreaterThanOrEqual(zhMeta.start);
          }
          if (enMeta.end !== null && enMeta.end !== undefined) {
            expect(typeof enMeta.end).toBe('number');
            expect(enMeta.end).toBe(zhMeta.end);
          } else {
            expect(zhMeta.end === null || zhMeta.end === undefined).toBe(true);
          }
        }
      });
    });
  });
});
