// https://leetcode.com/problems/decode-string/

function decodeString(s: string): string {
  const regex = /\d+\[[a-z]*\]/;
  const multiplierRegex = /^\d+/;
  let match = s.match(regex);
  while (match) {
    const multiplierMatch = match[0].match(multiplierRegex);
    const multiplier = parseInt(multiplierMatch[0], 10);
    const contents = match[0].slice(
      multiplierMatch.index + multiplierMatch[0].length + 1,
      -1
    );
    s =
      s.slice(0, match.index) +
      contents.repeat(multiplier) +
      s.slice(match.index + match[0].length);
    match = s.match(regex);
  }
  return s;
}

console.log(decodeString("3[a]2[bc]"));
