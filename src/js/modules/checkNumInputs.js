const checkNumInputs = (selector) => {
    //проверка на то,чтобы вводились только цифры(можно задавать через html type)
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        });
    });
};
export default checkNumInputs;