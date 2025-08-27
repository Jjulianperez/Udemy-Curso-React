// Product.tsx
import React, { useState } from "react";
import type {Product} from '../types'
import { addProduct } from "../LocalStorage/SaveProducts";


const ProductComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const calculateTotalWithTax = () => {
    // 🚨 Viola SRP: lógica de impuestos metida dentro del componente
    return products.reduce((acc, p) => acc + p.price * 1.21, 0);
  };

  return (
    <div>
      <h2>Productos</h2>
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
      <button onClick={()=> addProduct(name, price ,products, setProducts)}>Agregar</button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>

      <p>Total con impuestos: {calculateTotalWithTax()}</p>
    </div>
  );
};

export default ProductComponent;
