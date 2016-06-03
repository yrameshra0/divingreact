import React from 'react';

export default function Archives(props) {
    const {params} = props;
    const {article} = params;

    return <h1>Archives ({article})</h1>;
}