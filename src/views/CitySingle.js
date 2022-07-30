import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import City from '../components/City'
import { DataContext } from '../contexts/DataProvider'

export default function CitySingle() {
    const { id } = useParams()
    const [city, setCity] = useState({})
    const [cityState, setCityState] = useState("LOADING")
    const { getSingleCity } = useContext(DataContext)

    useEffect(() => {
        const queryCity = async () => {
            setCity(await getSingleCity(id))
            setCityState("LOADED")
        }
        queryCity()
    }, [getSingleCity, id])

    return (
        <>
            {
                (cityState === "LOADED") ?
                    <City city={city} hideLink={true} /> :
                    <p>Loading...</p>
            }
        </>
    )
}