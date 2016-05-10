import React from 'react';

export default class Archives extends React.Component {
    render() {
        const {params} = this.props;
        const {article} = params;
        return (
            <h1> Archives ({article})</h1>
            );
    }
}