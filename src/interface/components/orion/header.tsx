export const HeaderOrion = () => {
    return (
        <header className="w-screen">
            <nav className="flex w-full justify-between py-4 px-8 items-center">
                <h1 className="cursor-pointer text-2xl font-bold">Orion</h1>
                <ul className="flex w-6/12 justify-between">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About us</li>
                    <li className="cursor-pointer">Search tour</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
                <button className="duration-300 px-4 py-2 bg-amber-400 text-white font-medium hover:bg-amber-500">Get started</button>
            </nav>
        </header>
    )
}