import { create } from 'zustand'

type Store = {
  cart: CartItem[]
  addToCart: (cartItem:CartItem) => void
}

export const useShoppingCart = create<Store>()((set) => ({ //Este es nuestro hook
  cart: [],
  addToCart: (cartItem:CartItem) => set((state) => ({ cart: [...state.cart, cartItem] })),
}))