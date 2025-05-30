import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const router = useRouter();
  const { cartItems } = useCart();

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer"
         onClick={() => router.push('/cart')}>
      🛒 {cartItems.length}  
    </div>
  );
}