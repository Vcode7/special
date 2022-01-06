let p = localStorage.getItem('page')
let darescr = document.querySelector('section')


let dr = document.createElement('div')
console.log('p')
if (p == 1) {
    dr.innerHTML = `<a href="../one.html" ><button class="done">done</button></a>`
}
else if (p == 2) {
    dr.innerHTML = `<a href="../two.html" ><button class="done">done</button></a>`
}
else if (p == 3) {
    dr.innerHTML = `<a href="../three.html" ><button class="done">done</button></a>`
}
else if (p == 4) {
    dr.innerHTML = `<a href="../four.html" ><button class="done">done</button></a>`
}
else {
    dr.innerHTML = `<a href="../five.html" ><button class="done">done</button></a>`
}
darescr.append(dr)
