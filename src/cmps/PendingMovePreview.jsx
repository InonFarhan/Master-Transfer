import { Link } from 'react-router-dom'
import { getSvg } from '../services/svg.service.js'

export function PendingMovePreview({ pendingMove, contact, updatePendingMove, onSaveContact }) {
    const from =
        contact
            ? typeof contact === 'object' ?
                <Link
                    to={`/contact/${contact._id}`}>
                    <p className="from flex justify-center">
                        from: <span>{contact.username}</span>
                    </p>
                </Link>

                : <p className="from flex justify-center">
                    From: {contact}
                    <span
                        className="add flex"
                        title='Add contact'
                        onClick={onSaveContact}
                        dangerouslySetInnerHTML={{
                            __html: getSvg('add'),
                        }}
                    />
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