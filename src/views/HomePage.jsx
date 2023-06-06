import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadContacts } from '../store/actions/user.actions'
import { loadMoves, loadPendingMoves } from '../store/actions/move.actions'
import { loadUser } from '../store/actions/user.actions'
import { Weather } from '../cmps/weather.jsx'
import { MovesList } from './MovesList.jsx'
import { PendingMovesList } from './PendingMovesList.jsx'
import { getSvg } from '../services/svg.service.js'
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
        dispatch(loadUser())
    }, [])

    useEffect(() => {
        function checkUser() {
            if (!user) navigate('/login')
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

    function loadMoreMoves() {
        setMovesToShowAmount(movesToPreview.length + 5 <= moves.length ? movesToShowAmount + 5 : movesToPreview.length + (moves.length - movesToPreview.length))
    }
    const movesToPreview = moves.slice(moves.length < 5 ? 0 : moves.length - movesToShowAmount, moves.length).reverse()

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

    let timeNow = new Date().getHours()
    const isMorning = timeNow > 4 && timeNow < 12
    const isNoon = timeNow > 11 && timeNow < 16
    const isAfterNoon = timeNow > 15 && timeNow < 20
    const isEvening = timeNow > 19 && timeNow < 22
    const isNight = timeNow > 21 || timeNow < 5

    const bless =
        isMorning ? 'Good morning' :
            isNoon ? ' Good noon' :
                isAfterNoon ? 'Good afternoon' :
                    isEvening ? 'Good evening' :
                        isNight ? 'Good night' : ''

    if (user && contacts) return (
        <section className="home-page-preview">

            <section className="info">
                <h1 className="user-name">{bless} {user.username}!</h1>
                <section className="flex space-between">
                    <section className="balance flex">
                        <p className="user-coins flex">
                            <span
                                className="dollar flex"
                                dangerouslySetInnerHTML={{
                                    __html: getSvg('dollar'),
                                }}
                            />
                            <span>Coins: ${user.coins}</span></p>
                    </section>
                </section>

                <Weather className="weather-and-time" />
            </section>

            {(pendingMoves.length > 0 && (pendingMoves.find(pM => pM.toId !== user._id))
                || ((moves.length > 0 && !moves.find(m => m.fromId === user._id
                    || m.toId === user._id))))
                && <Loader />}
            {pendingMovesToShow}
            {movesToShow}

        </section>
    )
    else return (
        <Loader />
    )
}