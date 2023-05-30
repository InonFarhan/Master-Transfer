import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadUser } from '../store/actions/user.actions'
import { setFilterBy } from '../store/actions/user.actions'
import { loadContacts } from '../store/actions/user.actions'
import { ContactList } from '../cmps/contactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { Loader } from '../cmps/Loader.jsx'
import add from '../assets/svgs/add.svg'

export function ContactPage() {
    const contacts = useSelector((storeState) => storeState.userModule.contacts)
    const filterBy = useSelector((storeState) => storeState.userModule.filterBy)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
        dispatch(loadContacts())
    }, [dispatch])

    useEffect(() => {
        return () => {
            const filter = { term: '' }
            dispatch(setFilterBy(filter))
            dispatch(loadContacts())
        }
    }, [dispatch])

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }

    if (contacts) {
        return (
            <section className="contacts-list">
                <ContactFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
                <Link className="add" to={`/contact/edit`}>
                    <img src={add} alt="add" />
                </Link>
                <ContactList contacts={contacts} />
            </section>
        )
    } else return (
        <Loader />
    )
}