import Logo from '../icons_assets/Logo.svg'
import './style.css'

const Header = ()=>{
    return(
        <header>
            <img className='logo' src={Logo} height='50px'></img>
            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;