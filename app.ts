console.log('Time to get started...');
// function add(n1:number,n2:number)
// {
//     return n1+n2;
// }
// const number1=4;
// const number2=9;
// const res=add(number1,number2);
// console.log(res);

//String
let empName:string="yamini";
let empDept:string="IT";
let employee:string=empName+" Work in the "+empDept+ "Department";
console.log(employee);
console.log(empName.charAt(3));

console.log(empName.concat(empDept));


const person:{
    name:string;
    Address:string;
}={
    name:"yamini",
    Address:"HYD"
};
console.log(person.Address);
const person1:{
    name:string;
    Address:string;
    Hobbies:string[];
}={
    name:"yamini",
    Address:"HYD",
    Hobbies:['Coocking','Dancing']
};
console.log(person1.Hobbies);


let fruits:string[]=['Banana','Apple','Orange'];
// fruits[0];
// fruits[1];
// fruits[2];
fruits.sort();
console.log(fruits);
fruits.push('Graps');
fruits.push('Pine-Apple');
fruits.pop();

console.log(fruits);
console.log(fruits.indexOf('Graps'));

//Tuple:
let person2:[number,string]=[1,'Ramudu'];
let employee2:[number,string,boolean]=[3,'Lakshmanudu',true];
var user:[number,string,number,string,boolean];
user=[1,'Ramudu',3,'Lakshmanudu',true];
console.log(user);

//ENUMS:
//Numerics
enum Role{ ADMIN,READ_ONLY,AUTHOR};
const person3={
    name:"Hema",
    age:23,

}


// function numTest(num3:number){
//     console.log(num3); 
//   }
//   numTest(123);

  function numTest(num1:Number):void{
    console.log(num1); 
  }
  var num1 = new Number(123);
  var num2 = new Number(787);
  numTest(num1);
   numTest(num2);


   function stringTest(str:Number):void{
    console.log(str); 
  }
  var str:Number= new Number("Richi");
  stringTest(str);

  