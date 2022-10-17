// https://leetcode.com/problems/concatenated-words/

function findAllConcatenatedWordsInADict(words: string[]): string[] {
    const dict: Record<string, number> = {}
    words.forEach((word, i)=> {
        dict[word] = i;
    })
    const output = [];
    for (let i = 0; i<words.length; i++) {
        const originalWord = words[i];
        let copy = originalWord;
        for (let j = 0; j<originalWord.length; j++) {
            
        }
    }
};