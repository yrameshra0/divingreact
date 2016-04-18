import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
      console.log('THIS IS TO CHECK THE WORKING');
      return ( < h1 > It is working, Superb < /h1>);
      }
    }

    const app = document.getElementById('app');
    ReactDOM.render( < Layout / > , app);