function longestSubStrNoRepeatChar(str) {
  let result = 0;
  let start = 0;
  const charMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    }

    charMap.set(char, i);
    const currentLength = i - start + 1;
    result = Math.max(result, currentLength);
  }

  return result;
}

module.exports = longestSubStrNoRepeatChar;
