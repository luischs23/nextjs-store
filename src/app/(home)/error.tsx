"use client"

import { useEffect } from "react";

interface ErrorProps{
    error: Error;
    reset:()=>void;
}

export default function Error({error,reset}: ErrorProps){
    useEffect(()=>{
        console.log(error)
    },[])

    return(
        <div className="p-40">
            <h1>Something went wrong</h1>
            <p>Page no found</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}