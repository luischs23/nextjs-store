import { getCollections } from "app/services/shopify/collections";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {title: "Categorias"};

export default async function Layout({ children }:{ children: React.ReactNode}){
    const collections = await getCollections();
    return (
        <main>
            <nav>
                {
                    collections.map((collection:any)=>(
                        <Link key={collection.id} href={'/store/'+ collection.handle}>
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}