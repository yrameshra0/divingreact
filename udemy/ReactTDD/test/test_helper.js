import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {expect} from 'chai';

// Setting up our test environment to run like a browser in command-line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

// Setting up jquery to use window we defined using jsdom
const $ = jquery(global.window);

// build a 'renderComponent' helper that should render a given react class
function renderComponent(componentClass){
    const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

    // Produces HTML which is then wrapped to jquery so that we get elegant assertions on the testing side
    return $(ReactDOM.findDOMNode(componentInstance));

}

// Build a helper for simulating events

// Set up chai-jquery


export {renderComponent, expect};