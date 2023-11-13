import { caeserCipher } from "./caeserCipher";

test('Ciphering String, "Hello World!"', () => {
    expect(caeserCipher('Hello World!', 3)).toBe('Khoor Zruog!')
})

test('Deciphering String "Khoor, Zruog!"', () => {
    expect(caeserCipher("Khoor Zruog!", -3)).toBe('Hello World!')
})

test('Ciphering String, "Hello World!" without Key', () => {
    expect(() => {
        caeserCipher('Hello World!')
    }).toThrow(Error)
})

test('Deciphering String, "Khoor Zruog!" without Key', () => {
    expect(() => {
        caeserCipher("Khoor Zruog!")
    }).toThrow(Error)
})

test('Testing Cipher with Numerals', () => {
    expect(() => {
        caeserCipher(3425231, 5)
    }).toThrow(Error)
})
