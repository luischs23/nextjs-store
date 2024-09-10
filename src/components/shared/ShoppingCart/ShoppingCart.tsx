"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { handleCreateCart } from "app/actions";

export default function ShoppingCart(){
    const {cart} = useShoppingCart()
    const [isBuying, setIsBuying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const hasItems = cart.length > 0;

    const handleOpen = () => {
        if (hasItems) {
          setIsOpen(!isOpen)
        }
      }

    const handleBuy = async () => {
        try {
          setIsBuying(true);
          const checkoutUrl = await handleCreateCart(cart);
          if(!checkoutUrl) throw new Error('Error creating checkout');
          window.localStorage.removeItem('cart');
          window.location.href = checkoutUrl;
        } catch (error) {
          console.log(error);
        } finally {
          setIsBuying(false);
        }
      }

    return( 
        <div className="relative text-text-color">
            {
             hasItems && (
                <span className="flex items-center justify-center absolute rounded-full bg-main-contrast text-text-color p-1 top-[-0.5rem] right-[-0.25rem] z-10 w-3 h-3 text-[0.65rem] font-bold">
                    {cart.length}
                </span>
            )
            }
      <button className="bg-transparent border-none cursor-pointer p-2" onClick={handleOpen}>
        <FaCartArrowDown />
      </button>
            {isOpen && (
            <div className="flex flex-col gap-2 absolute bg-color-primary border border-border-color rounded-md right-0 min-w-[250px] p-4 z-20">
                {
                    cart.map(item => (<ShoppingCartItem key={item.id} item={item} />))
                }
                <button 
                    onClick={handleBuy}
                    disabled={isBuying}
                    className={`bg-main-contrast text-text-color w-full py-2 rounded-md border-none font-bold mt-4 ${
                        isBuying ? 'bg-color-primary text-text-color border border-border-color cursor-not-allowed' : ''
                      }`}>
                    Buy
                </button>
            </div>
            )}
        </div>
    )
}