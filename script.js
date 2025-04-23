function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
let container = document.querySelector(".container")

let button = document.querySelector("button")
button.addEventListener("click",()=>{
    let size  = prompt("number of grid")
    if(size <=64){
        for(let i = 0 ;i<=size;i++){
            let div = document.createElement("div")
            container.appendChild(div)
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor=randomColor()
            })
            
        }
        
    }
    else{
        alert("too big")
    }
})

