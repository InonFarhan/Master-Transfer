import React from "react"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMove } from '../store/actions/move.actions'
import send from '../assets/svgs/send.svg'

export function TransferFund({ contact, coins }) {

    const [transfer, setTransfer] = useState({ amount: '', title: '' })
    const dispatch = useDispatch()

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
        }
        setTransfer((prevTransfer) => ({ ...prevTransfer, [field]: value }))
    }

    function onTransfer(ev) {
        ev.preventDefault()
        if (+coins < transfer.amount) {
            //show some message
            return
        }
        if (transfer.amount < 0.1) {
            //show some message
            return
        }
        dispatch(addMove(contact, transfer))
        setTransfer({ amount: '', title: '' })
    }

    return (
        < section className="TransferFund-preview" >
            <form className="transfer flex" onSubmit={onTransfer}>
                <input className="title" onChange={handleChange} value={transfer.title} type="text" name="title" id="title" placeholder="Transfer title" />
                <input className="amount" onChange={handleChange} value={transfer.amount} type="number" name="amount" id="amount" placeholder="Amount" min="1" />
                <button className="simple-button send flex"><img src={send} alt="send" /></button>
            </form>
        </section >
    )
}