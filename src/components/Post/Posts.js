import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                Post Index
                {this.props.posts.isFetching ? <h2>Loading...</h2> : <h2>Success</h2>}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);