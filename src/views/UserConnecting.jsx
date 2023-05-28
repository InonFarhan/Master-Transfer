import { Link } from 'react-router-dom'
import logo from '../assets/svgs/logo.svg'

export function UserConnecting() {
    return (
        < section className="sign-up-login" >
            <img className="logo" src={logo} alt="logo" />
            <section className="links">
                <Link className="login simple-button" to="/login">
                    Login
                </Link>
                <p>
                    Or
                </p>
                <Link className="signUp simple-button" to="/signUp">
                    Sign up
                </Link>
            </section>
        </section >
    )
}