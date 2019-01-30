import React, { Component } from 'react';
import TextInput from '../layouts/TextInput';
import TextArea from '../layouts/TextArea';
import {Redirect} from 'react-router-dom';
class AddBlog extends Component {
    success = false;
    slug = '';

    submitForm = (e) => {
        e.preventDefault()
        this.props.add(this.state);
        this.success = !this.success;
    }

    onChangeEventHandler = (e) => {
        // Check if the target is the title
        // Then set the slug value while trimming and replacing white spaces to a (-)
        // and changing the value to lowercase
        if(e.target.name === 'title'){
            const textToSlug = e.target.value.trim();
            this.slug = textToSlug.toLowerCase().replace(/\s/g, '-');
        }
        
        this.setState({[e.target.name]: e.target.value});
    }
  render() {
    return (
      <React.Fragment>
        <div className="box">
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <h2 className="title is-2 has-text-centered">Add Blog</h2>
                    <form onSubmit={this.submitForm}>
                    <TextInput 
                        label       = "Title"
                        name        = "title"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter Title...'
                    />
                    <TextInput 
                        name        = "slug"
                        placeholder = ''
                        readOnly    = {true}
                        value       = {this.slug}
                    />
                    <TextInput 
                        label       = "Author"
                        name        = "author"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter Author...'
                    />
                    <TextInput 
                        label       = "Category"
                        name        = "category"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter category...'
                    />
                    <TextArea 
                        label       = "Content"
                        name        = "content"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = "Enter your blog content here..."
                    />
                    <button type="submit" className="button is-primary is-pulled-right">Save</button>
                    </form>
                </div>
            </div>
            {
                this.success && <Redirect to='/' />
            }
        </div>
      </React.Fragment>
    )
  }
}
export default AddBlog