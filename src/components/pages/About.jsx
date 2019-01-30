import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <div className="box">
                <h1 className="title is-1">About</h1>
                <p className="subtitle">
                    This site is a simple static blog site created using <strong>ReactJS</strong> and <strong>Redux</strong> with a simple operation of add, update, delete of a blog post.
                </p>
                <p className="subtitle">
                    The purpose of creating this static blog site are for practice and to simply compare the results, coding best practice, structure and functionalities of <strong>React Context API</strong> and <strong>Redux</strong>. 
                </p>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
export default About