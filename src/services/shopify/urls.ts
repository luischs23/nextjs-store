import { env } from "process"

export const shopifyUrls = {
    products:{
        'all':`https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/products.json`
    },
    
    collections:{
        'all':`https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/smart_collections.json`,
        'products':(id:string)=> `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-07/collections/${id}/products.json`
    }
}