const reverseArray = require('./reverseArray');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["apple", "banana", "cherry"];
const arr3 = [true, false, true, false];
const arr4 = [10, 20, 30, 40, 50, 60];
const arr5 = [];
const arr6 = ["hello"];
const arr7 = ["a", "b", "c", "d", "e"];
const arr8 = [3.14, 2.71, 1.618];
const arr9 = [true, "hello", 42];

const result1 = [5, 4, 3, 2, 1];
const result2 = ["cherry", "banana", "apple"]
const result3 = [false, true, false, true]
const result4 = [60, 50, 40, 30, 20, 10]
const result5 = []
const result6 = ["hello"]
const result7 = ["e", "d", "c", "b", "a"]
const result8 = [1.618, 2.71, 3.14]
const result9 = [42, "hello", true]


describe("Reverse Array Elements", () => {
    
    test("1, 2, 3, 4, 5 is return 5, 4, 3, 2, 1", () => {
        expect(reverseArray(arr1)).toStrictEqual(result1);
    });
    test.skip("apple, banana, cherry is return cherry, banana, apple", () => {
        expect(reverseArray(arr2)).toStrictEqual(result2);
    });
    test.skip("true, false, true, false is return false, true, false, true", () => {
        expect(reverseArray(arr3)).toStrictEqual(result3);
    });
    test.skip("10, 20, 30, 40, 50, 60 is return 60, 50, 40, 30, 20, 10", () => {
        expect(reverseArray(arr4)).toStrictEqual(result4);
    });
    test.skip("empty is return empty", () => {
        expect(reverseArray(arr5)).toStrictEqual(result5);
    });
    test.skip("hello is return hello", () => {
        expect(reverseArray(arr6)).toStrictEqual(result6);
    });
    test.skip("a, b, c, d, e is return e, d, c, b, a", () => {
        expect(reverseArray(arr7)).toStrictEqual(result7);
    });
    test.skip("3.14, 2.71, 1.618 is return 1.618, 2.71, 3.14", () => {
        expect(reverseArray(arr8)).toStrictEqual(result8);
    });
    test.skip("true, hello, 42 is return 42, hello, true", () => {
        expect(reverseArray(arr9)).toStrictEqual(result9);
    });
    
})