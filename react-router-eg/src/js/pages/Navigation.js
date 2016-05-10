import React from 'react';

export default class Navigation extends React.Component {
    render() {

        return (
            <div class='navbar navbar-default navbar-fixed-top'>
	      		<div class='container'>
		        	<div class='navbar-collapse collapse' id='navbar-main'>
		          	<ul class='nav navbar-nav'>
			          	<li><a href='#featured'>Featured</a></li>
			          	<li><a href='#archives'>Archives</a></li>
			          	<li><a href='#settings'>Settings</a></li>
		          	</ul>
		        	</div>
	      		</div>
    		</div>
            );
    }
}