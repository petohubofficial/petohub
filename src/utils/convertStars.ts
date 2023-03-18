/**
 * Function to convert a floating number to an array of strings representing the number
 * @param {number} num any floating point number
 * @return an array of string representing each star
 */

export default function convertStars(num: number = 0) {
  // Rounding the number to the nearest half or .5th
  let n = Math.round(num * 2) / 2;

  // Making an array of stars
  const array: ("HALF" | "FULL" | "NONE")[] = [];
  while (n-- > 0) {
    if (n >= 0) array.push("FULL");
    else array.push("HALF");
  }

  // Filling the rest of the array if unfilled stars and returning it
  while (array.length < 5) array.push("NONE");
  return array;
}
