import { useEffect, useState } from 'react'
import { Loader } from '../cmps/Loader.jsx'

export function ContactFilter({ filterBy, onChangeFilter }) {
    const [filter, setFilterBy] = useState(null)

    useEffect(() => {
        loadFilterBy()
    }, [])

    useEffect(() => {
        onChangeFilter(filter)
    }, [filter])

    function loadFilterBy() {
        setFilterBy({ ...filterBy })
    }

    function onSetFilterBy({ target }) {
        let value = target.value
        setFilterBy({ ['term']: value })
    }

    if (!filter) return <Loader />
    return (
        <section className='contact-filter'>
            <input onChange={onSetFilterBy} type="text" value={filter.term} placeholder='Search' />
        </section>
    )
}