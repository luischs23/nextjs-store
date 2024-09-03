import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType
}

const priceTag = ("w-fit inline-block bg-red-500 text-white p-1 absolute top-[-0.5rem] right-[-1rem] rounded-lg transform rotate-5")

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/products/${product.handle}?id=${product.id}`} className="text-white no-underline cursor-pointer">
      <article className="flex flex-col relative">
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={250}
          width={250}
          loading="eager"
        />
        <div className="p-3 pt-0 rounded-lg">
          <h3>{product.title}</h3>
        </div>
        <span className={priceTag}>${product.price} USD</span>
      </article>
    </Link>
  );
};