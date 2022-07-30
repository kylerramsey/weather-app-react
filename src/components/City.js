import { Link } from 'react-router-dom'

export default function City(props) {

    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/Favorites/" + props.city.id}>
                    {props.city.id}: {props.city.name}
                </Link>
            )
        } else {
            resHeader = (
                <>{props.city.id}: {props.city.name}</>
            )
        }

        return resHeader
    }

    return (
        <div className="card card-item">
            <h2>
                {buildHeader()}
            </h2>
            <p>{props.city.name}</p>
            {/* <p>{props.city.image}</p> */}
            
        </div>
    )
}