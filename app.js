let bill = document.querySelector(".inputs-section__bill-input");
let billNumber = parseInt(bill.value);

let people = document.querySelector(".inputs-selection__people-input");
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector(".results__tip-value");

let totalResult = document.querySelector(".results_total-value");

let butons = document.querySelectorAll(".btns__button");

let alert = document.querySelector("#alert");

let tipValue = 5;

console.log(butons);

calculateTip();

butons.forEach((element) =>{
    element.addEventListener("click", (event) =>{
        removeActive();
        element.classList.add("btns__button--selected");



    })
})