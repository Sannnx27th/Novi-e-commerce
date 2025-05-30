import { useCart } from "../context/CartContext";

export default function CartDetail() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Keranjang Anda</h1>

      {cartItems.length === 0 ? (
        <p>Belum ada produk.</p>
      ) : (
        cartItems.map(product => (
          <div key={product.id} className="flex justify-between items-center border-b py-2">
            <span>{product.title} - ${product.price}</span>
            <div className="flex items-center gap-2">
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromCart(product.id)}>➖</button>
              <span>{product.quantity}</span>
              <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => addToCart(product)}>➕</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}