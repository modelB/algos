// https://leetcode.com/problems/concatenated-words/

// function findAllConcatenatedWordsInADict(words: string[]): string[] {
//   words = words.sort((a, b) => a.length - b.length);
//   const output = [];
//   words.forEach((word, i)=> {
//     const stack = [word];
//     let foundMatch = false;
//     while (stack.length && !foundMatch) {
//       const candidate = stack.pop();
//       for (let j = 0; j<i; j++) {
//         if (candidate === words[j]) {
//           output.push(word);
//           foundMatch = true;
//           break;
//         } else if (candidate.startsWith(words[j])) {
//           stack.push(candidate.slice(words[j].length))
//         }
//       }
//     }
//   })
//   return output;
// }

function findAllConcatenatedWordsInADict(words: string[]): string[] {
  class Trie {
    isEnd = false;
    children: Record<string, Trie> = {};
  }
  const root = new Trie();
  const output = [];
  words.sort((a, b) => a.length - b.length);
  words.forEach((word) => {
    // look for word among shorter words already added to Trie;
    let currNode = root;
    let i = 0;
    const stack = [word];
    let foundWord = false;
    while (stack.length && !foundWord) {
      const candidate = stack.pop();
      currNode = root;
      i = 0;
      let unfoundChar = false;
      while (i < candidate.length && !unfoundChar) {
        const char = candidate[i];
        if (!currNode.children[char]) {
          unfoundChar = true;
        } else {
          currNode = currNode.children[char];
          if (currNode.isEnd) {
            if (i === candidate.length - 1) {
              output.push(word);
              foundWord = true;
              unfoundChar = true;
            } else {
              stack.push(candidate.slice(i + 1));
            }
          }
        }
        i++;
      }
    }
    // add word to Trie
    currNode = root;
    for (i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currNode.children[char]) currNode.children[char] = new Trie();
      currNode = currNode.children[char];
      if (i === word.length - 1) currNode.isEnd = true;
    }
  });
  return output;
}

console.log(
  findAllConcatenatedWordsInADict([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ])
);
