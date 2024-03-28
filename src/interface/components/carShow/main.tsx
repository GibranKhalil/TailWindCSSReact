import { useRef } from "react"
import { CardOrange } from "./components/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const MainCarShow = () => {
    const ref = useRef<React.ElementRef<"div">>(null)

    function leftClick(e: React.SyntheticEvent<HTMLElement>) {
        e.preventDefault();
        if (ref.current) {
            ref.current.scrollLeft -= ref.current.offsetWidth - 150
        }
    }
    function rightClick(e: React.SyntheticEvent<HTMLElement>) {
        e.preventDefault();
        if (ref.current) {
            ref.current.scrollLeft += ref.current.offsetWidth - 150
        }
    }

    return (
        <main className="relative z-20 flex flex-col justify-center h-screen">
            <div className="flex w-full flex-1 justify-between p-8 items-end">
                <article className="max-h-32 text-center bg-black bg-opacity-50 p-4 flex gap-4">
                    <div>
                        <p className="text-md font-regular text-white">Chambers</p>
                        <h1 className="text-5xl font-medium text-white">85</h1>
                    </div>
                    <div>
                        <p className="text-md font-regular text-white">Mayme</p>
                        <h1 className="text-5xl font-medium text-white">63</h1>
                    </div>
                </article>
                <div className="relative w-5/12 ">
                    <div ref={ref} className="flex w-full gap-8 overflow-scroll scroll-smooth scroll-hidden  ">
                        <CardOrange description="Truck Side Advertising Isn't It time" number={1} text="OLLIE POPE AMANDA GIB" /><CardOrange description="Truck Side Advertising Isn't It time" number={1} text="OLLIE POPE AMANDA GIB" />
                        <CardOrange description="Truck Side Advertising Isn't It time" number={1} text="OLLIE POPE AMANDA GIB" /><CardOrange description="Truck Side Advertising Isn't It time" number={1} text="OLLIE POPE AMANDA GIB" />
                        <CardOrange description="Truck Side Advertising Isn't It time" number={1} text="OLLIE POPE AMANDA GIB" /><CardOrange description="Truck Side Advertising Isn't It time" number={1} text="OLLIE POPE AMANDA GIB" />
                    </div>
                    <button onClick={(e) => rightClick(e)} className="absolute right-0 top-2/4 -translate-y-2/4 p-4 bg-gray-200 rounded-full bg-opacity-55"><ChevronRight /></button>
                    <button onClick={(e) => leftClick(e)} className="absolute left-0 top-2/4 -translate-y-2/4 p-4 bg-gray-200 rounded-full bg-opacity-55"><ChevronLeft /></button>
                </div>
            </div>
            <footer className="bg-black bg-opacity-50 flex-1 mt-24 max-h-60">
                <ul className="text-white flex justify-between p-4 items-start">
                    <li className="flex-1 max-w-60 flex flex-col gap-4 text-left">
                        <p className="text-gray-300">Cook Wisely</p>
                        <p>Top things to see during a holiday in Hong Kong</p>
                    </li>
                    <li className="flex-1 max-w-60 flex flex-col gap-4 text-left">
                        <p className="text-gray-300">Famous</p>
                        <h1 className="text-4xl font-semibold">Franklin</h1>
                    </li>
                    <li className="flex-1 max-w-60 flex flex-col gap-4 text-left">
                        <p className="text-gray-300">Top 3 Reasons</p>
                        <h1 className="text-4xl font-semibold">Sam</h1>
                    </li>
                    <li className="flex-1 max-w-60 flex flex-col gap-4 text-left">
                        <p className="text-gray-300">Deep</p>
                        <h1 className="text-4xl font-semibold">Millie</h1>
                    </li>
                    <li className="flex-1 max-w-60 flex flex-col gap-4 text-right items-end">
                        <p className="text-gray-300">Noah Ramos</p>
                        <button className="duration-300 border-white border-2 max-w-40 px-8 py-2 hover:bg-gray-900">Abbie Tate</button>
                    </li>
                </ul>
            </footer>
        </main>
    )
}