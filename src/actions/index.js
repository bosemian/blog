export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchRequest())
        fetch('http://reduxblog.herokuapp.com/api/posts')
                    .then(res => res.json())
                    .then(posts => {
                        dispatch(fetchSuccess(posts))
                    })
                    .catch(err => console.log(err))
    }
}

function fetchRequest() {
    return {
        type: 'FETCH_POSTS_REQUEST'
    }
}

function fetchSuccess(posts) {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: posts
    }
}