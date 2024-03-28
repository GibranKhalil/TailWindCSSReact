import { Building2 } from "lucide-react"

export const HeaderCarShow = () => {
    return (
        <header className="w-full relative z-20">
            <nav className="px-8 py-4 w-full flex justify-between items-center gap-4">
                <span className="cursor-pointer "><Building2 size={46} /></span>
                <ul className="flex w-full gap-8">
                    <li className="cursor-pointer hover:text-gray-600 ">Carlos Felipe</li>
                    <li className="cursor-pointer hover:text-gray-600 ">João Silva</li>
                    <li className="cursor-pointer hover:text-gray-600 ">Noah Ramos</li>
                    <li className="cursor-pointer hover:text-gray-600 ">Justin Fill</li>
                </ul>
                <figure className="cursor-pointer w-2/12 overflow-hidden flex items-center gap-4 justify-end">
                    <img className="w-14 rounded-full" src="https://www.github.com/gibrankhalil.png" />
                    <p className="font-regular text-white">Gibran Khalil</p>
                </figure>
            </nav>
        </header>
    )
}