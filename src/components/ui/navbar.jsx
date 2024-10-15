import { Home, Book, Info, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DockNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-3xl shadow-lg">
      <div className="max-w-md mx-auto px-4">
        <ul className="flex justify-between items-center py-2">
          <li className="flex-1">
            <Link href="/" className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/recipe" className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Book className="w-6 h-6" />
              <span className="text-xs mt-1">Recipe</span>
            </Link>
          </li>
          <li className="flex-1 -mt-5">
            <Link href="/" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <Image
                  src="/img1.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/info" className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Info className="w-6 h-6" />
              <span className="text-xs mt-1">Info</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/login" className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}