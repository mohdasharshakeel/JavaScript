// let h1 = document.querySelector("li");
// h1.addEventListener("click", function () {
//     h1.style.color = "red";
// })

// let h2 = document.querySelector("h2");
// h2.addEventListener('dblclick', function () {
//     h2.style.color = "blue";
//     h2.style.backgroundColor = "yellow";
//     h2.style.fontFamily = "cursive";
// })

// let inn = document.querySelector("input");
// inn.addEventListener('input', function (dets) {

//     if (dets.data !== null) {
//     console.log(dets.data);
// }
    
// })



let set = document.querySelector("select");
let dec = document.querySelector("#device");
 
 nhbgyset.addEventListener("change", function (dets) {
    dec.textContent = `You have selected ${dets.target.value} device`;
})
 

