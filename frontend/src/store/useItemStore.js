import { create } from 'zustand';

const useItemsStore = create((set, get) => ({
  items: [],
  itemsLoading: false,
  cartItems: [],

  fetchItems: async () => {
    set({ itemsLoading: true })
    try {
      // API for fetching items
      const res = await fetch('/items')
      const data = await res.json()
      set({ items: data })
    } catch (error) {
      console.error('Failed to fetch items:', error)
    } finally {
      set({ itemsLoading: false })
    }
  },

  addItem: async (newItem) => {
    // API for adding a new item
    const res = await fetch('/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
    const created = await res.json()
    set((state) => ({ items: [...state.items, created] }))
  },

  addToCart: (item) => {
    // only add if item is not already in cart
    if(get().cartItems.some(cartItem => cartItem.id === item.id)) {
      return;
    }
    set((state) => ({
      cartItems: [...state.cartItems, item]
    }))
    // save to localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
  },

  removeFromCart: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== itemId)
    }))
    // remove from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const updatedCart = cart.filter(item => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  },

  loadFromStorage: () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    set({ cartItems: storedCart })
  },
  
  clearCart: () => {
    set({ cartItems: [] })
    localStorage.removeItem('cart')
  }
}))

export default useItemsStore
