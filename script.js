const principalBox = document.querySelector("#principal")
const rateBox = document.querySelector("#rate")
const periodsBox = document.querySelector("#periods")
const timeBox = document.querySelector("#time")
const compoundInterestSpan = document.querySelector("#answer")

function calculateCompoundInterest() {
    const principal = principalBox.value
    const rate = rateBox.value / 100
    const period = periodsBox.value
    const time = timeBox.value
    const amount = principal * (1 + (rate / period)) ** (period * time)
    const interest = amount - principal

    compoundInterestSpan.textContent = interest.toFixed(2);
}

for (let box of [principalBox, rateBox, periodsBox, timeBox]) {
    box.addEventListener('input', calculateCompoundInterest)
}

