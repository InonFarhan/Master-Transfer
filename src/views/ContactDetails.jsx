import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import copy from 'clipboard-copy';
import { saveUser } from '../store/actions/user.actions'
import { userService } from '../services/user.service.js';
import { loadUser } from '../store/actions/user.actions'
import { loadMoves, loadPendingMoves } from '../store/actions/move.actions'
import { TransferFund } from './TransferFund.jsx';
import { MovesList } from './MovesList.jsx';
import { PendingMovesList } from './PendingMovesList.jsx'
import arrow_back from '../assets/svgs/arrow_back.svg'
import remove from '../assets/svgs/delete.svg'
import { Loader } from '../cmps/Loader.jsx'

export function ContactDetails() {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [contact, setContact] = useState(null)
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    const moves = useSelector((storeState) => storeState.movesModule.moves)
    const pendingMoves = useSelector((storeState) => storeState.movesModule.pendingMoves)

    useEffect(() => {
        dispatch(loadUser())
        loadContact()
    }, [])

    useEffect(() => {
        dispatch(loadPendingMoves())
        loadContact()
    }, [pendingMoves])

    useEffect(() => {
        if (user && contact) dispatch(loadMoves(contact))
    }, [user, contact])

    async function loadContact() {
        try {
            const contact = await userService.getUserById(params.id)
            setContact(contact)
        } catch (error) {
            console.log('error:', error)
        }
    }

    function onBack() {
        navigate(-1)
    }

    function onDelete() {
        const idx = user.contacts.findIndex(u => u._id === contact._id)
        user.contacts.splice(idx, 1)
        dispatch(saveUser(user))
        navigate(-1)
    }

    function handleCopy({ target }) {
        const textToCopy = target.id
        copy(textToCopy);
        console.log('Text copied:', textToCopy);
        //todo: show some message
    };

    const pendingMovesToShow = pendingMoves.length ?
        <section className="pending-moves">
            <PendingMovesList pendingMoves={pendingMoves?.filter(pM => pM.fromId === contact?._id).reverse()} />
            <hr />
        </section>
        : ''

    const movesToShow = moves.length && moves.find(m => m.toId === contact?._id || m.fromId === contact?._id) ?
        <section className="moves">
            <MovesList moves={moves} />
            <hr />
        </section>
        : ''

    if (!contact) return (
        <Loader />
    )
    return (
        <section className="details-preview" >
            <section className="actions flex space-between">
                <img className="back" onClick={onBack} src={arrow_back} alt="arrow_back" />
                <img className="remove" onClick={onDelete} src={remove} alt="remove" />
            </section>
            <section className="contact-card">
                <section className="contact-details flex">
                    <img src={`https://robohash.org/set_set5/${contact._id}`} alt="profile" />
                    <section className="info flex column justify-center">
                        <p onClick={handleCopy} id={contact.username} title='Copy name'>{contact.username}</p>
                        <p onClick={handleCopy} id={contact.phone} title='Copy phone'>{contact.phone}</p>
                        <p onClick={handleCopy} id={contact.email} title='Copy email'>{contact.email}</p>
                    </section>
                </section>
                <section className="transfer">
                    <TransferFund contact={contact} coins={user.coins} />
                </section>
            </section>
            {((moves.find(m => m.toId !== contact._id && m.fromId !== contact._id)) || (pendingMovesToShow.length > 0 && (pendingMoves.find(pM => pM.fromId !== contact._id)))) && <Loader />}
            {pendingMovesToShow}
            {movesToShow}
        </section >
    )
}