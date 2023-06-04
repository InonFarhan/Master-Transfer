import { getSvg } from '../services/svg.service.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { logout } from '../store/actions/user.actions'

export function Setting() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    function onLogout() {
        dispatch(logout())
        navigate('/login')
    }

    return (
        < section className="setting-menu" >

            <span
                className="logo"
                dangerouslySetInnerHTML={{
                    __html: getSvg('logo'),
                }}
            />

            <NavLink className="edit" to={`/edit/${user?._id}`}>
                <p className='simple-button'>Edit profile</p>
            </NavLink>

            <button className="logout simple-button" onClick={onLogout} title='Logout'>
                Logout
            </button>
        </section >
    )
}