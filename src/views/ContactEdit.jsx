import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { saveUser } from '../store/actions/user.actions'
import { userService } from '../services/user.service.js';
import { getSvg } from '../services/svg.service.js'

export function ContactEdit() {
    const [contact, setContact] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        async function loadContact() {
            const contactId = params.id
            let contact
            try {
                if (contactId) contact = await userService.getUserById(contactId)
                else contact = { phone: '' }
                setContact(contact)
            }
            catch (error) {
                console.log('error:', error)
            }
        }
        loadContact()
    }, [params])

    function onBack() {
        navigate(-1)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
        }
        setContact((prevContact) => ({ ...prevContact, [field]: value }))
    }

    async function onSaveContact(ev) {
        ev.preventDefault()
        try {
            dispatch(saveUser(contact))
            navigate(-1)
        } catch (error) {
            console.log('error:', error)
        }
    }

    const inputToShow = <section>
        <section className="input flex"> <label htmlFor="name">Name</label>
            <input value={contact?.username} onChange={handleChange} type="text" name="username" id="name" />
        </section>
        <section className="input flex">
            <label htmlFor="email">Email</label>
            <input value={contact?.email} onChange={handleChange} type="text" name="email" id="email" />
        </section>
    </section>

    if (contact) return (
        <section className='edit-preview'>
            <section className="actions flex">
                <span
                    className="back"
                    title='Back'
                    onClick={onBack}
                    dangerouslySetInnerHTML={{
                        __html: getSvg('arrow_back'),
                    }}
                />
            </section>
            <section className='contact-edit'>
                <h1>{contact._id ? 'Edit' : 'Add'} contact</h1>
                <form onSubmit={onSaveContact} >
                    {!!contact._id && inputToShow}
                    <section className="input flex">
                        <label htmlFor="phone">Phone</label>
                        <input value={contact.phone} onChange={handleChange} type="tel" name="phone" id="phone" />
                    </section>
                    <button>{contact._id ? 'Save' : 'Add'}</button>
                </form>
            </section>
        </section>
    )
}