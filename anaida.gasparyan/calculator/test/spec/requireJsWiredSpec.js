define(['jquery'], function($) {

    describe('just checking', function() {
        it('works for jquery', function() {
            var el = $('<div>Testing...</div>');
            expect(el.text()).toEqual('Testing...');
        });
    });
});