import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../../actions/index';
import {Link} from 'react-router'

class PostNew extends Component {
    render() {
        const {fields:{title, categories, content}, handleSubmit} = this.props;

        const validateFormGroup = (formElement) => {
            return `form-group ${formElement.touched && formElement.invalid ? 'has-danger' : ''}`;
        };

        const addTextHelp = (formElement) => {
            return <div className="text-help">{ formElement.touched ? formElement.error : ''}</div>;
        };

        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3> Create A New Post</h3>
                <div className={validateFormGroup(title)}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    {addTextHelp(title)}
                </div>

                <div className={validateFormGroup(categories)}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    {addTextHelp(categories)}
                </div>

                <div className={validateFormGroup(content)}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    {addTextHelp(content)}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    validateNonPresence("title", values, errors, "Enter a title");
    validateNonPresence("categories", values, errors, "Enter a some category");
    validateNonPresence("content", values, errors, "Enter some content");

    return errors;
}

function validateNonPresence(prop, values, errors, message) {
    if (!values[prop])
        errors[prop] = message;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd argument is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'NewPostForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostNew);