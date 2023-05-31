import { useDispatch } from 'react-redux'
import { PendingMovePreview } from '../cmps/PendingMovePreview.jsx'
import { updateMove } from '../store/actions/move.actions'
import { saveUser } from '../store/actions/user.actions'

export function PendingMovesList({ pendingMoves, contacts }) {
    const dispatch = useDispatch()

    function updatePendingMove(moveToUpdate, type) {
        dispatch(updateMove(moveToUpdate, type))
    }

    async function onSaveContact(number) {
        try {
            dispatch(saveUser({ phone: number }))
        } catch (error) {
            console.log('error:', error)
        }
    }

    function getContact(pendingMove) {
        if (contacts) {
            let contact = contacts?.find(c => c._id === pendingMove.fromId)
            if (contacts && !contact) return pendingMove.fromNumber
            return contact
        }
    }

    if (pendingMoves?.length) return (
        <section className="pendingMoves-list-preview">
            {pendingMoves.map(pendingMove => <PendingMovePreview
                key={pendingMove.at}
                pendingMove={pendingMove}
                contact={getContact(pendingMove)}
                updatePendingMove={updatePendingMove}
                onSaveContact={() => onSaveContact(pendingMove.fromNumber)} />)}
        </section>
    )
}