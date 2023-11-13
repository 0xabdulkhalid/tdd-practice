import { analyzeArray } from "./analyzeArray";

test('analyzeArray with Non-Numeral list items', () => {
    expect(() => {
        analyzeArray(['a', 'b'])
    }).toThrow(Error)
})

test('analyzeArray with Mixed Numeral and Non-Numeral list items', () => {
    expect(() => {
        analyzeArray(['a', 0, 'b', 1])
    }).toThrow(Error)
})

test('analyzeArray with non-list arguments', () => {
    expect(() => {
        analyzeArray('Hello!')
    }).toThrow(Error)
})

test('analyzeArray with Numerals on List', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})