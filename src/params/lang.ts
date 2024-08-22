export function match(param: string): boolean {
  const isRTL = param === 'he';

  if (typeof document !== 'undefined') {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = 'he';
  }

  return isRTL;
}
