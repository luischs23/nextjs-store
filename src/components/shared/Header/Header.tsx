import Link from "next/link";

export const Header = ()=>{
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
              <Link href="/test">
                <li className="text-lg font-normal no-underline">Test</li>
              </Link>
            </ul>
          </nav>
        </header>
    )
}