type User={name:string,age:number};
function greet(user:any){
    console.log('Hi,I am'+user.name);
}
function isolder(user:User,checkAge:number){
    return checkAge>user.age;
}