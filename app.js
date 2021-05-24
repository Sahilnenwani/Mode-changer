const colors = ["black", "red", "purple", "Orange"];

const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const color = document.querySelector('.color');

btn.addEventListener("click", () => {
    const selectcolor = 0;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent = colors[selectcolor];
});

btn1.addEventListener("click", () => {
    const selectcolor = 1;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent = colors[selectcolor];
});

btn2.addEventListener("click", () => {
    const selectcolor = 2;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent = colors[selectcolor];
});
btn3.addEventListener("click", () => {
    const selectcolor = 3;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent=colors[selectcolor];
});


