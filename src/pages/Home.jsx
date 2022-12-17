//---Home page---//
import {Navbar} from "../components/Navbar"
import {MainContent} from "../components/MainContent"
import {Footer} from "../components/Footer"
import data from "../components/data"
export function Home() {

    const myData = data.map(item => {
        return (
          <MainContent 
              key={item.id}
              item={item}
          />
        )
      })

    return (
        <div className="container">
            <Navbar />
            <div className='background--image'>
                <img src="/images/head-background.webp" alt="background/webp" />
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
            <main className="mainContent">
                {myData}
            </main>
            <Footer />
        </div>
    )
}