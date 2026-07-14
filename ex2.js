let products = [laptop , phone , tablet];
//add
products.push('mouse');
products.push('keyboard');
//remove
products.splice(products.indexOf('phone'),1);

for(let product of products) {
    console.log(product);
}

console.log(products.length);