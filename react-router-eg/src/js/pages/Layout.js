import React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';
import Article from './Article';

export default class Layout extends React.Component {
    navigate() {
        this.props.history.pushState(null, '/');
    }

    render() {
        const {location} = this.props;
        const containerStyle = {
            marginTop: '60px'
        };
        return (
            <div>
                <Navigation location={location}/>
                <div class='container' style={containerStyle}>
                    <div class='row'>
                        <div class='col-lg-12'>
                            <h1> KillerNews.net  </h1>

                                {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
            );
    }
}