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
                    <th className="col-md-3">Temperature</th>
                    <th className="col-md-3">Pressure</th>
                    <th className="col-md-3">Humidity</th>
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
                <td className="col-md-3"><Chart data={temperatureList} color="red"/></td>
                <td className="col-md-3"><Chart data={pressureList} color="blue"/></td>
                <td className="col-md-3"><Chart data={humidityList} color="green"/></td>
            </tr>
        );
    };
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)