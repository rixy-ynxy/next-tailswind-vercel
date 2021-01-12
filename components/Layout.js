import Head from "next/head";
import Link from "next/link";

export default function Layout({children, title = "HP by Nextjs"}) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rouded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rouded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rouded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-20 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://yunixy.co.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img 
          src="/logo.png"
          width={60}
          height={60}
          alt="Yunixy Logo"
          className="h-15 ml-2" />
        </a>
      </footer>
    </div>
  )
  
}
