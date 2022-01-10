ra1 = /eat/i;
ra2 = /chain/i;
ra3 = /and/i;
ra4 = /heroine/i;
ra5 = /inkstand/i;
ra6 = /eye/i;


ran1 = "eat";
ran2 = "chain";
ran3 = "and";
ran4 = "heroine";
ran5 = "inkstand";
ran6 = "eye";

const r1 = document.querySelector('.r1');
const r2 = document.querySelector('.r2');
const r3 = document.querySelector('.r3');
const r4 = document.querySelector('.r4');
const r5 = document.querySelector('.r5');
const r6 = document.querySelector('.r6');
const sec = document.querySelector('section');
const gm = document.querySelector('.gm');
const darescr = document.querySelector('.dare');

let sra1 = document.querySelector('.ra1');
let sra2 = document.querySelector('.ra2');
let sra3 = document.querySelector('.ra3');
let sra4 = document.querySelector('.ra4');
let sra5 = document.querySelector('.ra5');
let sra6 = document.querySelector('.ra6');

const bck = document.querySelector('.bck');

let iv1 = document.getElementsByClassName('inp')[0];
let iv2 = document.getElementsByClassName('inp')[1];
let iv3 = document.getElementsByClassName('inp')[2];
let iv4 = document.getElementsByClassName('inp')[3];
let iv5 = document.getElementsByClassName('inp')[4];
let iv6 = document.getElementsByClassName('inp')[5];

ary = JSON.parse(localStorage.getItem('ary'))
 
let dp = 0;
dp = localStorage.getItem('q')
if (dp == 1) {
    r1.style.display = "none"
    r2.style.display = "flex"
}
else if (dp == 2) {
    r1.style.display = "none"
    r3.style.display = "flex"

}
else if (dp == 3) {
    r1.style.display = "none"
    r4.style.display = "flex"

}

else if (dp==9) {
    sec.style.display = 'none'
    r.style.display = 'flex'
    bck.style.display = 'block'

}
else if (dp == 4) {
    r1.style.display = "none"
    r5.style.display = "flex"

}
else if (dp == 5) {
    r1.style.display = "none"
    r6.style.display = "flex"

}
else if (dp == 6) {
    r1.style.display = "none"
    sra6.style.display = "flex"
    localStorage.setItem('q', 0)

}
else {
    r1.style.display = "flex"

}




let c = 0;
function chkans(n) {
    setTimeout(() => {

        switch (n) {
            case 1:
                console.log(iv1.value)
                if (ra1.test(iv1.value)) {
                    rightans(1);

                }
                else {
                    if (c == 0) {
                        c = 2;
                        dare(1,ran1)
                    }
                    else {
                        alert(`wrong ans chance left ${c}`)
                        iv1.value = ""
                        c = c - 1;
                    }
                }
                break;
            case 2:
                if (ra2.test(iv2.value)) {
                    rightans(2)
                }
                else {
                    if (c == 0) {
                        c = 2;
                        dare(2,ran2)
                    }
                    else {
                        alert(`wrong ans chance left ${c}`)
                        iv1.value = ""
                        c = c - 1;
                    }
                }
                break;
            case 3:
                if (ra3.test(iv3.value)) {
                    rightans(3,ran3)
                }
                else {
                    if (c == 0) {
                        c = 2;
                        dare(3)
                    }
                    else {
                        alert(`wrong ans chance left ${c}`)
                        iv1.value = ""
                        c = c - 1;
                    }
                }
                break;
            case 4:
                if (ra4.test(iv4.value)) {
                    rightans(4)
                }
                else {
                    if (c == 0) {
                        c = 2;
                        dare(4,ran4)
                    }
                    else {
                        alert(`wrong ans chance left ${c}`)
                        iv1.value = ""
                        c = c - 1;
                    }
                }
                break;
            case 5:
                if (ra5.test(iv5.value)) {
                    rightans(5)
                }
                else {
                    if (c == 0) {
                        c = 2;
                        dare(5,ran5)
                    }
                    else {
                        alert(`wrong ans chance left ${c}`)
                        iv1.value = ""
                        c = c - 1;
                    }
                }
                break;
            case 6:
                if (ra6.test(iv6.value)) {
                    rightans(6)
                }
                else {
                    if (c == 0) {
                        c = 2;
                        dare(6,ran6)
                    }
                    else {
                        alert(`wrong ans chance left ${c}`)
                        iv1.value = ""
                        c = c - 1;
                    }
                }
                break;
            default:
                break;
        }
    }, 600);
}
function rightans(n) {

    bck.style.display = "block"

    switch (n) {
        case 1:
            r1.style.display = "none"
            sra1.style.display = "flex"

            break;
        case 2:
            r2.style.display = "none"
            sra2.style.display = "flex"

            break;
        case 3:
            r3.style.display = "none"
            sra3.style.display = "flex"

            break;
        case 4:
            r4.style.display = "none"
            sra4.style.display = "flex"

            break;
        case 5:
            r5.style.display = "none"
            sra5.style.display = "flex"

            break;
        case 6:
            r6.style.display = "none"
            sra6.style.display = "flex"
            localStorage.setItem('q', 0)

            break;

        default:
            break;
    }
}

function nextq(n) {
    bck.style.display = "none"

    switch (n) {
        case 2:
            sra1.style.display = "none"
            r2.style.display = "flex"
            localStorage.setItem('q', 1)

            break;
        case 3:
            sra2.style.display = "none"
            r3.style.display = "flex"
            localStorage.setItem('q', 2)

            break;
        case 4:
            sra3.style.display = "none"
            r4.style.display = "flex"
            localStorage.setItem('q', 3)

            break;
        case 5:
            sra4.style.display = "none"
            r5.style.display = "flex"
            localStorage.setItem('q', 4)

            break;
        case 6:
            sra5.style.display = "none"
            r6.style.display = "flex"
            localStorage.setItem('q', 5)

            break;

        default:
            break;
    }
}


let rr = 0;

function dare(n,ra) {

    bck.style.display = "block"
    rn = Math.floor(Math.random() * ary.length)
    var r = ary[rn]
    if (r == undefined) {
        sec.style.display = 'none'
    localStorage.setItem('q', 9)
    gm.style.display = 'flex'
        bck.style.display = 'block'
    }
    else{
    if (r==0) {
        r = 1
    }
    ary = ary.filter(item => item !== r)
    localStorage.setItem('ary',JSON.stringify(ary))
    var dr = document.createElement('div')
    dr.classList.add('rs');
    darepath = `src/dare${r}.html`
    dr.innerHTML = `<p>right ans : ${ra}</p><a href="${darepath}" ><button class="btn">click here</button></a>`
    darescr.append(dr)
    localStorage.setItem('page', 4);
    localStorage.setItem('q', n)
    switch (n) {
        case 1:
            r1.style.display = "none"

            break;
        case 2:
            r2.style.display = "none"

            break;
        case 3:
            r3.style.display = "none"

            break;
        case 4:
            r4.style.display = "none"

            break;
        case 5:
            r5.style.display = "none"

            break;

        case 6:
            r6.style.display = "none"

            break;

        default:
            break;
    }
  darescr.style.display = "flex"
}
}

