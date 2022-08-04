import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import GoogleMapReact from "google-map-react";

function WeatherDisplay() {
    const navigate = useNavigate();

    const navigateHome = () => {
        // navigate to
        navigate("/");
    };

    // Google maps API section start
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    // Google maps API section end

    const { login, logout, user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const { location } = useParams();
    const [currLocation, setLocation] = useState(location);
    const [background, setBackground] = useState('setbg')
    useEffect(() => {
        console.log('BACKGROUND'+ background)
        document.getElementById(
            "change-bg"
        ).style.backgroundImage = `url('/assets/${background}.jpg')`;
    })

    useEffect(() => {
        if (location) {
            queryWeather();
        }
    }, [location]);

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            queryWeather();
        }
    };

    const queryWeather = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currLocation}&units=imperial&appid=83886fbe607f9b2d7d5c5444e557b6c6`;
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(response.data);
            setBackground(response.data.weather[0].icon)
        });
        setLocation("");
    };

    return (
        <div id="change-bg" className="app">
            <div className="search">
                <input
                    id=""
                    value={currLocation}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter Location"
                    type="text"
                />
            </div>
            <div className="container">
                <div className="top">
                    <button
                        onClick={navigateHome}
                        id="submit-btn"
                        className="btn btn-light rounded-pill mb-3"
                        type="submit"
                    >
                        Back
                    </button>
                    <div className="currLocation">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? (
                            <h1>{data.main.temp.toFixed()}°F</h1>
                        ) : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name != undefined && (
                    <div className="bottom">
                        <div className="feels">
                            <p>Feels like</p>
                            {data.main ? (
                                <p className="bold">
                                    {data.main.feels_like.toFixed()}°F
                                </p>
                            ) : null}
                        </div>
                        <div className="humidity">
                            <p>Humidity</p>
                            {data.main ? (
                                <p className="bold">{data.main.humidity}%</p>
                            ) : null}{" "}
                        </div>
                        <div className="wind">
                            <p>Wind Speed</p>
                            {data.wind ? (
                                <p className="bold">
                                    {data.wind.speed.toFixed()} MPH
                                </p>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherDisplay;
