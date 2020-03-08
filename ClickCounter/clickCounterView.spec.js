describe('clickCounterView 모듈', () => {
    let updateEl, view;
    beforeEach(() => {
        updateEl = document.createElement('span');
        view = clickCounterView(clickCounter(), updateEl);
    });
    describe('updateView()', () => {
        it('clickCounter의 getValue() 값을 element에 출력한다.', () => {
            const counterValue = clickCounter().getValue()
            view.updateView();
            expect(updateEl.innerHTML).toBe(counterValue.toString());
        });
    });
});