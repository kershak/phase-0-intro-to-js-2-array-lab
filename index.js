// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (catname) {
    cats.push(catname);
}

function destructivelyPrependCat (catname) {
    cats.unshift(catname);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat (catname) {
    return [...cats, catname];
}

function prependCat (catname) {
    return [catname, ...cats]; 
}

function removeFirstCat () {
    return cats.slice(1);
}

function removeLastCat () {
    return cats.slice(0,cats.length-1);
}   