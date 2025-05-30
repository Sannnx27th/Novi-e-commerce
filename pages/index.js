import ProductList from "../components/ProductList";
import IkonKeranjang from "../components/IkonKeranjang";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen container mx-auto p-6">
      <h1 className="text-2xl text-black font-bold text-center mb-4">Novi Store</h1>
      <ProductList />
      <IkonKeranjang />
    </div>
  );
}