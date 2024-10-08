import { getMainProducts } from 'app/services/shopify/products';
import Image from 'next/image'

export const MainProduct = async () => {

  // const response = await fetch('http://localhost:3000/api')
  // const {products} = await response.json()
  const products = await getMainProducts();
  
  return (
    <section className="text-center text-3xl">
      <h3>✨ New products released!</h3>
      <div className="grid w-full grid-cols-2 grid-rows-[400px_400px]">
        {products?.map((product:any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id} className='relative z-1 min-h-[400px]'>
              <p className='absolute top-0 right-6 z-2 text-lg font-bold max-w-[300px] text-right'>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" className=' h-[400px] opacity-40 object-cover'/>
            </article>
          )
        })}
      </div>
    </section>
  )
}