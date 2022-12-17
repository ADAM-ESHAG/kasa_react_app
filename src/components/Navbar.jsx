//----Navbar components-----//

import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src="/images/LOGO.webp" alt="kasa-logo" className='nav--logo'/>
                <ul className='nav--pages'>
                    <li><Link to='/' className='nav--link'>ACCUEIL</Link></li>
                    <li><Link to='/About' className='nav--link'>A PROPOS</Link></li>
                </ul>
            </nav>
        </header>
    )
}