import React, {Component} from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    toggleCheckboxChange = () => {
        const {handleCheckboxChange, info} = this.props;

        handleCheckboxChange(info);
    };

    render() {
        return <input checked={this.props.done} onChange={this.toggleCheckboxChange} type="checkbox"/>;
    }
}