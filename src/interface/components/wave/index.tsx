import { HeaderWave } from "./header"
import { MainWave } from "./main"

export const WavePage = () => {
    return (
        <section className=" w-screen h-screen bg-amber-50">
            <HeaderWave />
            <MainWave />
        </section>
    )
}