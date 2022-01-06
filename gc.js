let a1 = /mom/i;
let a2 = /dad/i;
let a3 = /g/i;
let a4 = /g/i;

let ca1 = document.querySelector('.gc1')
let ca2 = document.querySelector('.gc2')
let ca3 = document.querySelector('.gc3')
let ca4 = document.querySelector('.gc4')

const darescr = document.querySelector('.dare');

let bck = document.querySelector('.bck')

let rca1 = document.querySelector('.rc1')
let rca2 = document.querySelector('.rc2')
let rca3 = document.querySelector('.rc3')
let rca4 = document.querySelector('.rc4')

let iv1 = document.getElementsByClassName('inp')[0];
let iv2 = document.getElementsByClassName('inp')[1];
let iv3 = document.getElementsByClassName('inp')[2];
let iv4 = document.getElementsByClassName('inp')[3];

let c = 0;
function chkans(n) {
    switch (n) {
        case 1:
            if (a1.test(iv1.value)) {
                rightans(1);
            }
            else {
                dare(1)
            }
            break;
        case 2:
            if (a2.test(iv2.value)) {
                rightans(2);
            }
            else {
                dare(2)
            }
            break;
        case 3:
            if (a3.test(iv3.value)) {
                rightans(3);
            }
            else {
                dare(3)
            }
            break;
        case 4:
            if (a4.test(iv4.value)) {
                rightans(4);
            }
            else {
                dare(4)
            }
            break;

        default:
            break;
    }
}

function nextq(n) {
    bck.style.display = "none"
    switch (n) {

        case 2:
            ca2.style.display = 'block';
            rca1.style.display = 'none';

            break;

        case 3:
            ca3.style.display = 'block';
            rca2.style.display = 'none';

            break;

        case 4:
            ca4.style.display = 'block';
            rca3.style.display = 'none';

            break;

        case 5:
            ca5.style.display = 'block';
            rca4.style.display = 'none';

            break;

        default:
            break;
    }
}

function dare(n) {
    bck.style.display = "block"
    var r = Math.floor(Math.random() * 10)
    var dr = document.createElement('div')
    dr.classList.add('rs');
    if (r==0 || r==11) {
        darepath = `src/dare10.html`
        
    }
    else{
        darepath = `src/dare${r}.html`

    }
    dr.innerHTML = `<a href="${darepath}" ><button class="btn">click here</button></a>`
    darescr.append(dr)
    localStorage.setItem('page', 5);

    switch (n) {
        case 1:
            ca1.style.display = "none"
            break;
        case 2:
            ca2.style.display = "none"

            break;
        case 3:
            ca3.style.display = "none"

            break;
        case 4:
            ca4.style.display = "none"

            break;

        default:
            break;
    }

    darescr.style.display = "flex"
}

function rightans(n) {
    bck.style.display = "block"
    switch (n) {
        case 1:
            ca1.style.display = 'none';
            rca1.style.display = 'flex';

            break;
        case 2:
            ca2.style.display = 'none';
            rca2.style.display = 'flex';

            break;
        case 3:
            ca3.style.display = 'none';
            rca3.style.display = 'flex';

            break;
        case 4:
            ca4.style.display = 'none';
            rca4.style.display = 'flex';

            break;

        default:
            break;
    }
}
