import React, { Component } from 'react'
import TextInput from '../layouts/TextInput';
import TextArea from '../layouts/TextArea';

class EditBlog extends Component {
    state = {}

    componentDidMount() {
        this.props.location.state && this.props.location.query ?
        this.setState(this.props.location.state.blog):
        this.props.history.push('/');
    }

    onChangeEventHandler = (e) => {
        if(e.target.name === 'title'){
            const textToSlug = e.target.value.trim();
            this.setState({slug: textToSlug.toLowerCase().replace(/\s/g, '-')})
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();        
        this.props.location.query(this.state);
        this.props.history.push('/');
    } 
  render() {
    const { title, slug, category, author, content } = this.state;
    return (
      <React.Fragment>
          <div className="box">
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <h2 className="title is-2 has-text-centered">Edit Blog</h2>
                    <form onSubmit={this.submitForm}>
                    <TextInput 
                        label       = "Title"
                        name        = "title"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter Title...'
                        value       = {title || ''}
                    />
                    <TextInput 
                        name        = "slug"
                        placeholder = ''
                        readOnly    = {true}
                        value       = {slug || ''}
                    />
                    <TextInput 
                        label       = "Author"
                        name        = "author"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter Author...'
                        value       = {author || ''}
                    />
                    <TextInput 
                        label       = "Category"
                        name        = "category"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter category...'
                        value       = {category || ''}
                    />
                    <TextArea 
                        label       = "Content"
                        name        = "content"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = "Enter your blog content here..."
                        value       = {content || ''}
                    />
                    <button type="submit" className="button is-primary is-pulled-right">Save</button>
                    </form>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
export default EditBlog