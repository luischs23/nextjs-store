import { ProductCard } from '../ProductCard/ProductCard'

interface ProductsWrapperProps {
    products: ProductType[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className="grid grid-cols-4 grid-cols-[repeat(auto-fill, 320px)] gap-x-4 gap-y-8 justify-items-center justify-content-center mt-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}