let items = document.querySelectorAll(".check");
let text = document.getElementById("text");
let checkbox = document.getElementById("toggle");


checkbox.addEventListener('click', (event) => {
    if (event.target.checked === false) {
        items[0].style.background = "#EBE2EB";
        items.forEach(element => {
            element.classList.remove("night");
            element.classList.add("day");
            text.innerHTML = "Day";
        });
    } else {
        items[0].style.background = "#272737";
        items.forEach(element => {
            element.classList.remove("day");
            element.classList.add("night");
            text.innerHTML = "Night";
        });
    }
});