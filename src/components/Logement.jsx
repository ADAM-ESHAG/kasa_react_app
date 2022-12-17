//----Logement components----//

import {Navbar} from "./Navbar"
import {MainLogement} from "./MainLogement"
import {Footer} from "./Footer"

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
