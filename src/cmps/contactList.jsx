import React from "react"
import { ContactPreview } from '../cmps/contactPreview'

export function ContactList({ contacts }) {
    if (contacts?.length) {
        return (
            <section className="contacts-list-preview">
                {contacts.map(contact =>
                    <ContactPreview key={contact._id} contact={contact} />
                )}
            </section>
        )
    }
}