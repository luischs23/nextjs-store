"use client"

interface ErrorProps{
    error: Error;
    reset:()=>void;
}

export default function Error({error,reset}: ErrorProps){
    return(
        <div className="p-40">
            <h1>Something went wrong</h1>
            <p>Page no found</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}