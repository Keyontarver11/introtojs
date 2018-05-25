//q1

var oper1 = 20 + 4
var oper2 = 26 - 2
var oper3 = 6 * 4
var oper4 = 144 / 6

console.log (oper1, oper2, oper3, oper4)

//q2 

var op1 =6%3
var op2 = 10%2
var op3 =5%2

console.log(op1 > op2)
console.log(op3 > op2)

//q3
var line1= "Test Grades as follows: \n"
var line2= "\t Student1: 96 \n"
var line3= "\t Comment: \"None\" "

console.log(line1 + line2 + line3)

//q4 

var numbers=[1,2,3,5,6,7,8,9,45,56,78]

console.log(numbers[2]+ numbers[4])

//q5

var myself= {
    prop1:"keyon",
    prop2:"27",
    prop3:"weights",
    prop4: "army",
    prop5: "fuck"
}

console.log(`my name is ${myself.prop1} i am ${myself.prop2} i like ${myself.prop3} i used to be in ${myself.prop4} my favorite word is ${myself.prop5}`)

//q6 while loop

var num=2
while(num < 10){
    if(num % 2 === 0){
        console.log(num)
}
num+=2
}

//q7

for(var i=1; i<10; i+=1){
    if(i % 2 !== 0){
        console.log(i)
    }
}

