import React, {Component} from  'react';
import {Link}from 'react-router';
import {connect} from 'react-redux';
import signInAction from '../actions';
class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleAuthenticate = () => {
        this.props.signInAction(!this.props.authenticated)
    };

    authButton() {
        if (this.props.authenticated)
            return <button onClick={this.handleAuthenticate}>Sign Out</button>;

        return <button onClick={this.handleAuthenticate}>Sign In</button>;
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {authenticated: state.authenticated};
}

export default connect(mapStateToProps, {signInAction})(Header);