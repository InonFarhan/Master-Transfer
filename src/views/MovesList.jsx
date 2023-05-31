import { MovePreview } from '../cmps/movePreview.jsx'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { saveUser } from '../store/actions/user.actions'

export function MovesList({ moves, contacts }) {
    const dispatch = useDispatch()
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    function getContact(move) {
        const isLoggedinContact = move.toId === user._id ? true : false
        if (!isLoggedinContact) return contacts?.find(c => c._id === move.toId)
        const contact = contacts?.find(c => c._id === move.fromId)
        if (contacts && !contact) return move.fromNumber
        return contact
    }

    async function onSaveContact(number) {
        try {
            dispatch(saveUser({ phone: number }))
        } catch (error) {
            console.log('error:', error)
        }
    }

    if (moves?.length) return (
        <section className="moves-list-preview">
            {moves.map(move => <MovePreview
                key={move.at}
                move={move}
                contact={getContact(move)}
                onSaveContact={() => onSaveContact(move.fromNumber)} />)}
        </section>
    )
}