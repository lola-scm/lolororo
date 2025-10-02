console.log("1. Manipuler des données JSON (simulation d’API)")
// 1. Afficher tous les noms avec forEach. 
// 2. Créer un tableau des noms avec map. 
// 3. Filtrer les utilisateurs de plus de 18 ans avec filter. 
// 4. Trouver l’utilisateur dont l’id = 2 avec find. 
// 5. Créer un tableau avec uniquement {id, name} (sans l’âge).

const users = [ 
{ id: 1, name: "Alice", age: 22 }, 
{ id: 2, name: "Bob", age: 30 }, 
{ id: 3, name: "Charlie", age: 17 }, 
{ id: 4, name: "Diana", age: 25 } 
]; 

let nom = users.forEach(user=>{
    console.log(user.name);
});

let tabNom = users.map(users=>users.name);
console.log(tabNom);

let majeur = users.filter(users=>{
    if (users.age>=18){
        return users
    }
});
console.log(majeur);

let idUser = users.find(user=>user.id==2);
console.log(idUser);

let withoutid = users.map(users=>users.id+" "+users.name);
console.log(withoutid);