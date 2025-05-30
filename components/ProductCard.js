import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const inCart = cartItems.some(item => item.id === product.id);

  return (
   <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full relative">
      <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded text-sm">
        {product.stock > 0 ? `Stok: ${product.stock}` : "Stok Habis"}
      </div>


      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg text-black font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      {product.stock === 0 && (
        <p className="text-black-500 font-semibold mt-2">Stok Habis</p>
      )}

      <div className="text-gray-600 flex justify-between items-center mt-2">
        {inCart ? (
          <>
            <button 
              className="bg-red-500 text-black px-2 py-1 rounded"
              onClick={() => removeFromCart(product.id)}
              disabled={product.stock <= 1}>
              ➖
            </button>
            <span>{cartItems.find(item => item.id === product.id)?.quantity}</span>
            <button 
              className={`bg-blue-500 text-black px-2 py-1 rounded ${product.quantity >= product.stock === 0 ? 'bg-gray cursor-not-allowed' : ''}`}
              onClick={() => addToCart(product)}
              disabled={product.stock <= product.quantity}>
              ➕

            </button>
          </>
        ) : (
          <button 
            className={`mt-2 px-4 py-2 rounded
               ${product.stock === 0 ? 'bg-gray-500 opacity-50 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-600 text-white'}`}
            onClick={() => product.stock > 0 && addToCart(product)}
            disabled={product.stock === 0}>
            {product.quantity === 0 ? "Stok Habis" : "Tambahkan ke Keranjang"}
          </button>
        )}
      </div>
    </div>
  );
}