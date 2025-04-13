export const formatCurrency = (value: string | number): string => {
    const numberValue = typeof value === "string" ? parseFloat(value) : value;

    if (isNaN(numberValue)) return "0";

    return numberValue.toLocaleString("vi-VN");
}

export const unformatCurrency = (value: string): number => {
    return parseFloat(value.replace(/\./g, ""));
}