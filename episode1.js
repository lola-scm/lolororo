console.log("Exercice 1 : Utilisation de map() ");
// Objectif : Doubler tous les éléments d'un tableau de nombres. 
// 1. Créez un tableau numbers avec les valeurs [1, 2, 3, 4, 5]. 
// 2. Utilisez la méthode map() pour créer un nouveau tableau où chaque nombre est 
// multiplié par 2. 
// 3. Affichez le tableau d'origine et le tableau transformé.


let tab = [1, 2, 3, 4, 5];
let multiple = tab.map(tab=>tab*2);
console.log(tab);
console.log(multiple);

console.log("Exercice 2 : Utilisation de filter() ");
// Exercice 2 : Utilisation de filter() 
// Objectif : Extraire les nombres pairs d'un tableau. 
// 1. Créez un tableau numbers avec les valeurs [1, 2, 3, 4, 5, 6, 7, 8]. 
// 2. Utilisez la méthode filter() pour créer un nouveau tableau qui contient 
// uniquement les nombres pairs. 
// 3. Affichez le tableau d'origine et le tableau filtré.


let tab2 = [1, 2, 3, 4, 5, 6, 7, 8];
let pairs = tab2.filter(tab2=>{
    if (tab2%2==0){
            return tab2;
    }
});
console.log(tab2);
console.log(pairs);

console.log("Exercice 3 : Utilisation de forEach() ");

// Objectif : Calculer et afficher la somme de tous les éléments d'un tableau. 
// 1. Créez un tableau numbers avec les valeurs [10, 20, 30, 40, 50]. 
// 2. Utilisez la méthode forEach() pour parcourir le tableau et calculer la somme de 
// tous les éléments. 
// 3. Affichez la somme.


let tab3 = [10, 20, 30, 40, 50];
let somme = 0;
tab3.forEach(element => {
    somme+=element;
    return somme
});

console.log(tab3);
console.log (somme);

console.log("Exercice 4 : Combinaison de map() et filter() ");
// Objectif : Filtrer les nombres pairs, puis doubler chacun d'eux. 
// 1. Créez un tableau numbers avec les valeurs [1, 2, 3, 4, 5, 6, 7, 8, 9, 
// 10]. 
// 2. Utilisez filter() pour extraire uniquement les nombres pairs. 
// 3. Utilisez map() pour doubler chaque nombre pair. 
// 4. Affichez le tableau final après filtrage et transformation. 


let tab4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pairs2 = tab4.filter(tab4=>{
    if(tab4%2==0){
        return tab4
    }
});
let double = pairs2.map(pairs2 =>pairs2*2);
console.log(tab4)
console.log(pairs2);
console.log(double);

console.log("Exercice 5 : Utilisation de map(), filter() et forEach() dans un cas ");

// réel 
// Objectif : Travailler avec un tableau d'objets pour en extraire et manipuler les données. 
// Créez un tableau students avec les informations suivantes : 
// const students = [ 
// { name: "Alice", grade: 15 }, 
// { name: "Bob", grade: 8 }, 
// { name: "Charlie", grade: 18 }, 
// { name: "David", grade: 12 } 
// ]; 
// 1.  
// 2. Utilisez filter() pour extraire les étudiants ayant une note supérieure à 10. 
// 3. Utilisez map() pour créer un tableau contenant seulement les noms des étudiants. 
// 4. Utilisez forEach() pour afficher un message de félicitations pour chaque étudiant 
// ayant une note supérieure à 15.

let students =  [ 
{ name: "Alice", grade: 15 }, 
{ name: "Bob", grade: 8 }, 
{ name: "Charlie", grade: 18 }, 
{ name: "David", grade: 12 } 
]; 
let sup10 = students.filter(students=>{
    if(students.grade>10){
        return students
    }
});
console.log(students);
console.log(sup10);

let nom = students.map(students=>students.name);
console.log(nom);

let congrats = students.forEach(student =>{
    if (student.grade>15){
        console.log ("Félicitations, " +student.name)
    }
});

console.log("Exercice 6 : Challenge sur map(), filter() et forEach() ");
// Objectif : Manipuler un tableau d'objets pour extraire des informations et effectuer des 
// calculs. 
// Créez un tableau products contenant des objets de produits avec les propriétés name, 
// price, et category : 
// const products = [ 
// { name: "Laptop", price: 1200, category: "Electronics" }, 
// { name: "Phone", price: 700, category: "Electronics" }, 
// { name: "Shoes", price: 50, category: "Clothing" }, 
// { name: "Jacket", price: 80, category: "Clothing" }, 
// { name: "Desk", price: 150, category: "Furniture" } 
// ]; 
// 1.  
// 2. Utilisez filter() pour obtenir tous les produits dans la catégorie "Electronics". 
// 3. Utilisez map() pour obtenir un tableau avec seulement les prix de ces produits. 
// 4. Utilisez forEach() pour afficher le nom et le prix de chaque produit dans la 
// catégorie "Clothing".

let products = [ 
{ name: "Laptop", price: 1200, category: "Electronics" }, 
{ name: "Phone", price: 700, category: "Electronics" }, 
{ name: "Shoes", price: 50, category: "Clothing" }, 
{ name: "Jacket", price: 80, category: "Clothing" }, 
{ name: "Desk", price: 150, category: "Furniture" } 
]; 

let electronics = products.filter(products=>{
    if (products.category=="Electronics"){
        return products
    }
});
console.log(electronics);

let price = products.map(products=>products.price);
console.log(price);

let clothing = products.forEach(product=>{
    if (product.category=="Clothing"){
        console.log (product.name +" "+ product.price);
    }
});