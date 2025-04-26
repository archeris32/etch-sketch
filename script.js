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
    let size  = parseInt(prompt("number of grid"))
    let divSize = 500;
    container.innerHTML = ''
    if(size <=64){
        let height  = (divSize/size - 0.01) + 'px'
        let width  = (divSize/size -0.01)+ 'px'
        console.log(height)
        for(let i = 0 ;i<size*size;i++){
            let div = document.createElement("div")
            container.appendChild(div)
            div.style.width = width 
            div.style.height = height 
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor=randomColor()
                
            })
            
        }
        
    }
    else{
        alert("too big")
    }
})

