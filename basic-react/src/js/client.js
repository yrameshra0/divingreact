import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    constructor() {
        super();
        this.inform = 'Amazing !!!';
    }
    render() {
        return (
            <h1> It is working, {this.inform} </h1>
            );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);