function randomValue(){
    return Math.floor(Math.random()*10 +1)
}

function sumUpTo3(x,y,z){
    console.log(x)
    return x+y+z
}

console.log(sumUpTo3(randomValue(),2,3))