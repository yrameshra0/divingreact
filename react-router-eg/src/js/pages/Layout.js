import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
import NewsItem from './NewsItem';

export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        return (
            <div>
                <Navigation />
                <p> </p><p> </p>
                {this.props.children}
                <h1> KillerNews.net  </h1>
                <Link to='archives'>archives</Link> | 
                <Link to='settings' activeClassName='test'>settings</Link> |
                <button onClick={this.navigate.bind(this)}>featured</button>
                <p> </p><p> </p>
                <NewsItem title='Heading 1' />
                <NewsItem title='Heading 2' />
                <NewsItem title='Heading 3' />
            </div>
            );
    }
}