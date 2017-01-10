import React, {Component} from 'react';
import {fetchPosts} from '../../actions/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts = (post) => {
        return this.props.posts.map((post) => {
                return (
                    <li className="list-group-item post-link" key={post.id}>
                        <Link to={"/post/" + post.id}>
                            <strong className="col-xs-12 col-md-8">{post.title}</strong>
                            <span className="col-xs-6 col-md-4 text-xl-right">{post.categories}</span>
                        </Link>
                    </li>

                );
            }
        );
    };

    render() {
        return (
            <div>
                <div className="text-xl-right">
                    <Link to="post/new" className="btn btn-primary">
                        Add new post
                    </Link>
                </div>

                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);