"use client"
import Image from "next/image"

export default function GlobalError({reset}: ErrorPageProps){
    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold linearg bg-clip-text text-transparent">Ha ocurrido un error</h1>
            <Image 
                src="/images/error.png" 
                width={500} 
                height={500} 
                alt="Error"
            />
            <p className="text-lg">Al parecer a ocurrido un error</p>
            <button onClick={reset} className="block w-fit font-bold text-lg linearg text-white rounded-md cursor-pointer mt-4 p-4 border-none border-r-2">Volver a intentar</button>
        </main>
    )
}