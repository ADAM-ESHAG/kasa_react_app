import {Navbar} from "./Navbar"
import {MainAbout} from "./MainAbout"
import {Footer} from "./Footer"

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
