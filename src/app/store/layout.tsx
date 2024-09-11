import { getCollections } from "app/services/shopify/collections";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {title: "Categorias"};

export const runtime = "edge"

export default async function Layout({ children }:{ children: React.ReactNode}){
    const collections = await getCollections();
    return (
        <main className="flex flex-col px-16 mx-auto">
            <h1 className="text-4xl pb-4 pt-4">Explore</h1>
            <nav>
                <ul className="list-none p-0 m-0 flex flex-wrap gap-x-4 mb-8">
                    {
                    collections.map((collection:any)=>(
                        <Link key={collection.id} href={'/store/'+ collection.handle} className="bg-gradient-to-r from-purple-500 to-blue-700 rounded-lg px-4 py-2 text-white">
                            {collection.title}
                        </Link>
                    ))
                    }
                </ul>
            </nav>
            {children}
        </main>
    )
}