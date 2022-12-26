import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Loading from './components/Loading/Loading';
import Map from './components/Map';

const App = () => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
             const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
             const {events} = await res.json()
             setEventData(events)
             setLoading(false)
        }
        getData()
    },[])
    
    return (
        <div className='map'>
            <Header/>
            {!loading ? <Map eventData={eventData}/> : <Loading/> }
            
        </div>
    )
}

export default App
