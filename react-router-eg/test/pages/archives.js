import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Archives from '../../src/js/pages/Archives';

describe('Archives Component', () => {
    it('Renders Archives', () => {
        const article = {
            article: 'Mocked Param'
        };
        const wrapper = shallow(<Archives params={article}/>);
        expect(wrapper.find('h1').text()).to.equal('Archives (Mocked Param)');
    });
});