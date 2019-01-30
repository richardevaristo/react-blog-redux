import React, { Component } from 'react'
import BlogItem from './BlogItem';
class Blogs extends Component {
  render() {
    const { blogs } = this.props.blogs;
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="title">Blog Lists</h1>
          {blogs.map((blog) =>
              <BlogItem 
                key    = {blog.id}
                blog   = {blog}
                delete = {this.props.delete}
                update = {this.props.update}
              /> 
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Blogs