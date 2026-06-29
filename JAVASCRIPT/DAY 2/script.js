//generating 5 members using for loop
for (var i=0;i<5;i++){
    console.log(i)
}

//print a number is prime or not
var num=125
var fc=0;
for (var i=2;i<num;i++){
    if (num%i==0){
        fc++
    }
}
if (fc==0){
    console.log( num+"is a prime number")
}
else{
    console.log(num+"is not a prime number")
}


//another method
function is_prime(num){
    for (i=2;i<Math.sqrt(num)+1;i++){
        if (num%i==0){
            return false
        }
    }return true
}
var num=79
if (is_prime(num)){
    console.log(num+"is a prime number")
}else{
    console.log(num+"is not an prime number")
}



//palindrome or not
var numb=121
var rev=0
var temp=numb
while (temp>0){
    r=temp%10
    rev=rev*10+r
    temp=Math.floor(temp/10)
}if (numb=rev){
    console.log(numb+"is a palindrome number")
}
else{
    console.log(numb+"is not an palindrome number")
}