import Image from 'next/image'

export const Description = ()=>{
    return(
        <section className='grid grid-cols-2 gap-x-5 max-w-4xl mx-auto p-8 rounded-lg mb-10 items-center'>
            <div className="flex items-center justify-center h-48 overflow-hidden">
            <Image 
                src="/images/description.jpeg" 
                alt="products marketplace" 
                layout="responsive"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow-lg shadow-white/20"/>
            </div>
            <div className="flex flex-col justify-center">   
                <h2 className="text-2xl font-semibold text-secondary mb-4">Description</h2>
                <p  className="text-lg leading-7 text-text-color">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio beatae, fugiat laudantium officia quas nostrum cupiditate, id aperiam expedita velit, eveniet modi similique minus. Deleniti aut architecto consequatur. Cumque!</p>
            </div>
        </section>
    )
}