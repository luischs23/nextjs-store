"use client";
import Image from 'next/image'
import { FaRegTrashCan } from "react-icons/fa6";
import { useShoppingCart } from 'app/hooks/useShoppingCart';

interface ShoppingCartItemProps {
  item: CartItem
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {

  const { removeCartItem } = useShoppingCart();

  return (
    <div className="flex flex-row gap-4 items-center">
      <Image src={item.image} alt={item.title} width={48} height={48} />
      <div className="grid grid-cols-[auto_1rem] gap-4 w-full items-center">
        <p className="font-bold text-xs text-text-color text-left">{item?.title}</p>
        <span className="w-4 h-4">x{item.quantity}</span>
      </div>
      <button 
        onClick={() => removeCartItem(item)} 
        className="bg-transparent border-none cursor-pointer text-text-color text-xs font-bold text-right p-0 m-0 hover:text-main-contrast hover:underline"
        aria-label='trash'>
        <FaRegTrashCan />
      </button>
    </div>
  )
}