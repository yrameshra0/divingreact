import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        return (
            <div>
                {this.props.children}
                <h1> KillerNews.net  </h1>
                <Link to='archives'>archives</Link> | 
                <Link to='settings' activeClassName='test'>settings</Link> |
                <button onClick={this.navigate.bind(this)}>featured</button>
            </div>
            );
    }
}