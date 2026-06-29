const change=() =>{
    let display=document.getElementById("display")
    display.innerHTML="Bye"
    display.style.color="red"
    display.style.background="blue"
}


let display=document.getElementById("display1")
let count=0
const inc=() =>{
    count++
    display.innerHTML=count
}
const dec=() =>{
    if (count>0){
        count--
        display.innerHTML=count
    }

}
inc()
dec()