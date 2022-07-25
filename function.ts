function add(n1:number, n2:number) {
    return n1 + n2;
}
function printResult(num:any) {
    console.log('result is:' + num);

}
printResult(add(3, 8));
let combineValues;
combineValues = add;
console.log(combineValues(3, 2));
