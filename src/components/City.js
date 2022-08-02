import { Link } from 'react-router-dom'

export default function City(props) {

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }

    function buildHeader() {
        let resHeader;
        let titleName = titleCase(props.city.name)

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/Weather/"+props.city.name}> 
                    {titleName}
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
            {/* <p>{props.city.name}</p> */}
            {/* <p>{props.city.image}</p> */}
            
        </div>
    )
}