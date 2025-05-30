import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
const data = await res.json();
return data.map(product => ({...product,
quantity: 1,
stock: Math.floor(Math.random() * 10) + 1
}));
};

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.slice(0, 10).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}