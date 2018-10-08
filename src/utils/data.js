export const subStringTime = (time) => {
  let result = '';
  if (time) {
    result = time;
    if (time.length > 16) {
      result = time.substring(0, time.length - 3);
    }
  }

  return result;
}
