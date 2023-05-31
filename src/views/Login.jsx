import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/actions/user.actions'
import logo from '../assets/svgs/logo.svg'
import arrow_back from '../assets/svgs/arrow_back.svg'

export function Login() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedInUser)

    useEffect(() => {
        if (loggedinUser) navigate('/')
    }, [loggedinUser, navigate])

    useEffect(() => {
        loadUser()
    }, [])

    function loadUser() {
        try {
            const user = { username: '', password: '' }
            setUser(user)
        }
        catch (error) {
            console.log('error:', error)
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setUser((prevUser) => ({ ...prevUser, [field]: value }))
    }

    function onBack() {
        navigate('/')
    }

    async function onLogin(ev) {
        ev.preventDefault()
        try {
            dispatch(login(user))
        } catch (error) {
            console.log('error:', error)
        }
    }

    if (user) return (
        <section className="login">
            <section className='login-preview'>
                <img className="back" onClick={onBack} src={arrow_back} alt="arrow_back" />
                <img className="logo" src={logo} alt="logo" />
                <section>
                    <form className='flex column' onSubmit={onLogin} >
                        <input placeholder='User name' value={user.username} onChange={handleChange} type="text" name="username" id="username" />
                        <input placeholder='Password' value={user.password} onChange={handleChange} type="password" name="password" id="password" />
                        <button className='simple-button'>Login</button>
                    </form>
                </section>
            </section>
        </section>
    )
} 