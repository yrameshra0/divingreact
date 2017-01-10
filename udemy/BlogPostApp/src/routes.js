import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostIndex from './components/post/index';
import PostNew from './components/post/new';
import PostShow from './components/post/show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="/post/new" component={PostNew} />
        <Route path="/post/:id" component={PostShow} />
    </Route>);