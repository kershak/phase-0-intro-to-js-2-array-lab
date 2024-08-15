// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (newCatName){
    cats.push(newCatName);
}

function destructivelyPrependCat (newCatName){
    cats.unshift(newCatName);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(newCatName){
    return [...cats, newCatName];
}

function prependCat(newCatName){
    return [newCatName, ...cats];   
}

function removeLastCat(){
    return cats.slice(0,cats.length-1); 
}

function removeFirstCat(){
    return cats.slice(1);
}