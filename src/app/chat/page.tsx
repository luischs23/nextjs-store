import { Chat } from "app/components/chat/chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/utils/openai/createAgent"
import { AnyARecord } from "dns"


export default async function ChatPage() {

  const products = await getProducts()
  const productTitles = products.map((product:any) => product.title)
  const flatProductTitles = productTitles.join("\n")
  const agent = createAgent(flatProductTitles)

    return(
        <>
            <h1>ChatBot</h1>
            <Chat agent={agent}/>
        </>
    )
}