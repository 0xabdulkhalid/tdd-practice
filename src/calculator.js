class Calculator {
    static add(a, b) {
        this.verifyDatatype(a, b)
        return a + b
    }

    static subract(a, b) {
        this.verifyDatatype(a, b)
        return a - b
    }

    static multiply(a, b) {
        this.verifyDatatype(a, b)
        return a * b
    }

    static divide(a, b) {
        this.verifyDatatype(a, b)
        return a / b
    }

    static verifyDatatype(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Only Number data type is accepted')
        }
    }
}

export { Calculator }