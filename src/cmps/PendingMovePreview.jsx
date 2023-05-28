import { Link } from 'react-router-dom'

export function PendingMovePreview({ pendingMove, contact, updatePendingMove }) {
    const from = contact ? <Link to={`/contact/${contact._id}`}><p className="from">from: <span>{contact.username}</span></p> </Link> : ''
    if (pendingMove) {
        return (
            < section className="pending-move-preview flex column" >
                {from}
                < section className="info" >
                    <p className='at'>At: {new Intl.DateTimeFormat('en-GB',
                        { dateStyle: 'short' }).format(pendingMove.at)}</p>
                    <p> Amount: ${pendingMove.amount}</p>
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