describe('clickCounter', () => {
    let content;
    beforeEach(() => {
        content = app.clickCouner();
    });
    describe('getVaule()', () => {
        it('초기값이 0인 카운터 반환', () => {
            expect(content.getValue()).toBe(0);
        });
    });
    describe('increase()', () => {
        it('카운터 1씩 증가', () => {
            const value = content.getValue();
            content.increase()
            expect(content.getValue()).toBe(value + 1);
        });
    });
});
