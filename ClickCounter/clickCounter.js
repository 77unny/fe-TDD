const clickCounter = () => {
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