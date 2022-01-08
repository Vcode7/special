
let r1 = document.querySelector('.cg1')
let r2 = document.querySelector('.cg2')
let r3 = document.querySelector('.cg3')
let r4 = document.querySelector('.cg4')
let ng = document.querySelector('#ng3')
let r = document.querySelector('section')
let bck = document.querySelector('.bck')
const so = document.getElementsByClassName('so')
const o = document.getElementsByClassName('options')

let darescr = document.querySelector('.dare')

ary = JSON.parse(localStorage.getItem('ary'));

ra1 = "laughing emoji";
ra2 = "modstake day";
ra3 = "modstake day";
ra4 = "26 april";

dp = 0;
dp = localStorage.getItem('q')
if (dp == 1) {
    r1.style.display = "none"
    r2.style.display = "block"
}
else if (dp == 2) {
    r1.style.display = "none"
    r3.style.display = "block"

}
else if (dp == 3) {
    r1.style.display = "none"
    r4.style.display = "block"

}
else if (dp == 4) {
    r1.style.display = "none"
    ng.style.display = "block"
    localStorage.setItem('q', 0)
}

else {
    r1.style.display = "block"
}


function next(n,q) {
    localStorage.setItem('q', q)

    if (q==1) {
        if (n==1) {
            r1.style.display = 'none'
            so[q].style.display = 'inline'
   	        o[q].style.display = 'none'
    r2.style.display = 'block'
        } else {
            dare(1,ra1)
            
        }        
    }
    else if (q==2) {
        if (n==1) {
            r2.style.display = 'none'
            so[q].style.display = 'inline'
   	        o[q].style.display = 'none'
            r3.style.display = 'block'
            
        } else {
            dare(2,ra2)
            
        }
    }
    else if (q==3) {
        if (n==1) {
            r3.style.display = 'none'
            so[q-1].style.display = 'inline'
            o[q-1].style.display = 'none'
    r4.style.display = 'block'
        
        } else {
            dare(3,ra3)
         
        }
    }
    else{
        if (n==1) {            
            r4.style.display = 'none'
            bck.style.display = 'block'
    ng.style.display = 'block'
        }
        else{
            dare(4,ra4)
        }
    }
}
function nextgame() {
    ng.style.display = 'none'
    bck.style.display = 'none'
    localStorage.setItem('q', 0)
    r1.style.display = 'flex'

}
function showoptions(n) {
    setTimeout(() => {
    so[n-1].style.display = 'none'
    o[n-1].style.display = 'flex'
        
    }, 1000);
}



function dare(n,ra) {

    bck.style.display = "block"
    var r = Math.ceil(Math.random() * ary.length)
    ary = ary.filter(item => item !== r)
    localStorage.setItem('ary',JSON.stringify(ary))
    var dr = document.createElement('div')
    dr.classList.add('rs');
    darepath = `src/dare${r}.html`
    dr.innerHTML = `<p>right ans : ${ra}</p><a href="${darepath}" ><button class="btn">click here</button></a>`
    darescr.append(dr)
    localStorage.setItem('page', 3);
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
        default:
            break;
    }
    darescr.style.display = "flex"
}
