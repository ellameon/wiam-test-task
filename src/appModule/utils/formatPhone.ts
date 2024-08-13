export function formatPhone(text: string) {
  let result = text.split("").filter(char => /\d|\s/.test(char));

  let digitsCount = result.filter(char => /\d/.test(char)).length;

  if (digitsCount < 5 && result.length > digitsCount) {
    result = result.filter((char, index) => index < digitsCount || /\d/.test(char));
  }
  if (digitsCount < 8 && result.length > digitsCount + 1) {
    result = result.filter((char, index) => index < digitsCount + 1 || /\d/.test(char));
  }

  if (digitsCount >= 4 && digitsCount < 8 && result[4] !== ' ') {
    result.splice(4, 0, ' ');
  }
  if (digitsCount >= 8 && result[8] !== ' ') {
    result.splice(8, 0, ' ');
  }

  if (result.length > 12) {
    result = result.slice(0, 12);
  }

  return result.join("");
}