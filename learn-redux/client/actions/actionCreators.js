// increment
export const increment = (index) => ({
    type: 'INCREMENT_LIKES',
    index
});
// add comment
export const addComment = (postID, author, comment) => ({
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
});
// remove comment
export const removeComment = (postID, i) => ({
    type: 'REMOVE_COMMENT',
    i,
    postID,
});
