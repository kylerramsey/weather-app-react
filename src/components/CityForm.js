import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function CityForm() {
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
                <input type="text" name="name" id="" placeholder='Enter a favorite city'/>
                <button id="submit-btn" class="btn btn-info rounded-pill d-inline-flex ml-3" type="submit">Submit</button>
            </div>
            
        </form>
    )
}