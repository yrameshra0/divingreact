import jsdom from 'jsdom';
import jquery from 'jquery';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery'

// Setting up our test environment to run like a browser in command-line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

// Setting up jquery to use window we defined using jsdom
const $ = jquery(global.window);

// build a 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>
    );

    // Produces HTML which is then wrapped to jquery so that we get elegant assertions on the testing side
    return $(ReactDOM.findDOMNode(componentInstance));

}

// Build a helper for simulating events
$.fn.simulate = function (eventName, value) {
    if (value)
        this.val(value);

    TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export {renderComponent, expect};