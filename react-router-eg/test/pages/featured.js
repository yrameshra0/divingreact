import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Featured from '../../src/js/pages/Featured';

describe('Featured Component', () => {
    it('Renders Artices', () => {
        const wrapper = shallow(<Featured/>);
        expect(wrapper.find('Article')).to.have.length(4);
    });

    it('Renders Random Text at Ad Spot', () => {
        const adText = [
            'Ad Spot #1',
            'Ad Spot #2',
            'Ad Spot #3',
            'Ad Spot #4',
            'Ad Spot #5'
        ];

        const wrapper = shallow(<Featured/>);
        const wrapperAdText = wrapper.find('#randomAd').text();
        expect(adText).to.include(wrapperAdText);
    });
});