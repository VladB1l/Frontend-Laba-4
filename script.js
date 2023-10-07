// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let n = 117;
let m = n % 10 + 1;
let counter = 0;


let first = FindElement(document.body.firstElementChild.children, m, counter);
let second = FindElement(document.body.firstElementChild.children, m + 1, counter);


function FindElement(collection, m, counter) {
    for (const element of collection) {
        counter++;
        if (element.children.length !== 0) {
            counter--;
            counter = FindElement(element.children, m, counter);
            if (!Number.isInteger(counter)) {
                return counter;
            }
        }
        if (counter === m) {
            element.style.cursor = "pointer";
            return element;
        }
    }
    return counter;
}

first.onclick = function () {
    let color = "cadetblue"
    ChangeColor(first, color);
    
}
second.onclick = function () {
    let color = "green"
    ChangeColor(second, color);
}

function ChangeColor(elem, color){
    if (elem.style.background == color) {
        elem.style.background = "white";
        elem.style.color = "black"
    }
    else {
        elem.style.background = color;
        elem.style.color = "white"
    }
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let button = document.querySelectorAll(".buttons button")

button[0].onclick = function () {
    let new_Img = document.createElement("a");
    new_Img.setAttribute("href", "https://www.vienna.at/");
    new_Img.setAttribute("target", "blank")
    new_Img.style.marginTop = "10px"
    new_Img.style.backgroundSize = "100%"
    document.body.firstElementChild.children[7].append(new_Img);
}
button[1].onclick = function () {
    let new_Imges = document.querySelectorAll("a");
    new_Imges[new_Imges.length - 1].style.backgroundSize = `${FindSize(new_Imges) + 10}%`
}
button[2].onclick = function () {
    let new_Imges = document.querySelectorAll("a");
    new_Imges[new_Imges.length - 1].style.backgroundSize = `${FindSize(new_Imges) - 10}%`
}
button[3].onclick = function () {
    let new_Imges = document.querySelectorAll("a")
    new_Imges[new_Imges.length - 1].remove();
}

function FindSize(new_Imges) {
    let size = new_Imges[new_Imges.length - 1].style.backgroundSize;
    for (let i = 0; i < size.length; i++) {
        if (size[i] === "%") {
            size = size.slice(0,i)
            return Number(size);
        }
    }
    return 100;
}