const colors = ["black", "red", "purple"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btns = document.querySelectorAll(".btn");
const color = document.querySelector(".color");
const nav=document.querySelector('.navbar')

let selectcolor = 0;

const showmode=()=>{
  document.body.style.backgroundColor = colors[selectcolor];
  color.textContent = colors[selectcolor];
  nav.style.backgroundColor = colors[selectcolor];
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clicked = e.currentTarget.classList;
    if (clicked.contains("btn1")) {
      selectcolor=0;
      showmode();
      } else if (clicked.contains("btn2")) {
      selectcolor = 1;
      showmode();
    } else if (clicked.contains("btn3")) {
      selectcolor = 2;
      showmode();
    } 
    else if (clicked.contains("btn4")){
      let hexvalue = "#";
      for (let index = 0; index < 6; index++) {
        hexvalue += hex[randomnumber()];
      }
      
      document.body.style.backgroundColor = hexvalue;
      color.textContent = hexvalue;
      nav.style.backgroundColor = hexvalue;
      
    }
  });
})
const randomnumber = () => Math.floor(Math.random() * hex.length);








//old code

//  const colors = ["black", "red", "purple"] ;
//  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//  const color = document.querySelector('.color');
// const btn4 =document.getElementById('btn4');
// const nav=document.querySelector('.navbar')


//  btn.addEventListener("click", () => {
//      const selectcolor = 0;
//      document.body.style.backgroundColor = colors[selectcolor];
//      color.textContent = colors[selectcolor];
//      nav.style.backgroundColor=colors[selectcolor];
//  });

//  btn1.addEventListener("click", () => {
//      const selectcolor = 1;
//      document.body.style.backgroundColor = colors[selectcolor];
//      color.textContent = colors[selectcolor];
//      nav.style.backgroundColor=colors[selectcolor];
//  });

//  btn2.addEventListener("click", () => {
//      const selectcolor = 2;
//      document.body.style.backgroundColor = colors[selectcolor];
//      color.textContent = colors[selectcolor];
//      nav.style.backgroundColor=colors[selectcolor];
//  });

//  btn3.addEventListener("click", () => {
//      const selectcolor = 3;
//      document.body.style.backgroundColor = colors[selectcolor];
//      color.textContent=colors[selectcolor];
//  });

//  btn3.addEventListener("click", () => {
//      let hexvalue="#";
//      for (let index = 0; index < 6; index++) {
//          hexvalue += hex[randomnumber()];

//      }
//      nav.style.backgroundColor=hexvalue;
//      document.body.style.backgroundColor=hexvalue;
//      color.textContent=hexvalue;

//      })

//      const randomnumber= () => (
//         Math.floor(Math.random()* hex.length)
//      );
