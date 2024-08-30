'use client'

import { useEffect } from "react";
import { Description } from "../../components/home/Description";
import { Hero } from "../../components/home/Hero";

export default function HomeLayout({children}:{children: React.ReactNode}){
    
    useEffect(()=>{
        console.log("envio de metricas")
    },[])
    
    return(
        <div>
            <Hero />
            <Description />
            {children}        
        </div>
    )
}