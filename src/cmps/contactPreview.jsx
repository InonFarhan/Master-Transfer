import React from "react"
import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
    if (contact) {
        return (
            <section className="contact-preview flex">
                <img src={`https://robohash.org/set_set5/${contact._id}`} alt="profile" />
                <section className="flex">
                    <Link to={`/contact/${contact._id}`}>
                        <p>{contact.username}</p>
                    </Link>
                </section>
            </section >
        )
    }
}