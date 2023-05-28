import { useDispatch } from 'react-redux'
import { PendingMovePreview } from '../cmps/PendingMovePreview.jsx'
import { updateMove } from '../store/actions/move.actions'

export function PendingMovesList({ pendingMoves, contacts }) {
    const dispatch = useDispatch()

    function updatePendingMove(moveToUpdate, type) {
        dispatch(updateMove(moveToUpdate, type))
    }

    function getContact(pendingMove) {
        if (contacts) {
            let contact
            if (contacts) {
                contact = contacts.find(c => c._id === pendingMove.fromId)
                return contact
            }
        }
    }

    if (pendingMoves?.length) return (
        <section className="pendingMoves-list-preview">
            {pendingMoves.map(pendingMove => <PendingMovePreview key={pendingMove.at} pendingMove={pendingMove} contact={getContact(pendingMove)} updatePendingMove={updatePendingMove} />)}
        </section>
    )
}