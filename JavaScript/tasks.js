console.log("task.js is on");

//Zadanie Napisy, dwie zmienne połączone w trzeciej zmiennej

const napis1 = "Hello";
const napis2 = "JS";
const napis3 = napis1 + " " + napis2;

function napis(){
    console.log(napis3);
}

//Zmienne, sprawdzanie typów zmiennych

let num = 6;
let str = "six";
let numstr = 4 + "four";
let yesno = true;
let spec = null;

function zmienne(){
    for (let i=0; i<5; i++){
        if(i==0){console.log("num " + typeof num);}
        else if(i==1){console.log("str "+typeof str);}
        else if(i==2){console.log("numstr " + typeof numstr);}
        else if(i==3){console.log("yesno "+typeof yesno);}
        else {console.log("spec " +typeof spec);}
    }
}

//Tablice z imionami

const tab1 = ["Jan", "Maria", "Kasia", "Wojtek", 'Zosia'];
const tab2 = [];

tab2.push("Jan");
tab2.push("Maria");
tab2.push("Kasia");
tab2.push("Wojtek");
tab2.push("Zosia");
tab2.push("Grzesiek");

function tablice(){
    console.log(tab1[1]);
    console.log(tab1[4]);
    console.log(tab1.length);
    console.log(tab2[0])
    console.log(tab2[2])
    console.log(tab2.length);
}

//tablice2d

const array=[]

function tab2d(){
    for (let i=0; i<3; i++){
        array[i] = [Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)];
    }
    console.log(array);
}

//obiekty
const car = {
    type: "sedan",
    color: "green",
    engine: "2.0"
}

function obiekty(){
    console.log("car: "+car.type+" "+car.color+" "+car.engine);
}

//TASKS 2

function tabfor(){
    n = 10;
    array[n];
    for (let i=0; i<n; i++){
        array.push(i);
    }
    for (let j=0; j<n; j++){
        console.log(array[j]);
    }
}

function modulo(){
    n = 20;
    for (let i=0; i <= n; i++){
        if(i%2==0){
            console.log(i + " - parzysta")
        }
        if(i%2==1){
            console.log(i + " - nieparzysta")
        }
    }
}
    
function tabliczka(){
    n = 5;
    const tab=[];
    for (let i=1; i<=n; i++){
        for (let j=1;j<=n; j++){
            tab.push(i + "x" + j + "=" + i*j);
        }
        tab.next();
    }
    console.log(tab);
}





function showUsers(){
    const users = ["User1","User2","User3","User4","User5"]
    console.log("Users: ");
    printArray(users);
}
function printArray(tab){
    for (let i=0; i<tab.length; i++){
        console.log(tab[i]);
    }
}