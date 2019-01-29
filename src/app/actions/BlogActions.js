export function addBlog(blog){
    return {
        type: "ADD_BLOG",
        payload: blog
    }
}

export function updateBlog(blog) {
    return {
        type: "UPDATE_BLOG",
        payload: blog
    }
}

export function deleteBlog(blog) {
    return {
        type: "DELETE_BLOG",
        payload: blog
    }
}