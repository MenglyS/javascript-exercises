const longestSubStrNoRepeatChar = require('./longestSubStrNoRepeatChar-solution');

describe("Longest SubString Without Repeating Characters", () => {
    
    test("abcabcbb is return 3", () => {
        expect(longestSubStrNoRepeatChar("abcabcbb")).toBe(3);
    });
    test("bbbbb string is 1", () => {
        expect(longestSubStrNoRepeatChar("bbbbb")).toBe(1);
    });
    test("pwwkew is return 3", () => {
        expect(longestSubStrNoRepeatChar("pwwkew")).toBe(3);
    });
    test("abcdefg is return 7", () => {
        expect(longestSubStrNoRepeatChar("abcdefg")).toBe(7);
    });
    test("aab is return 2", () => {
        expect(longestSubStrNoRepeatChar("aab")).toBe(2);
    });
    test("a is return 1", () => {
        expect(longestSubStrNoRepeatChar("a")).toBe(1);
    });
    test("empty is return 0", () => {
        expect(longestSubStrNoRepeatChar("")).toBe(0);
    });
    test("abcdabcd is return 4", () => {
        expect(longestSubStrNoRepeatChar("abcdabcd")).toBe(4);
    });
    test("xYxxyz is return 3", () => {
        expect(longestSubStrNoRepeatChar("xYxxyz")).toBe(3);
    });
    
})