const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Error) return new Error(obj)
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof Set) return new Set([...obj])
    if (obj instanceof Map) return new Map([...obj])
    if (obj instanceof Symbol) return Symbol(obj.description)

    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    const symbolKeys = Object.getOwnPropertySymbols(obj);
    for (const key in symbolKeys) {
        const k = Symbol(key.description)
        newObj[k] = deepClone(obj[key])
    }
    return newObj;
}