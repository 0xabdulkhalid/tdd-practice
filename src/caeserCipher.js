function caeserCipher(string, shift) {
    if (typeof string !== 'string') throw new Error('Cipher only accepts String')
    if (shift === undefined) throw new Error('Cipher needs Key value to shift charecters')

    return string.split('').map(char => shiftCharacter(char, shift)).join('')
}

function shiftCharacter(char, shift) {
    if (/[a-zA-Z]/.test(char)) {
        const charBase = char.toLowerCase() === char ? 'a'.charCodeAt() : 'A'.charCodeAt()
        return String.fromCharCode((char.charCodeAt() - charBase + shift) % 26 + charBase)
    }
    return char
}

export { caeserCipher }