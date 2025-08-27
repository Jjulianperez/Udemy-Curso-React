import type { Product } from "../types";

type SetProductsType = (value: React.SetStateAction<Product[]>) => void


export const addProduct = (name:string, price: number ,products: Product[], setProducts: SetProductsType):void => {
    const newProduct = { id: Date.now(), name, price };
    setProducts([...products, newProduct]);

    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };