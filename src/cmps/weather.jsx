import { useEffect, useState } from 'react'

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

        if (month > 10 || month < 4) season = 'winter'
        else if (month > 3 && month <= 6) season = 'spring'
        else if (month > 6 && month <= 9) season = 'summer'
        else if (month > 9 && month < 11) season = 'autumn'
        setSeason(season)
    }

    return (
        <section className="weather-and-time-preview">
            <img src={require(`../assets/season-imgs/${season}.png`)} />
            <p>{time}</p>
        </section>
    )
}