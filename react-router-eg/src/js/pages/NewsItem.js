import React from 'react';

export default class Featured extends React.Component {
    render() {
        return (
            <div class='well'>
			        <h1> {this.props.title}</h1>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
			        <button>More Info</button>
			        <p/>
		      </div>
            );
    }
}