import { createContext, useContext } from "react";
import { AuthData } from "./authContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userData, setUserData, token } = useContext(AuthData);

  // Get current logged-in user
  const currentUser = userData?.find((u) => u.name === token);

  //  Add item to user's cart
  function addToCart(product) {
    if (!token) {
      alert("Please login first!");
      return;
    }

    const updatedUsers = userData.map((user) => {
      if (user.name === token) {
        const existingItem = user.cart?.find((item) => item.id === product.id);
        if (existingItem) {
          return {
            ...user,
            cart: user.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...user,
            cart: [...(user.cart || []), { ...product, quantity: 1 }],
          };
        }
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    alert(` This product added to cart`);
  }

  //  Remove item from cart
  function removeFromCart(productId) {
    if (!token) return;
    const updatedUsers = userData.map((user) => {
      if (user.name === token) {
        return {
          ...user,
          cart: user.cart.filter((item) => item.id !== productId),
        };
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  }

  //  Update quantity
  function updateCartItemQuantity(productId, newQty) {
    if (!token) return;
    const updatedUsers = userData.map((user) => {
      if (user.name === token) {
        return {
          ...user,
          cart: user.cart.map((item) =>
            item.id === productId ? { ...item, quantity: newQty } : item
          ),
        };
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  }

  //  Clear cart
  function clearCart() {
    if (!token) return;
    const updatedUsers = userData.map((user) =>
      user.name === token ? { ...user, cart: [] } : user
    );

    setUserData(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  }

  //  Totals (safe for no user)
  const cartItems = currentUser?.cart || [];
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalPrice,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
