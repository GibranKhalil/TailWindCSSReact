import banner from '@/assets/banner.jpg'

export const MainComponent = () => {
    return (
        <main className="w-screen h-screen p-24 bg-gray-50 items-start">
            <section className='w-full flex rounded-3xl overflow-hidden -translate-y-16'>
                <img className='w-6/12' src={banner} />
                <div className='w-6/12 rounded-l-3xl bg-white p-16 -translate-x-6'>
                    <h1 className='text-7xl font-semibold '>Everything you need to scale a global team</h1>
                    <p className='text-xl my-12 font-medium text-gray-200'>Grow bigger with Stretch. Hire faster by adopting the best HR process, simpify payroll, and stay compliant, no matter where you team is located</p>
                    <div className='flex border-2 border-black pl-4 justify-between overflow-hidden rounded-xl'>
                        <input className='flex-1 outline-none' placeholder='Type your email' />
                        <button className='bg-black h-full px-4 py-3 text-white'>Request a Demo</button>
                    </div>
                </div>
            </section>
        </main>
    )
}