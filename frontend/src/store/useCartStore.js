import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      // Cart state
      items: [],

      // Add item to cart
      addToCart: (item) => {
        const items = get().items;
        const existingItem = items.find((cartItem) => cartItem.id === item.id);

        // Normalize the item price to ensure it's a proper number
        const normalizedItem = {
          ...item,
          price: parseFloat(item.price).toString(),
        };

        if (existingItem) {
          // If item already exists, increase quantity
          set({
            items: items.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          // If item doesn't exist, add it with quantity 1
          set({
            items: [...items, { ...normalizedItem, quantity: 1 }],
          });
        }
      },

      // Remove item from cart
      removeFromCart: (itemId) => {
        set({
          items: get().items.filter((item) => item.id !== itemId),
        });
      },

      // Update item quantity
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(itemId);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
      },

      // Clear entire cart
      clearCart: () => {
        set({ items: [] });
      },

      // Get total number of items in cart
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // Get total price of cart
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = parseFloat(item.price) || 0;
          const quantity = item.quantity || 0;
          return total + price * quantity;
        }, 0);
      },

      // Check if item is in cart
      isInCart: (itemId) => {
        return get().items.some((item) => item.id === itemId);
      },
    }),
    {
      name: "cart-storage", // unique name for localStorage key
    }
  )
);

export default useCartStore;
