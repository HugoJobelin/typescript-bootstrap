//let : déclarer une variable qui peut changer de valeur
let personName: string = "Hugo";
let age: number = 28;
let isStudent: boolean = true;

console.log(personName);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);

function add(a:number, b:number){
    return a+b;
}
let addition1: number = add(5, 8);

console.log(`le résultat de l'addition 1 est ${addition1}`);

function subtract(a:number, b:number): number {
    return a-b;
}
let subtraction1: number = subtract(5, 8);

console.log(`le résultat de l'enculage 1 est ${subtraction1}`);

function my_print_alpha(): void
{
    // for(
    //     déclaration d'un compteur avant la boucle ; 
    //     condition selon laquelle la boucle continue ;
    //     instruction exécutée à la fin de chaque itération de boucle
    //    )
    // {
    //     du_code_qui_s'exécute_à_chaque_itéraiton_de_boucle();
    // }
    //on commence à charcode = 97 soit la lettre "a" dans la table ascii
    for (let charCode: number = 97; charCode <= 122; charCode++)
    {
        //const : variable qui ne changera jamais de valeur
        //la variable letter contient une string avec seulement la lettre actuelle dedans
        const letter: string = String.fromCharCode(charCode);
        //on log la string qui contient la lettre dans la console
        console.log(letter);
    }
}

my_print_alpha();