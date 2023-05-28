import { MovePreview } from '../cmps/movePreview.jsx'
import { useSelector } from 'react-redux'

export function MovesList({ moves, contacts }) {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    function getContact(move) {
        const isLoggedinContact = move.toId === user._id ? true : false
        if (!isLoggedinContact) return contacts?.find(c => c._id === move.toId)
        else return contacts?.find(c => c._id === move.fromId)
    }

    if (moves?.length) return (
        <section className="moves-list-preview">
            {moves.map(move => <MovePreview key={move.at} move={move} contact={getContact(move)} />)}
        </section>
    )
}