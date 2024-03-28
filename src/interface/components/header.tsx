function Header() {

  return (
    <header className="w-screen px-8 py-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold cursor-pointer">stretch.</h1>
        <ul className="flex gap-12 justify-center">
          <li className="duration-300 hover:-rotate-12 cursor-pointer">Plataform</li>
          <li className="duration-300 hover:-rotate-12 cursor-pointer">Plataform</li>
          <li className="duration-300 hover:-rotate-12 cursor-pointer">Plataform</li>
          <li className="duration-300 hover:-rotate-12 cursor-pointer">Plataform</li>
          <li className="duration-300 hover:-rotate-12 cursor-pointer">Plataform</li>
        </ul>
        <div className="flex gap-3">
          <button className="px-4 py-2 duration-300 hover:text-slate-400">Log in</button>
          <button className="px-4 py-2 border-2 rounded-lg border-black duration-300 hover:bg-slate-200 ">Get started</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
