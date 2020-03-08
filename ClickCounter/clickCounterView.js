const clickCounterView = (clickCounter, updateEl) => {
    return {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
        }
    };
};
