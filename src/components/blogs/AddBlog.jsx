import React, { Component } from 'react'
import { v4 } from 'uuid';
import TextInput from '../layouts/TextInput';
import TextArea from '../layouts/TextArea';
class AddBlog extends Component {
    constructor() {
        super();
        this.state = {
            title   : '',
            content : '',
            author  : '',
            category: '',
            slug    : ''
        }
        this.onChangeEventHandler = this.onChangeEventHandler.bind(this);

    }

    submitForm = (e) => {
        e.preventDefault()

        const { title, slug, author, category, content } = this.state;

        const d = new Date();
        const date = `${d.getFullYear}-${d.getMonth() + 1}-${d.getDate()}`;
        
        const newBlog = {
            id: v4(),
            slug,
            title,
            content,
            author,
            category,
            created_at: date,
            updated_at: ''
        }

        this.props.add(newBlog);

        this.setState({
            title   : '',
            content : '',
            author  : '',
            category: '',
            slug    : ''
        });

        this.props.history.push('/');
    }

    onChangeEventHandler = (e) => {
        // Check if the target is the title
        // Then set the slug value while trimming and replacing white spaces to a (-)
        // and changing the value to lowercase
        if(e.target.name === 'title'){
            const textToSlug = e.target.value.trim();
            this.setState({slug: textToSlug.toLowerCase().replace(/\s/g, '-')})
        }
        
        this.setState({[e.target.name]: e.target.value});
    }
  render() {
    const { title, slug, author, category, content } = this.state;
    return (
      <React.Fragment>
        <div className="box">
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <h2 className="title is-2 has-text-centered">Add Blog</h2>
                    <form onSubmit={this.submitForm.bind(this)}>
                    <TextInput 
                        label       = "Title"
                        name        = "title"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter Title...'
                        value       = {title}
                    />
                    <TextInput 
                        name        = "slug"
                        placeholder = ''
                        readOnly    = {true}
                        value       = {slug}
                    />
                    <TextInput 
                        label       = "Author"
                        name        = "author"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter Author...'
                        value       = {author}
                    />
                    <TextInput 
                        label       = "Category"
                        name        = "category"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = 'Enter category...'
                        value       = {category}
                    />
                    <TextArea 
                        label       = "Content"
                        name        = "content"
                        changeEvent = {this.onChangeEventHandler}
                        placeholder = "Enter your blog content here..."
                        value       = {content}
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
export default AddBlog