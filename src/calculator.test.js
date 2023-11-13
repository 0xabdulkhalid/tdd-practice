import { Calculator } from "./calculator";

test('Addition of 5,5', () => {
    expect(Calculator.add(5, 5)).toBe(10)
})

test('Subraction of 15,5', () => {
    expect(Calculator.subract(15, 5)).toBe(10)
})

test('Multiplication of 5,5', () => {
    expect(Calculator.multiply(5, 5)).toBe(25)
})

test('Division of 50,5', () => {
    expect(Calculator.divide(50, 5)).toBe(10)
})

test('Addition of 10, 20 in Strings', () => {
    expect(() => {
        Calculator.add('10', '20')
    }).toThrow(Error)
})

test('Subraction of 10, 20; Where 10 is in String and 20 is in Number Datatype', () => {
    expect(() => {
        Calculator.subract('10', 20)
    }).toThrow(Error)
})