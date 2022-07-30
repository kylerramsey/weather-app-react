import React, { useState } from "react";
import axios from "axios";

function LocationSearch() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=83886fbe607f9b2d7d5c5444e557b6c6`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("");
        }
    };

    return (
        <div className="search">
            <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                type="text"
            />
        </div>
    );
}

export default LocationSearch;
