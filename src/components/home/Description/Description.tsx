'use client'
import Image from 'next/image'
import classNames from 'classnames/bind'
import { useState } from 'react'

export const Description = ()=>{
    const [hasBorder, setBorder] = useState(false);
    const handleClick = ()=>setBorder(!hasBorder);

    const cx = classNames.bind({});
    const imageStyle = cx('rounded-lg shadow-lg shadow-white/20',{
        'border-4 border-red-500':hasBorder})

    return(
        <section className='grid grid-cols-2 gap-x-5 max-w-4xl mx-auto p-8 rounded-lg mb-10 items-center'>
            <button onClick={handleClick} className="bg-transparent border-none cursor-pointer">
                <div className="relative w-full h-48 overflow-hidden flex items-center justify-center ">
                <Image 
                    src="/images/description.jpeg" 
                    alt="products marketplace" 
                    fill
                    className={imageStyle}
                    style={{objectFit: 'cover', objectPosition: 'center'}}/>
                </div>
            </button>
            <div className="flex flex-col justify-center">   
                <h2 className="text-2xl font-semibold text-secondary mb-4">Description</h2>
                <p  className="text-lg leading-7 text-text-color">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio beatae, fugiat laudantium officia quas nostrum cupiditate, id aperiam expedita velit, eveniet modi similique minus. Deleniti aut architecto consequatur. Cumque!</p>
            </div>
        </section>
    )
}