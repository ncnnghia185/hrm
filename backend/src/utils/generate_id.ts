import { v4 as uuidv4 } from "uuid";

// generate Id
export const generateRandomId = (code: string) => {
    const uuid = uuidv4()
    const numbers = uuid.replace(/\D/g, '');
    let idDigits = numbers.slice(0, 8);
    if (idDigits.length < 8) {
        const padding = Array(8 - idDigits.length)
            .fill(0)
            .map(() => Math.floor(Math.random() * 10))
            .join('');
        idDigits += padding;
    }
    return `${code}_${idDigits}`;
}