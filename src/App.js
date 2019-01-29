import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Blogs from './components/blogs/Blogs';
import AddBlog from './components/blogs/AddBlog';
import EditBlog from './components/blogs/EditBlog';
import Header from './components/layouts/Header';
import { connect } from 'react-redux';
import { addBlog, deleteBlog, updateBlog } from './app/actions/BlogActions';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Header add={this.props.add}/>
          <Switch>
            <Route exact path='/'>
              <Blogs blogs={this.props.blogs} delete={this.props.delete} update={this.props.update}/>
            </Route>
            <Route exact path='/blog/create'>
              <AddBlog add={this.props.add} />
            </Route>
            <Route exact path='/blog/edit/:slug' component={EditBlog} />
          </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.BlogReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (blog) => {
      dispatch(addBlog(blog))
    },
    delete: (id) => {
      dispatch(deleteBlog(id))
    },
    update: (blog) => {
      dispatch(updateBlog(blog))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
