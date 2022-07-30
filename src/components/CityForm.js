import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function CarForm() {
    const { addCity } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        addCity(data.name)
        event.target.reset()
        console.log(data.name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" name="name" id="" />
            </div>
            <button type="submit">Add City</button>
        </form>
    )
}