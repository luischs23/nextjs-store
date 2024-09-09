"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

export const ShoppingCart = () =>{
    const {cart} = useShoppingCart()
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(!isOpen);
    return(
        <button onClick={handleOpen} className="relative bg-transparent border-none cursor-pointer text-text-color">
            <span className="absolute bg-main-contrast text-text-color rounded-full p-1 top-[-0.5rem] left-[-0.25rem] z-10 w-4 h-4 text-[0.5rem] flex items-center justify-center">
                {cart.length}
            </span>
            <FaCartArrowDown className="w-6 h-6 fill-current"/>
            {isOpen && (
            <div className="absolute bg-primary border border-border-color rounded-lg right-0 max-w-[320px] min-w-[250px] p-4">
                {
                    cart.map(item => (
                        <>
                            <p key={item?.id}>{item?.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </>
                    ))
                }
                <button className="bg-main-contrast text-text-color w-full p-2 rounded-lg font-bold cursor-pointer">
                    Buy
                </button>
            </div>
            )}
        </button>
    )
}