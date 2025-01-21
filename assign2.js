
const bioobject = {
    string1: "biology",
  };

function countLetters(str) {
  
    let letterCounts = {};
    
    for (let char of str) {
      if (/[a-z]/.test(char)) {
        letterCounts[char] = (letterCounts[char] || 0) +1;
      }
    }
    return letterCounts;

  }
  
  function findHighestLetterOccurrence(obj) {
    let highestLetter = '';
    let maxCount = 0;
    
    for (let key in obj) {
      const str = obj[key];
      const letterCounts = countLetters(str);
  
      for (let letter in letterCounts) {
        if (letterCounts[letter] > maxCount) {
          highestLetter = letter;
          maxCount = letterCounts[letter];
        }
      }
    }
    return highestLetter;
  }
  
  const numofletter = findHighestLetterOccurrence(bioobject);
  console.log("The highest occurring letter is:", numofletter);
  