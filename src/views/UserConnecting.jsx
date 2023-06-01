import { Link } from 'react-router-dom'
import { getSvg } from '../services/svg.service.js'

export function UserConnecting() {
    return (
        < section className="sign-up-login" >

            <span
                className="logo"
                dangerouslySetInnerHTML={{
                    __html: getSvg('logo'),
                }}
            />

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