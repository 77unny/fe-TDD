describe('clickCounter', () => {
    describe('getVaule()', () => {
        it('초기값이 0인 카운터 반환', () => {
            const content = app.clickCouner()
            expect(content.getValue()).toBe(0);
        });
    });
});
