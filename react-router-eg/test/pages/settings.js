import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Settings from '../../src/js/pages/Settings';

describe('Settings Component', () => {
    it('Renders Settings', () => {
        const wrapper = shallow(<Settings/>);

        expect(wrapper.find('h1').text()).to.equal('Settings');
    });
});