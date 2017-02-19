import {expect} from "../test_helper";
import {saveComment} from '../../src/actions';
import {SAVE_COMMENT} from '../../src/actions/types';


describe('actions', () => {

    describe('saving comment', () => {
        let action;
        beforeEach(() => {
            action = saveComment('New Comment');
        });

        it('has correct type', () => {
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        it('has correct payload', () => {
            expect(action.payload).to.equal('New Comment');
        });
    });
});