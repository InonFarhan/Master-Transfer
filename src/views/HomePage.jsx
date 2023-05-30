import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logout } from '../store/actions/user.actions'
import { loadContacts } from '../store/actions/user.actions'
import { loadMoves, loadPendingMoves } from '../store/actions/move.actions'
import { Weather } from '../cmps/weather.jsx'
import { MovesList } from './MovesList.jsx'
import { PendingMovesList } from './PendingMovesList.jsx'
import logout_button from '../assets/svgs/logout.svg'
import dollar from '../assets/svgs/dollar.svg'
import edit from '../assets/svgs/edit.svg'
import { Loader } from '../cmps/Loader.jsx'

export function HomePage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    const contacts = useSelector((storeState) => storeState.userModule.contacts)
    const moves = useSelector((storeState) => storeState.movesModule.moves)
    const pendingMoves = useSelector((storeState) => storeState.movesModule.pendingMoves)
    const [movesToShowAmount, setMovesToShowAmount] = useState(5)

    useEffect(() => {
        function checkUser() {
            if (!user) navigate('/userConnecting')
            else {
                navigate('/')
                dispatch(loadContacts())
                dispatch(loadMoves())
                dispatch(loadPendingMoves())
            }
        }
        checkUser()
    }, [user, dispatch, navigate])

    useEffect(() => {
        if (!user) dispatch(loadPendingMoves())
    }, [user, pendingMoves, dispatch])

    function onLogout() {
        dispatch(logout())
        navigate('/userConnecting')
    }

    function loadMoreMoves() {
        setMovesToShowAmount(movesToPreview.length + 5 <= moves.length ? movesToShowAmount + 5 : movesToPreview.length + (moves.length - movesToPreview.length))
    }

    const movesToPreview = moves.slice(moves.length < 3 ? 0 : moves.length - movesToShowAmount, moves.length).reverse()

    const pendingMovesToShow = pendingMoves.length ?
        <section className="pending-moves">
            <PendingMovesList pendingMoves={pendingMoves} contacts={contacts} />
            < hr />
        </section>
        : ''

    const movesToShow = moves.length ?
        <section className="last-moves">
            <MovesList moves={movesToPreview} contacts={contacts} />
            {(movesToShowAmount < moves.length) && <button className='loadMoreMoves simple-button' onClick={loadMoreMoves}>Load more</button>}
            <hr />
        </section>
        : ''

    if (user && contacts) return (
        <section className="home-page-preview">
            <section className="info">
                <h1 className="user-name">Hello {user.username}!
                    <Link className="edit" to={`/contact/edit/${user._id}`}>
                        <img src={edit} alt="edit" />
                    </Link></h1>
                <section className="flex space-between">
                    <section className="balance flex">
                        <p className="user-coins flex"><img src={dollar} alt="dollar" /><span>Coins: ${user.coins}</span></p>
                    </section>
                </section>
                <Weather className="weather-and-time" />
            </section>
            {(pendingMoves.find(pM => pM.toId !== user._id) || (!moves.find(m => m.fromId === user._id || m.toId === user._id))) && <Loader />}
            {pendingMovesToShow}
            {movesToShow}
            <button className="logout simple-button" onClick={onLogout} title='Logout'><img src={logout_button} alt="logout" /></button>
        </section>
    )
    else return (
        <Loader />
    )
}