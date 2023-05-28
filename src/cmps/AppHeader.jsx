import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import home from '../assets/svgs/home.svg'
import contacts from '../assets/svgs/contacts.svg'

export function AppHeader() {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    return (
        <header className="app-header flex">
            <nav className={user ? 'flex opacity-1' : 'flex opacity-0'}>
                <NavLink to="/" >
                    <img className="home" src={home} alt="home" />
                </NavLink>
                <NavLink to="/contact">
                    <img className="contacts" src={contacts} alt="contacts" />
                </NavLink>
            </nav>
        </header>
    )
}