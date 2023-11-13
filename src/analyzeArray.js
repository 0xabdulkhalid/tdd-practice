function analyzeArray(array) {
    if (typeof array !== 'object' || (array.filter(el => typeof el === 'string')).length > 0) {
        throw new Error('Only accepts Array with Numerals')
    }

    return {
        min: Math.min(...array),
        max: Math.max(...array),
        average: array.reduce((sum, num) => sum + num, 0) / array.length,
        length: array.length
    }
}

export { analyzeArray }