"use client"
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

export const ShoppingCart = () =>{
    const [countItems,setCountItems]= useState(0)
    return(
        <button className="relative bg-transparent border-none cursor-pointer text-text-color">
            <span className="absolute bg-main-contrast text-text-color rounded-full p-1 top-[-0.5rem] left-[-0.25rem] z-10 w-4 h-4 text-[0.5rem] flex items-center justify-center">{countItems}</span>
            <FaCartArrowDown className="w-6 h-6 fill-current"/>
        </button>
    )
}