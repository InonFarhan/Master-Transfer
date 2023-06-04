import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../store/actions/user.actions'
import { userService } from '../services/user.service.js';
import { getSvg } from '../services/svg.service.js'

export function SignUp() {
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
            const user = userService.getEmptyUser()
            setUser(user)
        }
        catch (error) {
            console.log('error:', error)
        }
    }

    async function onSignUp(ev) {
        ev.preventDefault()
        try {
            dispatch(signUp(user))
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

    if (user) return (
        <section className="sign-up">
            <section className='sign-up-preview'>
                <span
                    className="back"
                    title='Back'
                    onClick={onBack}
                    dangerouslySetInnerHTML={{
                        __html: getSvg('arrow_back'),
                    }}
                />
                <span
                    className="logo"
                    dangerouslySetInnerHTML={{
                        __html: getSvg('logo'),
                    }}
                />
                <h1 className="sigh-in">SignUp</h1>
                <section>
                    <form className='flex column' onSubmit={onSignUp} >
                        <input placeholder='User name' value={user.username} onChange={handleChange} type="text" name="username" id="username" />
                        <input placeholder='Phone' value={user.phone} onChange={handleChange} type="text" name="phone" id="phone" />
                        <input placeholder='Email' value={user.email} onChange={handleChange} type="email" name="email" id="email" />
                        <input placeholder='Password' value={user.password} onChange={handleChange} type="password" name="password" id="password" />
                        <button className='simple-button medium-button'>Continue</button>
                    </form>
                </section>
            </section>
        </section>
    )
}