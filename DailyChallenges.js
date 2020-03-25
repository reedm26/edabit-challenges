// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// @ts-ignore
function frames(minutes, fps) {
  return minutes * 60 * fps;
}
//Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
function monthName(num) {
  switch (num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
      break;
  }
}

//Create a function that takes a string and returns the word count. The string will be a sentence.
function countWords(str) {
  return str.split(" ").length;
}

//Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
  return Math.min(...arr);
}
//Other solution i tried
function findSmallestNum(arr) {
  let smNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smNum) {
      return (arr[i] = smNum);
    }
  }
}

//A pair of strings form a strange pair if both of the following are true:
//The 1st string's first letter = 2nd string's last letter.
//The 1st string's last letter = 2nd string's first letter.
//Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
function isStrangePair(str1, str2) {
  const lastChar1 = str1.charAt(str1.length - 1);
  const lastChar2 = str2.charAt(str2.length - 1);
  if (str1.charAt(0) == lastChar2 && lastChar1 == str2.charAt(0)) {
    return true;
  } else if (str1 == str2) {
    return;
  } else {
    return false;
  }
}
//Create a function that takes an array of numbers and return the first and last elements as a new array.
function firstLast(arr) {
  arr.splice(1, arr.length - 2);
  return arr;
}
//Create a function that takes an array of strings and returns the words that are exactly four letters.
function isFourLetters(arr) {
  const newArr = arr.filter(fourLetter => fourLetter.length === 4);
  return newArr;
}
