let easteregg = prompt("Digite seu nome aqui.(isso provavelmente não fara diferença)")

let easter1 = "Pedro";

let easter2 = "Diego";

let easter3 = "Danilo"

if(easteregg == easter1){
    let x;
    x= document.createElement("li");
    x.innerHTML = "<a href='Pedro.html'>Pedro</a>";
    let ule = document.getElementById("menu");
    console.log(ule)
    ule.appendChild(x);
    
}
if(easteregg == easter2){
    let x;
    x= document.createElement("li");
    x.innerHTML = "<a href='diego.html'>Diego</a>";
    let ule = document.getElementById("menu");
    ule.appendChild(x);
}
if(easteregg == easter3){
    let x;
    x= document.createElement("li");
    x.innerHTML = "<a href='danilo.html'>Danilo</a>";
    let ule = document.getElementById("menu");
    ule.appendChild(x);
}