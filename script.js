
const r1 = document.querySelector('.riddel1')
const r2 = document.querySelector('.riddel2')
const r3 = document.querySelector('.riddel3')
const r4 = document.querySelector('.riddel4')
const r5 = document.querySelector('.riddel5')
const ng1 = document.querySelector('#ng1')
const r = document.querySelector('section')
const bck = document.querySelector('#background')
const so = document.getElementsByClassName('so')
const o = document.getElementsByClassName('options')

function next(n,q) {
    if (q==1) {
        if (n==1) {
            r1.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
            r2.style.display = 'block'

        } else {
            
        }        
    }
    else if (q==2) {
        if (n==1) {
            r2.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
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
    else if (q==4) {
        if (n==1) {
            r4.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
            r5.style.display = 'block'
         
        } else {
        }
    }
    else{
        r5.style.display = 'none';
        so[q-1].style.display = 'inline'
        o[q-1].style.display = 'none'
        bck.style.display = 'block';
    	ng1.style.display = 'block'
    }
}
function nextgame() {
    ng1.style.display = 'none'
    bck.style.display = 'none'
    r1.style.display = 'flex'

}
function showoptions(n) {
    setTimeout(() => {
        so[n-1].style.display = 'none'
        o[n-1].style.display = 'flex'
    }, 1000);
}
