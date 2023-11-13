import { capitalize } from "./capitalize";

test('Capitalize Charecter from String "hello world!" to "H"', () => {
    expect(capitalize('hello world!')).toBe('H')
})

test('Verifying Capitalize Charecter with RegExp', () => {
    expect(capitalize('hope this works!')).toMatch(/[A-Z]/)
})

test('Capitalize Charecters with Number instead of String', () => {
    expect(() => {
        capitalize(12345)
    }).toThrow(Error)
})