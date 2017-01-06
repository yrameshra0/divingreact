import React, {Component} from 'react';
import {fetchPosts} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPost = (post) => {
        return (
            <div key={post.id}>
                <div>Title : {post.title}</div>
                <div>Cateogries : {post.categories}</div>
            </div>
        );
    };

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="post/new" className="btn btn-primary">
                        Add new post
                    </Link>
                </div>

                List of blog posts :

                {this.props.all.map(this.renderPost)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {all: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);