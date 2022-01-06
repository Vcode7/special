
let r1 = document.querySelector('.cg1')
let r2 = document.querySelector('.cg2')
let r3 = document.querySelector('.cg3')
let r4 = document.querySelector('.cg4')
let ng = document.querySelector('#ng3')
let r = document.querySelector('section')
let bck = document.querySelector('.bck')
const so = document.getElementsByClassName('so')
const o = document.getElementsByClassName('options')

function next(n,q) {
    if (q==1) {
        if (n==1) {
            r1.style.display = 'none'
            so[q].style.display = 'inline'
   	        o[q].style.display = 'none'
            r2.style.display = 'block'
        } else {
            
        }        
    }
    else if (q==2) {
        if (n==1) {
            r2.style.display = 'none'
            so[q].style.display = 'inline'
   	        o[q].style.display = 'none'
            r3.style.display = 'block'
            
        } else {
            
        }
    }
    else if (q==3) {
        if (n==1) {
            r3.style.display = 'none'
            so[q-1].style.display = 'inline'
            o[q-1].style.display = 'none'
            r4.style.display = 'block'
        
        } else {
         
        }
    }
    else{
        r4.style.display = 'none'
        bck.style.display = 'block'
    	ng.style.display = 'block'
    }
}
function nextgame() {
    ng.style.display = 'none'
    bck.style.display = 'none'
    r1.style.display = 'flex'

}
function showoptions(n) {
    setTimeout(() => {
    so[n-1].style.display = 'none'
    o[n-1].style.display = 'flex'
        
    }, 1000);
}