import banner from '@/assets/travelIlustration.png'
import { MoveRight } from 'lucide-react'
import { InputLabel } from './components/inputs'

export const MainOrion = () => {
    return (
        <main className='flex h-full'>
            <div className='flex flex-col w-6/12 justify-center gap-8 px-8'>
                <h1 className='text-6xl font-semibold'>Enjoy Your Journey With Our Agency</h1>
                <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi aut quo minima dolor, autem dolorum libero aperiam doloremque et ad fugit eligendi facere nemo? Ipsum quas ad rem autem.</p>
                <button className='duration-300 flex items-center gap-4 w-3/12 text-left py-2 text-lg font-bold hover:text-gray-600 '>Read more <MoveRight size={20} /></button>
            </div>
            <figure>
                <img src={banner} alt="Travel ilustration" />
            </figure>
            <div className='gap-2 absolute bottom-20 left-4 bg-gray-50 p-4 flex'>
                <InputLabel label={"Destination"} placeholder='Amsterdam' />
                <InputLabel label={"Date"} placeholder='01/02/2021' />
                <InputLabel label={"Price"} placeholder='$500 - $1000' />
                <button className="duration-300 px-10 bg-amber-400 text-white font-medium hover:bg-amber-500">Search</button>
            </div>
        </main>
    )
}