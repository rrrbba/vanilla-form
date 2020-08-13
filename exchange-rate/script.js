const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two]; //using currency two as an index for the rate variable

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
            //innerText sets the content as plain text, innerHTML edits the contents of an HTML element

            //Calculates the amount currency two should be up to decimal places
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}
//fetch runs asychron. and then returns a promise when it's done fetching and we catch the promise using .then and .catch. With fetch api, you have to take the res and format it to what you want using res => res.json() because we want it in the json format. After doing that you get another promise back which gives the data back
//200 is success, 300 is redirect , 400 is user error, 500 is server error




//Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate); //input runs if something is typed in or if we use the arrows
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value; //need a temp variable for currency1's value

    currencyEl_one.value = currencyEl_two.value; //swapping currency one value with currency two value
    currencyEl_two.value = temp; //swapping currencty 2 value with the temp variable(currency1 value)

    calculate(); //calling calculate
})

calculate();