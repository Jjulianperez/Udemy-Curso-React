
import type { Product } from "../types";

export const calculateTotalWithTax = (products: Product[]): number => {
    return products.reduce((acc, p) => acc + p.price * 1.21, 0);
};