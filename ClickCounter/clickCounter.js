const app = {};

app.clickCouner = () => {
    let value = 0;
    return {
        getValue() {
            return value;
        },
        increase() {
            value++;
        }
    };
};
