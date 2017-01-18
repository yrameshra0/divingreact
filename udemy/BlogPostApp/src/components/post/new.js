import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../../actions/index';
import {Link} from 'react-router'
import _ from 'lodash';

const FIELDS = {
    title: {type: 'input', label: 'Title for Post'},
    categories: {type: 'input', label: 'Enter Categories'},
    content: {type: 'textarea', label: 'Content'}
};

class PostNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit = (props) => {
        this.props.createPost(props)
            .then(() => {
                // blog post has been successfully created, navigate the user to index
                // We navigate by calling this.context.router.push with the new path to navigate to
                this.context.router.push('/');
            });
    };

    renderField = (fieldConf, field) => {
        const fieldHelper = this.props.fields[field];

        return (
            <div key={field} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>{fieldConf.label}</label>
                <fieldConf.type type="text" className="form-control" {...fieldHelper}/>
                <div className="text-help">{ fieldHelper.touched ? fieldHelper.error : ''}</div>
            </div>
        );
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h3> Create A New Post</h3>
                {_.map(FIELDS, this.renderField)}
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if (!values[field])
            errors[field] = `Enter a ${field}`;
    });

    return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd argument is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'NewPostForm',
    fields: _.keysIn(FIELDS),
    validate
}, null, {createPost})(PostNew);