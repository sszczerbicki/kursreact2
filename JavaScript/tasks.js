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
    console.log("auto: "+car.type+" "+car.color+" "+car.engine);
}
    
    
