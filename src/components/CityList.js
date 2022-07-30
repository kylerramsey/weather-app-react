import { useEffect, useState, useContext } from 'react'
import City from './City'
import { DataContext } from '../contexts/DataProvider'

export default function CityList() {
    const { cities } = useContext(DataContext)

    return (
        <>
            {
                cities.map(city => <City city={city} key={city.id} />)
            }
        </>
    )
}