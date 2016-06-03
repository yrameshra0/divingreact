import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Navigation from '../../src/js/pages/Navigation';

describe('Navigation Component', () => {
    const wrapperProvider = function(pathName) {
        const location = {
            pathname: pathName
        };

        return shallow(<Navigation location={location}/>);
    };

    it('Renders Navigation -- Collapse Toggling', () => {
        const wrapper = wrapperProvider('/');
        expect(wrapper.find('.collapse')).to.exist;
        expect(wrapper.find('.navbar-collapse').hasClass('collapse')).to.be.true;
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.navbar-collapse').hasClass('collapse')).to.be.false;
    });

    it('Activates List Item based over location', () => {
        [
            '/',
            '/settings',
            '/archives/some'
        ].map((pathname) => {
            const wrapper = wrapperProvider(pathname);
            expect(wrapper.find('.active')).to.not.be.null;
        });
    });
});