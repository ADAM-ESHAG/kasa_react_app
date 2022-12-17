import {Navbar} from "../components/Navbar"
import {MainAbout} from "../components/MainAbout"
import {Footer} from "../components/Footer"

export function About() {
    return (
        <>
            <Navbar />
            <main className="main--about">
                <MainAbout />
            </main>
            <Footer />
        </>
    )
}
