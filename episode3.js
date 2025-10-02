console.log("Exercice 1 : Manipuler des objets");
const user  ={ id: 1, name: "Alice", age: 22 };

// 1. Affiche son nom
// 2. Ajoute un champ "email"
// 3. Change son âge à 23
// 4. Supprime la clé "age"

console.log(user.name);
user.email = "alice.ça_glisse@gmail.com"
console.log(user);
user.age = 23;
console.log(user);
delete user.age;
console.log(user);

console.log("Exercice 2 : Tableaux d'objets");

const users = [ 
{ id: 1, name: "Alice", age: 22 }, 
{ id: 2, name: "Bob", age: 30 }, 
{ id: 3, name: "Charlie", age: 17 }, 
{ id: 4, name: "Diana", age: 25 } 
]; 

// 1. Affiche tous les noms avec forEach. 
// 2. Crée un tableau des noms avec map. 
// 3. Garde uniquement les utilisateurs majeurs avec filter. 
// 4. Trouve l’utilisateur avec l’id = 2 avec find. 

let noms = users.forEach(user=>{
    console.log(user.name)
});

let tabNoms = users.map(users=>users.name);
console.log(tabNoms);

let majeur = users.filter(user=>{
    if (user.age >17){
        return user
    }
});
console.log(majeur);

let idUser = users.find(user=>user.id==2);
console.log(idUser);

console.log("Exercice 3 : Conversion JSON ");

const product = { id: 101, name: "iPhone", price: 999 }; 

// 1. Transforme l’objet en JSON 
// 2. Stocke-le dans une variable 
// 3. Convertis-le de nouveau en objet 
// 4. Affiche son prix

const json = JSON.stringify(product);
console.log(json)

var a = json;
console.log(a);
const obj = JSON.parse(a);
console.log(obj);
console.log(product.price);

console.log("Exercice 4 : Mini projet 'Catalogue' ");
 
const products = [ 
{ id: 1, name: "iPhone", price: 800 }, 
{ id: 2, name: "iPad", price: 650 }, 
{ id: 3, name: "iWatch", price: 750 } 
]; 
// 1. Écris une fonction listProducts(products) qui affiche tous les produits. 
// 2. Écris une fonction filterByPrice(products, maxPrice) qui retourne les 
// produits moins chers qu’un prix donné. 
// 3. Écris une fonction getProductById(products, id) qui retourne le bon produit 
// ou null si pas trouvé.

function listProducts(products){
    list.forEach(product=>{
        return product
    });
};




// function afficherLivres(liste) {
//     resultat.innerHTML = '';

//     liste.forEach(livre => {
//         const div = document.createElement('div');
//         div.innerHTML = `${livre.titre}, écrit par ${livre.auteur} en ${livre.annee}`;
//         resultat.appendChild(div);
//   });
// }