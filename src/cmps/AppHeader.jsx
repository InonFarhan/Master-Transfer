import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { getSvg } from '../services/svg.service.js'

export function AppHeader() {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    return (
        <header className="app-header flex">
            <nav className={user ? 'flex opacity-1' : 'flex opacity-0'}>
                <NavLink to="/" >
                    <span
                        className="home"
                        dangerouslySetInnerHTML={{
                            __html: getSvg('home'),
                        }}
                    />
                </NavLink>
                <NavLink to="/contact">
                    <span
                        className="contacts"
                        dangerouslySetInnerHTML={{
                            __html: getSvg('contacts'),
                        }}
                    />
                </NavLink>
            </nav>
        </header>
    )
}