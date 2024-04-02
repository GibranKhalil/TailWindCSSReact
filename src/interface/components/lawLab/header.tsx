export const HeaderLawLab = () => {
    return (
        <header className="w-screen text-gray-200">
            <nav className="flex w-full px-12 py-8 justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer">LAW LAB</h1>
                <ul className="flex gap-12 items-center">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Expertise</li>
                    <li className="cursor-pointer">Resources</li>
                    <li className="cursor-pointer">News</li>
                </ul>
                <ul className="flex gap-4 items-center">
                    <li className="cursor-pointer">BR</li>
                    <li className="cursor-pointer">Contact us</li>
                </ul>
            </nav>
        </header>
    )
}