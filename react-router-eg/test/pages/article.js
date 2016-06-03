import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Article from '../../src/js/pages/Article';

describe('Article Component', () => {
    it('Renders Article', () => {
        const wrapper = shallow(<Article title={'Article Title'}/>);

        expect(wrapper.find('h1').text()).to.equal('Article Title');
        expect(wrapper.find('p').text()).to.contain('Lorem ipsum dolor sit amet');
        expect(wrapper.find('button').text()).to.equal('More Info');
    });
});