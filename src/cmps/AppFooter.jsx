import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'
import { getSvg } from '../services/svg.service.js'

export function AppFooter() {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    return (
        <section>
            <section className="footer footer-1 flex justify-center">
                InonFarhan - fullstack developer 2023 &copy;
            </section>
            <section className="footer footer-2 flex justify-center">
                <nav className={user ? 'flex opacity-1' : 'flex opacity-0'}>
                    <NavLink to="/" >
                        <span
                            className="home"
                            dangerouslySetInnerHTML={{
                                __html: getSvg('lightHome'),
                            }}
                        />
                    </NavLink>
                    <NavLink to="/contact">
                        <span
                            className="contacts"
                            dangerouslySetInnerHTML={{
                                __html: getSvg('lightContacts'),
                            }}
                        />
                    </NavLink>
                    <NavLink className="setting" to={`/edit/${user?._id}`}>
                        <span
                            className="setting"
                            dangerouslySetInnerHTML={{
                                __html: getSvg('lightSetting'),
                            }}
                        />
                    </NavLink>
                </nav>
            </section>
        </section>
    )
} 