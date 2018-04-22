import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    render() {
        return (
            <div className='search-bar'>
                <input onChange={e => this.onInputChange(e)} />
            </div>
        )
    }

    onInputChange(event) {
        const term = event.target.value;

        this.setState({term});
        this.props.onSearch(term);
    }

}

export default SearchBar;