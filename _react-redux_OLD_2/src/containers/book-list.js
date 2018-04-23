// Container = Component with state management by redux

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index'

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='list-group col-md-4'>
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book, idx) => {
            return (
                <li
                    key={idx}
                    className='list-group-item'
                    onClick={() => this.props.selectBook(book)}>{book.title}</li>
            )
        })
    }
}

// react-redux connecting
// return of this function appear as this.props of BookList
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    // when selectBook (action) is called, result is send to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);