import { createContext,useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children})=>{
 
  const [cartItems, setCartItems] = useState( []);  // list of products
  const [totalPrice, setTotalPrice] = useState(0); // total price of items in cart
  const [totalQuantity, setTotalQuantity] = useState(0); // total quantity of items in cart

  function addToCart(product){
   
  }
  function removeFromCart(productId) {

  }
  function clearCart(){}
   
   function updateCartItemQuantity(productId, quantity){

   }

   return(
     <CartContext.Provider value={{ cartItems, totalPrice, totalQuantity, addToCart, removeFromCart, clearCart, updateCartItemQuantity }}>
        {children}
     </CartContext.Provider>
   )  
}

export {  CartContext   }