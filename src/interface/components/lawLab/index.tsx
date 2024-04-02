import { HeaderLawLab } from "./header"
import { LawLabMain } from "./main"

export const LawLabPage = () => {
    return (
        <section className="min-h-screen bg-slate-950">
            <HeaderLawLab />
            <LawLabMain />
        </section>
    )
}