import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Featured from '../../src/js/pages/Featured';

describe('<Featured/>', function() {
    it('Featured to contain Header', function() {
        const wrapper = shallow(<Featured/>);
        expect(wrapper.find('h1').text()).to.equal('Featured');
    });
});