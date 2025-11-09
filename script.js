// Fiksni kursevi u odnosu na 1 BAM
const rates = {
    "BAM": 1,
    "EUR": 0.51,
    "USD": 0.55,
    "GBP": 0.43
};

document.getElementById("converter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from-currency").value;
    let to = document.getElementById("to-currency").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Unesi ispravan iznos!");
        return;
    }

    // Pretvaranje iz početne valute u BAM
    let amountInBAM = amount / rates[from];
    // Pretvaranje iz BAM u ciljnu valutu
    let converted = amountInBAM * rates[to];

    // Zaokruženo na 2 decimale
    converted = converted.toFixed(2);

    document.getElementById("result-text").innerText = 
        `${amount} ${from} = ${converted} ${to}`;
});
