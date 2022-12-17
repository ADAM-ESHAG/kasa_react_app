//----Logement components----//

import {Navbar} from "../components/Navbar"
import {MainLogement} from "../components/MainLogement"
import {Footer} from "../components/Footer"

export function Logement() {

    return (
        <>
            <Navbar />
            <main className="main--logement">
                <MainLogement />
            </main>
            <Footer />
        </>
    )
}
