document.addEventListener('DOMContentLoaded', () => {
    const priceElements = document.querySelectorAll('.price');
    const currencySelect = document.getElementById('currency');
    const unitSelect = document.getElementById('unit');

    function updatePrices() {
        const currency = currencySelect.value;
        const unit = unitSelect.value;

        priceElements.forEach(price => {
            const monthlyPrice = price.getAttribute('data-monthly');
            const annuallyPrice = price.getAttribute('data-annually');
            if (unit === 'month') {
                price.textContent = `${currency}${monthlyPrice}/month`;
            } else {
                price.textContent = `${currency}${annuallyPrice}/year`;
            }
        });
    }

    currencySelect.addEventListener('change', updatePrices);
    unitSelect.addEventListener('change', updatePrices);

    updatePrices(); // Initial call to set prices based on default selections
});
