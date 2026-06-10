let amount = document.querySelector("#amount");
let fromCurrency = document.querySelector("#fromCurrency");
let toCurrency = document.querySelector("#toCurrency");
let convertBtn = document.querySelector(".convertBtn");
let resultAmount = document.querySelector(".resultAmount");
let exchangeRate = document.querySelector(".exchangeRate");

function updateRate() {
  fetch(`  https://v6.exchangerate-api.com/v6/8d54e34774e7ca62232c5348/latest/
${fromCurrency.value}`)
    .then((res) => res.json())
    .then((data) => 
    {
        const rate = data.conversion_rates[toCurrency.value]
        exchangeRate.innerText=` 1 ${fromCurrency.value} = ${rate} 
        ${toCurrency.value }`
        let result=Number(amount.value*rate)
        resultAmount.innerText=result.toFixed(2)

    });
}

convertBtn.addEventListener("click", updateRate);
