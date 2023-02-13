//https://medium.com/4thought-studios/documenting-javascript-projects-f72429da2eea 
/*
console.log("Hello world");

const tab = [1,2,3];
console.log(tab);
tab.push(4);
console.log(tab);

//zmienne
let number = 15;
let words = "Czeba iść z buta";
let numberstring = "3.5";
//let isTrue = True;
let empty = null; // let special = undefined;

//złożone zmienne
const user = {
    id: 1,
    name: "Tomasz",
    surname: "Kowalski",
    age: 20,
    email: "tomasz.kowalski@gmail.com"
  };

const tab2 = [1, 5, 736, 21, 0];

console.log("id." + user.id + ", imie: " + user.name);

let type = typeof(user)

console.log(type)

let text1 = "22";
let number1 = Number(text1); //otrzymamy 22

let text2 = "22 Hello JS";
let number2 = Number(text2); //otrzymamy NaN, czyli "Not a Number"

const number3 = parseInt("24px", 10);
console.log(number3)

let imie = "Jan";
let nazwisko = "Łasica";
let nazwa = imie + " " + nazwisko;
console.log(nazwa)

//tablice jednowymiarowe

const Tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i=0; i<Tab.length; i++){
  console.log(Tab[i]);
}

// tablice wielowymiarowe

const TAB = [
  [[1,2,3],[2,3,4],[3,4,5]],
  [[4,5,6],[5,6,7],[6,7,8]],
  [[7,8,9],[8,9,10],[9,10,11]]
];
for(let i=0; i<3; i++){
  for(let j=0; j<9; j++){  
      console.log(TAB[i][j]);
  }
}
*/
const person = {
  name: "Jacob",
  age: 25,
  isTired: true,
  saySomething: function(){
    console.log("I wanna go home 🥱")
  }
}