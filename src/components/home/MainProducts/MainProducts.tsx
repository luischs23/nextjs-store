import Image from 'next/image'

const getProducts = async () => {
  try {
    const response = await fetch(`https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
      })
    })
    const { products } = await response.json()
    return products
  } catch (error) {
    console.log(error)
  }
}

export const MainProduct = async () => {
  const products = await getProducts()
  
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