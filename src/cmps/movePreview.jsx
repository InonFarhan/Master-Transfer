import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSvg } from '../services/svg.service.js'

export function MovePreview({ move, contact, onSaveContact }) {
    const user = useSelector((storeState) => storeState.userModule.loggedInUser)
    const isLoggedinContact = move.fromId === user._id ? true : false

    let to =
        contact
            ? typeof contact !== 'string' ?
                <Link
                    to={`/contact/${contact._id}`}>
                    <p className="to flex justify-center">
                        {isLoggedinContact ? 'To:' : 'From:'}
                        <span>{contact.username}</span>
                    </p>
                </Link>

                : <p className="from flex justify-center">
                    From: {contact}
                    <span
                        className="add"
                        title='Add contact'
                        onClick={onSaveContact}
                        dangerouslySetInnerHTML={{
                            __html: getSvg('add'),
                        }}
                    />
                </p >

            : ''

    if (move) {
        return (
            <section className="move-preview flex column">
                <section className="info">
                    <p> <span className={isLoggedinContact ? 'red' : 'green'}>{isLoggedinContact ? '-' : '+'}</span>  ${move.amount}</p>
                    <p className="title">{move.title}</p>
                    <p className={move.status.toLowerCase()}><span>{move.status}{move.status === 'Pending' ? '...' : ''}</span></p>
                    <p className='at'>{new Intl.DateTimeFormat('en-GB',
                        { dateStyle: 'short' }).format(move.at)}</p>
                </section>
                {to}
            </section >
        )
    }
}