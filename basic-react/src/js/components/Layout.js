import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome ;)'
        };
    }

    updateTitle(title) {
        this.setState({
            title
        });
    }

    render() {
        return (
            <div>
            	<Header updateTitle={this.updateTitle.bind(this)} title={this.state.title}/>
            	<Footer />
            </div>
            );
    }
}