"use client";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';

interface ProductViewItemsOrderProps {
  maxQuantity: number,
  product:ProductType
}

export const ProductViewItemsOrder = ({ maxQuantity, product }: ProductViewItemsOrderProps) => {
  
  const [counter, setCounter] = useState(1);
  const {addToCart} = useShoppingCart()
  
  const handleAddToCart = (event: SyntheticEvent)=>{
    event.preventDefault()
    addToCart({
      title: product.title,
      price: product.price,
      id: product.id,
      quantity: counter,
    })
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  }

  return (
    <div className="grid grid-cols-[auto_1fr] gap-[1.25rem] mt-[2rem]">
      <div className="flex gap-2 flex-nowrap items-center rounded-lg bg-border-color w-fit">
        <button 
            onClick={handleSubtract}
            className="flex justify-center items-center h-8 w-8 text-lg font-bold text-main-contrast bg-transparent border-none p-0 cursor-pointer"
        >
        -</button>
        <p className="m-0 text-[1.2rem] font-normal">{counter}</p>
        <button 
            onClick={handleAdd}
            className="flex justify-center items-center h-8 w-8 text-lg font-bold text-main-contrast bg-transparent border-none p-0 cursor-pointer"
        >+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full"
      >
        <button
          className="w-full h-12 flex flex-nowrap gap-2 items-center justify-center mt-4 p-2.5 border-none rounded-lg bg-gradient-to-r from-[rgb(193,98,253)] to-[rgb(0,49,165)] font-bold text-lg text-white"
          type="submit"
          onClick={handleAddToCart}
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  )
};