import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {term: ''};

        // override this context of onInputChange method
        // same as `(e) => this.onInputChange(e)` ?
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        // init some cities
        this.props.fetchWeather('New York');
        this.props.fetchWeather('Washington DC.');
        this.props.fetchWeather('Dallas');
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className='input-group'>
                <input
                    placeholder='Search...'
                    className='form-control'
                    onChange={this.onInputChange}
                    value={this.state.term} />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }

    onFormSubmit(event) {
        event.preventDefault(); // prevent reloading
        this.props.fetchWeather(this.state.term);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch)
}

// first arg of connect is null because this container don't have state
export default connect(null, mapDispatchToProps)(SearchBar);
