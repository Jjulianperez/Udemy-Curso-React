import type { Product } from "../types"
import { useState } from "react";


export const InputAddProducts: React.FC = ()=>{
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

  const addProduct = () => {
    const newProduct = { id: Date.now(), name, price };
    setProducts([...products, newProduct]);

    // 🚨 Viola SRP: lógica de almacenamiento y negocio dentro del mismo componente
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };
    return(
      <>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button onClick={addProduct}>Agregar</button>
      </>
    )
}