/* var a= 120;
console.log(a)
let b=120
console.log("This is the value declared in var type:"+" "+b)
{
console.log("This is the value declared in var type before altering: "+" "+a )
}
console.log("This is the value declared in var type after altering: "+" "+a )
let ab=10
console.log("This is the value declared in let type:"+" "+ab)
const c= 20
console.log("This is the value declared in const type:"+" "+c)

//if..else

a = 0
if (a===0){
    a=a+1
    console.log(a)
}
else if(a>0){
    console.log("The number is positive")
}
else{
    console.log("The number is negative")
}

i=0
while(i<=a){
    console.log(i)
    i++
}
array = [10,20]//one liner function arrow op
array.forEach(element =>  console.log(element))//arrow op will fetch the elements
 */
/* const array =["Jan",23,2,10.00,Date()]
for(var ele in array){
    console.log(array[ele])
}
console.log("after change")
array.push("3rd years")

for (var ele in array){
    console.log(array[ele])
}

console.log("After poping")
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log(array)
for (var ele in array){
    console.log(array[ele])
}

if(array.length>0){
    console.log("elements are present")
    for (var ele in array){
        console.log(array[ele])

}}
else{
    console.log("No Elements")
}

array.push(1)
console.log(array)


//objects
a={
    car:"Audi",
    model:"AB",
    airbags: 8,
    wheels: 5,
    color:"blue"
}

console.log(a['color'])
console.log(a.airbags)
var some='model'
console.log(a[some])
console.log(a)
a.car= "BMW"
console.log(a)
a.sunroof = {isPresent: "Yes", Shape: "Rectangle"}
console.log(a.sunroof .isPresent) 
for (var ele in a){
    console.log(ele +":"+ a[ele])
    if(typeof a[ele]==="object")
    {
        for (var val in a[ele]){
            console.log(val +":"+ a[ele][val])
        }
    }
} */

/* //functions
function fun_names(a,b){
    console.log(a+b+"Jan"+5+5)
    return a+b+"Jan"+5+5
}
console.log(fun_names(5,5))
 */

/* a=()=> 
    console.log("Hello world")
a() */

class AIANDDS{
    abcd = "alphabet"
    diff(){
        console.log("Janani is a good girl")
    }
    sum(){
        console.log("Janani")
        console.log(this.abcd)
        this.diff()
    }
    
}
a= new Object()
a.name ="AI & DS"
console.log(a)
object1 = new AIANDDS()
object1.sum()

