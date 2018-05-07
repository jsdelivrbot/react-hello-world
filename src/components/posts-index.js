import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {fetchPosts} from "../actions";

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <p>PostsIndex</p>
                <ul>
                    {this.renderPosts()}
                </ul>
                <Link to='post/new'>Add post</Link>
            </div>
        )
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            )
        })
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);