import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.weather.map(this.renderWeather)
                }
                </tbody>
            </table>
        );
    }

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temperatureList = cityData.list.map(weather => weather.main.temp);
        const humidityList = cityData.list.map(weather => weather.main.humidity);
        const pressureList = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={cityData.city.id}>
                <td>{name}</td>
                <td><Chart data={temperatureList} color="red" units="K"/></td>
                <td><Chart data={pressureList} color="blue" units="hPa"/></td>
                <td><Chart data={humidityList} color="green" units="%"/></td>
            </tr>
        );
    };
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)