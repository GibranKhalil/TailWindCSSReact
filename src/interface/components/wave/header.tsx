export const HeaderWave = () => {
    return (
        <header className="w-screen">
            <nav className="flex w-full justify-between items-center px-8 py-4">
                <h1 className="cursor-pointer text-3xl font-bold">wave</h1>
                <ul className="flex gap-8">
                    <li className="cursor-pointer">Products</li>
                    <li className="cursor-pointer">Developers</li>
                    <li className="cursor-pointer">Use Cases</li>
                    <li className="cursor-pointer">Company</li>
                    <li className="cursor-pointer">Pricing</li>
                </ul>
                <div className="flex gap-2">
                    <button className="px-4 py-2">Log in</button>
                    <button className="px-4 py-2 bg-black text-white rounded-lg">Sign up</button>
                </div>
            </nav>
        </header>
    )
}