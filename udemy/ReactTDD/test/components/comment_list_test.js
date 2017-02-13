import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentList);
    });

    it('is usable', () => {
        expect(component).to.exist;
    });
});