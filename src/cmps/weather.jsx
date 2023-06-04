import { useEffect, useState } from 'react'
import { getSvg } from '../services/svg.service.js'

export function Weather() {
    const [season, setSeason] = useState('winter')
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [month, setMonth] = useState(new Date().getMonth())
    let intervalId = null

    useEffect(() => {
        updateTimeAndWeather()
        return () => clearInterval(intervalId)
    }, [])

    function updateTimeAndWeather() {
        let season
        intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        const isWinter = month > 10 || month < 4
        const isSpring = month > 3 && month <= 6
        const isSummer = month > 6 && month <= 9
        const isAutumn = month > 9 && month < 11
        
        if (isWinter) season = 'winter'
        else if (isSpring) season = 'spring'
        else if (isSummer) season = 'summer'
        else if (isAutumn) season = 'autumn'
        setSeason(season)
    }

    return (
        <section className="weather-and-time-preview">
            <span
                className="weather-and-time"
                dangerouslySetInnerHTML={{
                    __html: getSvg(season),
                }}
            />
            <p>{time}</p>
        </section>
    )
}