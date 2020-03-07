describe('clickCounterView 모듈', () => {
    describe('updateView()', () => {
        it('반환값이 0', () => {
            const content = clickCounterView();
            expect(content.updateView()).toBe(0);
        });
    });
});
