import Image from 'next/image'

export const Description = ()=>{
    return(
        <section className='grid grid-cols-2 gap-x-9 max-w-xl mx-auto p-5 rounded-lg mb-24'>
            <Image 
                src="/images/description.jpeg" 
                alt="products marketplace" 
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-lg shadow-white/20 w-500 h-300"/>
            <div>   
                <h2 className="text-2xl font-bold text-secondary mb-0">Description</h2>
                <p  className="text-lg leading-7 text-text-color">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio beatae, fugiat laudantium officia quas nostrum cupiditate, id aperiam expedita velit, eveniet modi similique minus. Deleniti aut architecto consequatur. Cumque!</p>
            </div>
        </section>
    )
}