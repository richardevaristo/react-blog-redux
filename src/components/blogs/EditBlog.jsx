import React, { Component } from 'react'
import TextInput from '../layouts/TextInput';
import TextArea from '../layouts/TextArea';

class EditBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            id        : '',
            title     : '',
            slug      : '',
            author    : '',
            category  : '',
            content   : '',
            created_at: '',
            updated_at: ''
        }
        this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
    }

    componentDidMount() {
        if(this.props.location.state){
            const { id, title, slug, author, category, content, created_at, updated_at } = this.props.location.state.blog;
            this.setState({
                id,
                title,
                slug,
                author,
                category,
                content,
                created_at,
                updated_at
            });
        }
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

        const { id, title, slug, author, category, content, created_at } = this.state;

        const d = new Date();
        const date = `${d.getFullYear}-${d.getMonth() + 1}-${d.getDate()}`;
        
        const updatedBlog = {
            id,
            slug,
            title,
            content,
            author,
            category,
            created_at,
            updated_at: date
        }
        
        this.props.location.state.update(updatedBlog);

        this.setState({
            id        : '',
            title     : '',
            slug      : '',
            author    : '',
            category  : '',
            content   : '',
            created_at: '',
            updated_at: ''
        });

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
export default EditBlog