// Utility function for generating a simple counter
let counter = 0;

export const tcsCounter = (): string => {
    counter += 1;
    return `TC${counter.toString().padStart(2, '0')}`;
};