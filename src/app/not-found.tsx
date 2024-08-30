"use client"
import Image from "next/image"
import Link from "next/link"

export default function NotFound(){
    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold linearg bg-clip-text text-transparent m-0">Ha ocurrido un error</h1>
            <Image 
                src="/images/404.png"
                alt="404" 
                width={300} 
                height={300} 
            />
            <h2 className="text-2xl m-0">Uy, parece que el enlace se escondio</h2>
            <p className="text-lg">Pero nuestra tienda esta abierta las 24/7</p>
            <Link href="/store" className="block w-fit font-bold text-lg linearg text-white rounded-md cursor-pointer mt-4 p-4 border-none border-r-4">
                !Vamos de compras!
            </Link>
        </main>
    )
}