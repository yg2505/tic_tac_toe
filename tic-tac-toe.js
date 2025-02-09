let box=document.querySelectorAll(".box")
let reset=document.querySelector(".resetbtn")
let para=document.querySelector("p")

let turn0=true
let moveCount=0
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let resetFunc=() =>{
    turn0=true;
    moveCount=0
    box.forEach( (b)=>{
        b.disabled=false
        b.innerText=""
    })
    para.style.visibility="hidden"

}

box.forEach( (box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="O"
            box.style.color="#FAEAEA"
            turn0=false
        } else{
            box.innerText="X"
            box.style.color="#BDD9BF"
            turn0=true
        }
        box.disabled=true;
        moveCount++

        checkwinner();
    })
})

let checkwinner=()=>{
    for (i of win){
        let posval1=box[i[0]].innerText
        let posval2=box[i[1]].innerText
        let posval3=box[i[2]].innerText

        if (posval1!=="" && posval2!=="" && posval3!==""){
            if (posval1===posval2 && posval2===posval3){
                para.innerText="Congratulations!! Winner is " + posval1
                
                para.style.visibility="visible" 
                box.forEach( (b)=>{
                    b.disabled=true
                })
            }  
        }
    }
    if (moveCount === 9) {
        para.innerText = "It's a Draw!";
        para.style.visibility = "visible";
    }
}
reset.addEventListener("click",()=>{
    resetFunc()
})