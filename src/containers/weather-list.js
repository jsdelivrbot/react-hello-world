import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color='orange' unit='K' />
                </td>
                <td>
                    <Chart data={pressure} color='green' unit='hPa' />
                </td>
                <td>
                    <Chart data={humidity} color='black' unit='%' />
                </td>
            </tr>
        )
    }
}

// function mapStateToProps(state) {
//     return {weather: state.weather}
// }

// same func as above /\ [es6 syntax]
function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)