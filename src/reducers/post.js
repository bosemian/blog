const initialstate = { isFetching: false, posts: [] }

export default (state=initialstate, actions) => {
    switch(actions.type) {
        case 'FETCH_POSTS_REQUEST':
            return { isFetching: true }
        case 'FETCH_POSTS_SUCCESS':
            return {
                isFetching: false,
                posts: actions.payload
            }
        default:
            return state
    }
}