let countEl = document.getElementById("count-el")

let count = 0

/*HOME SCORE*/

function addOne() {
    count = count + 1
    countEl.innerText = count
}

function addTwo() {
    count = count + 2
    countEl.innerText = count
}

function addThree() {
    count = count + 3
    countEl.innerText = count
}



/*GUEST SCORE*/

let countEl2 = document.getElementById("count-el2")

let count2 = 0

function addOne2() {
    count2 = count2 + 1
    countEl2.innerText = count2
}

function addTwo2() {
    count2 = count2 + 2
    countEl2.innerText = count2
}

function addThree2() {
    count2 = count2 + 3
    countEl2.innerText = count2
}