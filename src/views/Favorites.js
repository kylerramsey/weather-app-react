import CityList from '../components/CityList'
import { useContext } from 'react'
import CityForm from '../components/CityForm'
import { DataContext } from '../contexts/DataProvider'

export default function Favorites() {
    return (
        <>
        <div className='app'>
            <div className='container'>
                <h1>Favorite Cities</h1>
                <CityForm />
                <CityList />
            </div>
        </div>
        </>
    )
}