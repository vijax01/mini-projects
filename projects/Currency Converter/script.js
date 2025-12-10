const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

const selects = document.querySelectorAll(".select-container select");
const btn = document.querySelector("button");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const msg = document.querySelector("#msg");
let from , to;
// filled the select tag with all the country options 
for(let select of selects) {
    for(currentCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currentCode;
        newOption.value = countryList[currentCode];
        select.append(newOption);
        if(select.name === "from" && currentCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currentCode === "INR") {
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change", (evt) => {
        // for every change in select tag, the updateFlag function is called
        updateFlag(evt.target);
    });
}



const updateFlag = (element) => {
    let currentCode = element.value;
    let newSrc = `https://flagsapi.com/${currentCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener('click', async () => {
    let amount = document.getElementById('amount');
    let amountValue = amount.value;
    if(amountValue === "" || amountValue < 1) {
        amountValue = 1;
        amount.value = "1";
    }
    console.log(fromCurrency.value, toCurrency.value);
    for(let country in countryList) {
        if(countryList[country] === fromCurrency.value) 
            from = country;

        if(countryList[country] === toCurrency.value) 
            to = country;
    }
    const url = `${BASE_URL}${from}`;

    fetch(url).then(response => response.json()).then(data => {
        const rate = data.rates[to] * amountValue;
        console.log(rate);

        // displaying the output to the user 
        msg.children[0].innerText = amountValue;
        msg.children[1].innerText = from;
        msg.children[3].innerText = rate.toFixed(2);
        msg.children[4].innerText = to;
    });

});