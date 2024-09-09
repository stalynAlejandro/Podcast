export const isSameDay = (d1: Date | undefined, d2: Date | undefined) =>
    d1 !== undefined && d2 !== undefined &&
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
