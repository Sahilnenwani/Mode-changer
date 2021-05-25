const colors = ["black", "red", "purple"] ;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const nav=document.querySelector('.navbar');

const color = document.querySelector('.color');

btn.addEventListener("click", () => {
    const selectcolor = 0;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent = colors[selectcolor];
    nav.style.backgroundColor=colors[selectcolor];
});

btn1.addEventListener("click", () => {
    const selectcolor = 1;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent = colors[selectcolor];
    nav.style.backgroundColor=colors[selectcolor];
});

btn2.addEventListener("click", () => {
    const selectcolor = 2;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent = colors[selectcolor];
    nav.style.backgroundColor=colors[selectcolor];
});

btn3.addEventListener("click", () => {
    const selectcolor = 3;
    document.body.style.backgroundColor = colors[selectcolor];
    color.textContent=colors[selectcolor];
});


btn3.addEventListener("click", () => {
    let hexvalue="#";
    for (let index = 0; index < 6; index++) {
        hexvalue += hex[randomnumber()];
        
    }
    nav.style.backgroundColor=hexvalue;
    document.body.style.backgroundColor=hexvalue;
    color.textContent=hexvalue;
    
    })
    
    
    const randomnumber= () => (
       Math.floor(Math.random()* hex.length)
    );
