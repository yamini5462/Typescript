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
var empName = "yamini";
var empDept = "IT";
var employee = empName + " Work in the " + empDept + "Department";
console.log(employee);
console.log(empName.charAt(3));
console.log(empName.concat(empDept));
var person = {
    name: "yamini",
    Address: "HYD"
};
console.log(person.Address);
var person1 = {
    name: "yamini",
    Address: "HYD",
    Hobbies: ['Coocking', 'Dancing']
};
console.log(person1.Hobbies);
var fruits = ['Banana', 'Apple', 'Orange'];
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
var person2 = [1, 'Ramudu'];
var employee2 = [3, 'Lakshmanudu', true];
var user;
user = [1, 'Ramudu', 3, 'Lakshmanudu', true];
console.log(user);
//ENUMS:
//Numerics
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person3 = {
    name: "Hema",
    age: 23
};
// function numTest(num3:number){
//     console.log(num3); 
//   }
//   numTest(123);
function numTest(num1) {
    console.log(num1);
}
var num1 = new Number(123);
var num2 = new Number(787);
numTest(num1);
numTest(num2);
function stringTest(str) {
    console.log(str);
}
var str = new Number("Richi");
stringTest(str);
