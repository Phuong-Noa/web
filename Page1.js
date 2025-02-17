const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");

const changeColorText = () => {
    let index = document.querySelector(".index").value;
    let color = document.querySelector(".color").value;
    document.querySelector(`.tab${index}`).style = `color:${color}`;
}
const CreateDiv = () => {
    let number = document.querySelector(".number").value;
    let divContent = "";
    for (let i = 0; i < number; i++){
        divContent += `<div class="tab${i+1}">TAB ${i+1}</div>`
    }
    document.querySelector(".tabs").innerHTML=divContent;
}
