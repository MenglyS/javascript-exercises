# Exercise 14 - LongestSubStrNoRepeatChar

Write a JavaScript function that takes a string as input and returns the length of sub string without counting repeating character. For example:

- "aavcdd" return 4 since we have 4 different chars "avcd"
- "AaBacDds" return 5 since we have 5 different chars "abcds"
- "bdbb788" return 4 since we have 4 different chars "bd78"
- "" return 0 since the string is empty

## Hint:

To solve the problem of finding the longest substring without repeating characters, you can follow these steps:

- Create an empty data structure (such as a hash map or an array) to store the most recent index of each character.
- Iterate through the characters of the input string.
- Check for repeating characters and update if encounter the repeating char.
- Calculate the length of the current substring.
- Update the maximum length if current substring length is greater than maximun length.
- Return the maximum length.