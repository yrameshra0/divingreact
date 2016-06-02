import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapase() {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        });
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const featuredClass = location.pathname === '/' ? 'active' : '';
        const archivedClass = location.pathname.match(/^\/archives/) ? 'active' : '';
        const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
        const navClass = collapsed ? 'collapse' : '';

        return (
            <div class='navbar navbar-default navbar-fixed-top' role='navigation'>
	      		<div class='container'>
		      		<div class='navbar-header'>
			      		<button type='button' class='navbar-toggle' onClick={this.toggleCollapase.bind(this)} >
			      			<span class='sr-only'> Toggle navigation </span>
			      			<span class='icon-bar'></span>
			      			<span class='icon-bar'></span>
			      			<span class='icon-bar'></span>
			      		</button>
		      		</div>
		        	<div class={'navbar-collapse ' + navClass} id='bs-example-navbar-collapse-1'>
		          	<ul class='nav navbar-nav'>
			          	<li class={featuredClass}>
			          		<IndexLink to='/' onClick={this.toggleCollapase.bind(this)}>Featured</IndexLink>
			          	</li>
			          	<li class={archivedClass}>
			          		<Link to='archives' onClick={this.toggleCollapase.bind(this)}>Archives</Link>
			          	</li>
			          	<li class={settingsClass}>
			          		<Link to='settings' onClick={this.toggleCollapase.bind(this)}>Settings</Link>
			          	</li>
		          	</ul>
		        	</div>
	      		</div>
    		</div>
            );
    }
}