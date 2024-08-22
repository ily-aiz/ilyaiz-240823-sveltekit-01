export function match(param) {
  console.log({ lang: { param } });
  console.log(param === 'he');
  return param === 'he';
}
