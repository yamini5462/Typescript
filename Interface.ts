interface IProduct{
    Name:String;
    price:number;
    stock:boolean;
     readonly vendor?:string
}
let product:IProduct={
    Name:"TV",
    price:30000,
    stock:true,
    vendor:"Samsung"
}
product.Name="Fan";
if(product.vendor==undefined){
console.log(`Name=${product.Name}\nPrice=${product.price}\nStock=${product.stock}`);
} else
{
    console.log(`Name=${product.Name}\nPrice=${product.price}\nStock=${product.stock}\nVendor="${product.vendor}`);
}