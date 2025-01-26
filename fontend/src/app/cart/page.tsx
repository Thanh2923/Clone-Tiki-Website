"use client"
import CartItem from "@/components/cart/CartItem";
import CartPurchase from "@/components/cart/CartPurchase";
import ProductItem from "@/components/product/ProductItem";
import { Cart, Product } from "@/types";
import { useCallback, useEffect, useState } from "react";
interface Products{
  currentPage:number,
  products:Product[],
  totalPages:number
}
const CartPage: React.FC = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState<Products>({
    currentPage: 1,
    products: [],
    totalPages: 1,
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItem, setCartItem] = useState<Cart[]>([]); // Sửa lại kiểu từ Cart thành Cart[]
  const handleSetTotal = useCallback((total: number) => {
    setTotalPrice(total);
  }, []);

  const handleCartItem = useCallback((cartItems: Cart[]) => {
   setCartItem(cartItems)
  }, []);
 // Fetch products data
 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/product`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: Products = await response.json();
        setProducts(data); // Lấy danh sách sản phẩm từ API
    } catch (error) {
      console.error(error);
    }
  };

  fetchProducts();
}, [API_URL]);

  return (
    <div className="w-full">
      <h1 className="text-2xl text-gray-700 font-bold mb-4">GIỎ HÀNG</h1>
      <div className="w-full flex gap-2">
        <div className="lg:w-[70%] w-full">
          <CartItem handleSetTotal={handleSetTotal} handleCartItem={handleCartItem} />
          <ProductItem data={products}/>
        </div>
        <div className="lg:w-[30%]">
          <CartPurchase totalPrice={totalPrice} cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
