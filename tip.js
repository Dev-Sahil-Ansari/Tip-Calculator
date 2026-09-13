let billAmount = document.getElementById("bill-Amount");
let tipPercentage = document.getElementById("tip-Percentage");
let calculateButton = document.getElementById("calculate-button");
let reSult = document.getElementById("result");

let billStored = "";
let tipStored = "";


calculateButton.addEventListener("click", function() {
    storedValue = billAmount.valueAsNumber;
    console.log("Stored value:", storedValue);
});

calculateButton.addEventListener("click", function() {
    sToredValue = tipPercentage.valueAsNumber;
    console.log("tip-stored", sToredValue)
})

calculateButton.addEventListener("click", function() {
    AddStoredValue = billAmount.valueAsNumber * (1 + tipPercentage.valueAsNumber/100);
    let result = Math.round(AddStoredValue);
    console.log("sum is", result);
    reSult.textContent = result;
})


console.log("Made by Sahil Ansari");