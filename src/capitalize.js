function capitalize(string) {
    if (typeof string === String) {
        throw new Error('Only supports String values')
    } else {
        return string[0].toUpperCase()
    }
}

export { capitalize }