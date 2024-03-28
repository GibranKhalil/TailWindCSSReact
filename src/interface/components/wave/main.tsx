export const MainWave = () => {
    return (
        <main className="flex flex-col items-center gap-24 h-full  py-20">
            <div className="text-center w-full flex flex-col items-center">
                <h1 className="text-8xl w-6/12 font-semibold text-center mb-8">Connect to bank accounts for free</h1>
                <p className=" font-medium w-4/12 text-gray-700">An effective, fast, and reliable way to make sense of raw transaction data received from banks, all in one single product.</p>
            </div>
            <div className="border-black border-2 w-6/12 flex rounded-lg overflow-hidden">
                <input className="pl-4 flex-1 bg-white outline-none" placeholder="Type your email" />
                <button className="bg-black text-white px-8 py-4">Get Started</button>
            </div>
        </main>
    )
}