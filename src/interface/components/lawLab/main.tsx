import lawLabBanner from '@/assets/lawLab.png'
import seniorLaw from '@/assets/seniorLaw.jpg'

export const LawLabMain = () => {
    return (
        <main className="text-white h-full">
            <section className="flex w-full items-center mt-12 justify-center h-full">
                <article className="w-2/12 flex flex-col justify-between h-full min-h-96">
                    <div className='flex flex-col gap-3'>
                        <p className="text-lg">Expowering justice seekers through legal navigation.</p>
                        <div className="bg-red-900 w-10 h-2" />
                    </div>
                    <div className='flex items-end gap-4'>
                        <img className='w-24' src={seniorLaw} alt='advogado senior' />
                        <div>
                            <h1 className='text-4xl font-bold'>50+</h1>
                            <p>Legal Elder</p>
                        </div>
                    </div>
                </article>
                <article className="w-9/12 flex items-center justify-center gap-64">
                    <div className='w-2/12 flex flex-col gap-16'>
                        <h1 className="text-8xl font-bold">LEGAL INSIGHT HUB</h1>
                        <button className="bg-red-600 text-white px-9 py-3">Contact Now</button>
                    </div>
                    <figure className='w-4/12 relative rotate-12 overflow-hidden'>
                        <div className='bg-gray-600 bg-opacity-20 absolute top-0 left-0 right-0 bottom-0  '></div>
                        <img className='w-full -rotate-12 translate-y-8 translate-x-4' src={lawLabBanner} alt="Foto de advogado" />
                    </figure>
                </article>
            </section>
        </main>
    )
}