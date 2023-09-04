// selecteurs  
//document.querySelector('h4').style.color="red"
//const bhtml = document.querySelector('h4');
// clik event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector('p');
const mousemove = document.querySelector('.mousemove');

// questionContainer.style.borderRadius = "150px";

// questionContainer.addEventListener("click", () => {
//     questionContainer.style.background = "red";
//     questionContainer.classList.toggle("clicked")
// })
btn1.addEventListener('click', () => {
    reponse.classList.add("show-reponse");
    reponse.style.background = "green";
});
btn2.addEventListener('click', () => {
    reponse.classList.add("show-reponse");
    reponse.style.background = "red";

});

// mouse event

window.addEventListener('mousemove', (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";

});

window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener('mouseup', () => {
    mousemove.style.transform = "scale(2) translate(-50%, -50%)";
    mousemove.style.border = "2px solid toal";
});
questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "pink";
});
reponse.addEventListener("mouseover", () => {
    reponse.style.transform = "rotate(3deg)";
});

// keypress
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener('keypress', (e)=>{
    key.textContent = e.key;
    if (e.key === "k") {
        keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
        keypressContainer.style.background = "teal";
    }else {
        keypressContainer.style.background = "red";
    }
});


// scroll event
 const nav = document.querySelector("nav");

 window.addEventListener('scroll', ()=> {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    }else { 
        nav.style.top = "-50px";
    }
 });


 // --------------------------------------------
 const inputName = document.querySelector('input[type="text"]');
 const select = document.querySelector("select");
 const form = document.querySelector("form");
 let pseudo = "";
 let language ="";

 inputName.addEventListener('input', (e)=>{
    pseudo = e.target.value;
    console.log(pseudo);
 });

 select.addEventListener("input", (e)=>{
    language = e.target.value;
 });

 form.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector("form > div").innerHTML=`
            <h3>Pseudo : ${pseudo}<h3>
            <h4>Langage prefere : ${language}<h4>
        `;
    }else {
        alert("veuiller accepter les CGV");
    }
 });

 // -----------------------------------
 // load event
//  body.addEventListener("load", ()=> {
//     document.querySelector(".Bienvenue").innerHTML=`<h1>Bienvenue!</h1>`;
//  })
// forEach

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e)=> {
        box.style.transform="scale(0.7)";
    });
    
});

// ---------------------------

//add event listener Vs onclick

document.body.onclick= ()=> {
    
};
// le on... ecrase l'evennement precedant on...
// stop propagation
questionContainer.addEventListener("click", ()=>{
    alert("test");
}); 

// -----------------------
//  window.open("http://google.com", "cours js", "height=500, width=600");
// window.close pour fermer la fenettre

btn2.addEventListener("click", ()=>{
    confirm("voulet vous vraiment vous tromper?")
});
// let interval = setInterval(()=>{
//     document.body.innerHTML += `
//         <div class='box'>
//             <h6> Nouvelle boite<h6>
//         </div>
//     `;
// },1000);

// document.body.addEventListener('click', ()=>{
//     clearInterval(interval);
// });
  