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

//let devide = 3/0;
//console.log(devide);

/*
//nie przypisowanie typu
number1 = 5;
number2 = 6;

console.log(number1 + number2);

let number3 = 7;
let number4 = 2;

console.log(number3 + number4);
*/

/*
//Inkrementacja
a = 10;
b = ++a;
console.log(b);
*/

/*
//Egzamin
score = "a";

if (score >= 60){
  console.log("Zaliczone");
}
else if(score < 60){
  console.log("Niezaliczone");
}
else {console.log("Nieprawidłowe dane");}
*/

/*
grade = 4;
switch (true){
  case (grade == 6 || grade == "A"):{
    console.log("celujący");
    break;
  }
  case (grade == 5 || grade == "B") :{
    console.log("bardzo dobry");
    break;
  }
  case (grade==4):{
    console.log("dobry");
    break;
  }
  case (grade==3):{
    console.log("dostateczny");
    break;
  }
  case (grade==2):{
    console.log("dopuszczający");
    break;
  }
  case (grade==1):{
    console.log("niedostateczny");
    break;
  }
  default:{
    console.log("Nieprawidłowe dane");
    break;
  }
}
*/

/*
//while i do while
let i;
do {
  i = Math.floor(Math.random() * 10);
  console.log(i);
} while (i != 5);
*/

/*
//pętle
for (let i = 0; i < 10; i++) {
  for (let j = i; j < 10; j++) {
   console.log("i=" + i + ", j=" + j);
  }
 }
*/

/*
 const array = [1, 4, "Hello", 4, "JS", 19, "Not a number"];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (!Number.isInteger(array[i])) {
    continue;
  }
  sum += array[i];
}

console.log(sum);
*/


//wyświetlanie jednej litery
//nap = "napis";
//console.log(nap[3]);