import { HeaderCarShow } from "./header"
import { MainCarShow } from "./main"

export const CarShowPage = () => {
    return (
        <section>
            < div className="bg-01 w-screen h-screen bg-no-repeat bg-cover absolute z-0" />
            <div className="w-4/12 bg-black h-screen absolute right-0 z-10 opacity-50"></div>
            <HeaderCarShow />
            <MainCarShow />
        </section >
    )
}