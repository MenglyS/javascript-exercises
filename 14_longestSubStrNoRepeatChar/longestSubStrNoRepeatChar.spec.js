const longestSubStrNoRepeatChar = require('./longestSubStrNoRepeatChar');

describe("Longest SubString Without Repeating Characters", () => {
    
    test("abcabcbb is return 3", () => {
        expect(longestSubStrNoRepeatChar("abcabcbb")).toBe(3);
    });
    test.skip("bbbbb string is 1", () => {
        expect(longestSubStrNoRepeatChar("bbbbb")).toBe(1);
    });
    test.skip("pwwkew is return 3", () => {
        expect(longestSubStrNoRepeatChar("pwwkew")).toBe(3);
    });
    test.skip("abcdefg is return 7", () => {
        expect(longestSubStrNoRepeatChar("abcdefg")).toBe(7);
    });
    test.skip("aab is return 2", () => {
        expect(longestSubStrNoRepeatChar("aab")).toBe(2);
    });
    test.skip("a is return 1", () => {
        expect(longestSubStrNoRepeatChar("a")).toBe(1);
    });
    test.skip("empty is return 0", () => {
        expect(longestSubStrNoRepeatChar("")).toBe(0);
    });
    test.skip("abcdabcd is return 4", () => {
        expect(longestSubStrNoRepeatChar("abcdabcd")).toBe(4);
    });
    test.skip("xYxxyz is return 3", () => {
        expect(longestSubStrNoRepeatChar("xYxxyz")).toBe(3);
    });
    
})