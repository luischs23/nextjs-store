import { validateAccessToken } from "app/utils/auth/validateAccessToke";
import Link from "next/link";
import { ShoppingCart } from "../ShoppingCart";

export const Header = async ()=>{
  const customer = await validateAccessToken()
    return (
        <header className="flex flex-row items-center px-8">
          <nav>
            <ul className="flex flex-row list-none gap-10 mx-auto py-8 justify-center text-secondary">
              <li className="text-lg font-normal no-underline">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className="text-lg font-normal no-underline">
                <Link href="/store">
                  Store
                </Link>
              </li>
              <li className="text-lg font-normal no-underline">
                <Link href="/signup">
                  Signup
                </Link>
              </li>
              <li className="text-lg font-normal no-underline">
                <Link href="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <div className="ml-auto flex flex-nowrap items-center gap-4">
            {customer?.firstName ? (<p>Hola! {customer?.firstName}</p>) : (
              <Link href="/login" className="text-gray-700 text-lg font-normal no-underline flex items-center cursor-pointer">
                Login
              </Link>)}
              <ShoppingCart />
          </div>
        </header>
    )
}