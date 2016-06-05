import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navigation = React.createClass({
    getInitialState: function() {
        return {
            collapsed: true
        };
    },
    toggleCollapase: function() {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        });
    },
    render: function() {
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
                        <button type='button' class='navbar-toggle' onClick={this.toggleCollapase} >
                            <span class='sr-only'> Toggle navigation </span>
                            <span class='icon-bar'></span>
                            <span class='icon-bar'></span>
                            <span class='icon-bar'></span>
                        </button>
                    </div>
                    <div class={'navbar-collapse ' + navClass} id='newsNav'>
                    <ul class='nav navbar-nav'>
                        <li class={featuredClass}>
                            <IndexLink to='/' onClick={this.toggleCollapase}>Featured</IndexLink>
                        </li>
                        <li class={archivedClass}>
                            <Link to='archives/somearticle' onClick={this.toggleCollapase}>Archives</Link>
                        </li>
                        <li class={settingsClass}>
                            <Link to='settings' onClick={this.toggleCollapase}>Settings</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            );
    }
});

export default Navigation;