//In this program the function utilizes the values from the
//two input fields to calculate the total.

const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const btnEl = document.getElementById("calculate");
const totalSpan = document.getElementById("total");

const calculateTotal = () => {
    const billValue = billInput.value;
    const tipValue = tipInput.value;

    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
};

btnEl.addEventListener("click", calculateTotal);