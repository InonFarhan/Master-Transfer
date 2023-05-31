import { Link } from 'react-router-dom'
import add from '../assets/svgs/add.svg'

export function PendingMovePreview({ pendingMove, contact, updatePendingMove, onSaveContact }) {
    let from =
        contact ?
            typeof contact !== 'string' ?
                <Link
                    to={`/contact/${contact._id}`}>
                    <p className="from flex justify-center">
                        from: <span>{contact.username}</span>
                    </p>
                </Link>

                : <p className="from flex justify-center">
                    From: {contact}
                    <img className='add' title='Add contact' onClick={onSaveContact} src={add} alt="add" />
                </p >

            : ''

    if (pendingMove) {
        return (
            < section className="pending-move-preview flex column" >
                {from}
                < section className="info" >
                    <p className='at'>{new Intl.DateTimeFormat('en-GB',
                        { dateStyle: 'short' }).format(pendingMove.at)}</p>
                    <p>${pendingMove.amount}</p>
                </section >
                <p className="title">{pendingMove.title}</p>
                <section className="action flex">
                    <button onClick={() => updatePendingMove(pendingMove, 'approve')} className="simple-button approve">Approve</button>
                    <button onClick={() => updatePendingMove(pendingMove, 'reject')} className="simple-button reject">Reject</button>
                </section>
            </section >
        )
    }
}