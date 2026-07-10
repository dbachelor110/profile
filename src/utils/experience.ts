import { getCollection } from 'astro:content';

export function formatPeriod(start: number, end: number | null | undefined, isEnglish: boolean): string {
  const formatMonthYear = (val: number): string => {
    const year = Math.floor(val / 100);
    const monthNum = val % 100;
    if (isEnglish) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[monthNum - 1]} ${cleanYearString(year)}`;
    } else {
      return `${year}年${monthNum}月`;
    }
  };

  // NCKU graduation date was removed, but for experience we want the years
  const cleanYearString = (year: number) => year.toString();

  const startStr = formatMonthYear(start);
  let endStr = '';
  if (!end) {
    endStr = isEnglish ? 'Present' : '至今';
  } else {
    endStr = formatMonthYear(end);
  }
  return `${startStr} – ${endStr}`;
}

export async function getSortedExperience(locale: 'zh' | 'en') {
  const entries = await getCollection('experience', ({ id }) => {
    return id.startsWith(`${locale}/`);
  });

  return entries.sort((a, b) => b.data.start - a.data.start);
}
