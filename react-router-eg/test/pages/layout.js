import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Layout from '../../src/js/pages/Layout';

describe('Layout Component', () => {
    it('Renders Layout -- Navigation', () => {
        const wrapper = shallow(<Layout/>);

        expect(wrapper.find('Navigation')).to.exist;
    });

    it('Renders Layout -- First Header', () => {
        const wrapper = shallow(<Layout/>);

        expect(wrapper.find('h1').text()).to.equal('KillerNews.net');
    });

    it('Renders Layout -- Children Content', () => {
        const wrapper = shallow(<Layout children='some children'/>);

        expect(wrapper.find('#content').text()).to.be.not.empty;
    });
});