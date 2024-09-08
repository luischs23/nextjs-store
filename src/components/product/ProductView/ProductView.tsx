import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML/SanitizeHTML";

interface ProductViewProps {
  product: ProductType
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className="max-w-[1200px] mx-auto grid grid-cols-[1fr_450px] gap-[5rem] mt-[5rem]">
      <section className="justify-self-end">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
          className="rounded-lg"
        />
      </section>
      <section className="flex flex-col">
        <h1 className="text-2xl font-bold mt-0 mb-2">{product.title}</h1>
        <p className="w-fit text-lg leading-6 tracking-tighter border-2 border-main-contrast text-text-color text-glow py-2 px-4 rounded-xl mt-4 mb-0">
          {product.tags}</p>
        <SanitizeHTML tag="p" className="text-[1.125rem] leading-[1.5] tracking-[0.5px] my-4">
          {product.description}
        </SanitizeHTML>
        <span className="text-color-secondary text-[2.125rem] font-bold">
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} product={product}/>
      </section>
    </main>
  )
};