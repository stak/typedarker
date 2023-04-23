import Link from 'next/link'

const header = () => {
  return (
    <header>
      <nav className="absolute p-0 m-0">
        <ul className="flex items-center space-x-2">
          <li className="px-4 text-slate-200 font-bold">
            <Link href="/">TypeDarker</Link>
          </li>
          <li className="p-2 hover:bg-gray-600">
            <Link href="/analyzer">Analyzer</Link>
          </li>
          <li className="p-2 hover:bg-gray-600">
            <Link href="/cost">Cost</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default header
