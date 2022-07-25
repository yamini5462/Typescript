var product = {
    Name: "TV",
    price: 30000,
    stock: true,
    vendor: "Samsung"
};
if (product.vendor == undefined) {
    console.log("Name=" + product.Name + "\nPrice=" + product.price + "\nStock=" + product.stock);
}
else {
    console.log("Name=" + product.Name + "\nPrice=" + product.price + "\nStock=" + product.stock + "\nVendor=\"" + product.vendor);
}
