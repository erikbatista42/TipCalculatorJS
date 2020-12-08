const billInput = document.querySelector("#input-bill")
const tipInput = document.querySelector("#input-tip")
const peopleInput = document.querySelector("#input-people")

const displayTip = document.querySelector("#display-tip")
const displayTotal = document.querySelector("#display-total")


billInput.addEventListener('change', handleBill)
tipInput.addEventListener('change', handleBill)
peopleInput.addEventListener('change', handleBill)


function handleBill(e) {
    const bill = billInput.value;
    const percent = tipInput.value;
    const people = peopleInput.value;

    const total = ((bill * percent / 100) / people) + bill / people

    displayTip.innerHTML = bill * percent / 100;
    displayTotal.innerHTML =  total
}
