import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function MovePreview({ move, contact }) {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    const isLoggedinContact = move.fromId === user._id ? true : false
    // const to = contact ? <Link to={`/contact/${contact._id}`}><p className="to">{isLoggedinContact ? 'To:' : 'From'} <span>{contact.username}</span></p> </Link> : ''
    let to = contact ? <Link to={`/contact/${contact._id}`}><p className="to">{isLoggedinContact ? 'To:' : 'From'} <span>{contact.username}</span></p> </Link> : ''
    if (typeof contact === 'string') {
        to = <p className="to">From: {contact}</p >
    }


    if (move) {
        return (
            <section className="move-preview flex column">
                {to}
                <section className="info">
                    <p> <span className={isLoggedinContact ? 'red' : 'green'}>{isLoggedinContact ? '-' : '+'}</span>  ${move.amount}</p>
                    <p className="title">{move.title}</p>
                    <p className={move.status.toLowerCase()}><span>{move.status}{move.status === 'Pending' ? '...' : ''}</span></p>
                    <p className='at'>{new Intl.DateTimeFormat('en-GB',
                        { dateStyle: 'short' }).format(move.at)}</p>
                </section>
            </section >
        )
    }
}