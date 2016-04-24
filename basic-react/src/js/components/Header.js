import React from 'react';
import Title from './header/Title';

export default class Header extends React.Component {
    handleTitleChange(e) {
        const title = e.target.value;
        this.props.updateTitle(title);
    }
    render() {
        return (
            <div>
            	<Title title={this.props.title} />
            	<input value={this.props.title} onChange={this.handleTitleChange.bind(this)}/>
            </div>
            );
    }
}