// DOM-Doument object model-which is easily used to access the modified HTML Files/bridge b/w HTML and JS


console.log(document)
console.log(document.body)

let para=document.getElementsByTagName("p")
console.log(para)

console.log(para[1])



let heading=document.getElementsByTagName("h1")
console.log(heading)   //# represents ID and . represents Class
console.log(heading[1])





let sec=document.getElementsByClassName("message")
console.log(sec)
console.log(sec[2])


let anju=document.getElementById("I_D")
console.log(anju)

anju.innerText="hai"
anju.innerText="<u>haii</u>"
anju.innerHTML="<u>haai</u>"