import { validateAccessToken } from "app/utils/auth/validateAccessToke";
import Link from "next/link";

export const Header = async ()=>{
  const customer = await validateAccessToken()
    return (
        <header>
          <nav>
            <ul className="flex flex-row justify-center mx-auto py-2 gap-10 list-none text-secondary">
              <Link href="/">
                <li className="text-lg font-normal no-underline">Home</li>
              </Link>
              <Link href="/store">
                <li className="text-lg font-normal no-underline">Store</li>
                </Link>
              <Link href="/login">
                <li className="text-lg font-normal no-underline">Login</li>
              </Link>
              <Link href="/singup">
                <li className="text-lg font-normal no-underline">Sing Up</li>
              </Link>
            </ul>
            {customer?.firstName ? (<p>Hola! {customer?.firstName}</p>) : (<Link href="/login">Login</Link>)}
          </nav>
        </header>
    )
}