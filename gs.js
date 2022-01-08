
let r1 = document.querySelector('.gs1')
let r2 = document.querySelector('.gs2')
let r3 = document.querySelector('.gs3')
let r4 = document.querySelector('.gs4')
let r5 = document.querySelector('.gs5')
let ng = document.querySelector('.ng')
let r = document.querySelector('section')
let bck = document.querySelector('.bck')
const so = document.getElementsByClassName('so2')
const o = document.getElementsByClassName('options')
let darescr = document.querySelector('.dare')

ary = JSON.parse(localStorage.getItem('ary'));

ra1 = "zindagi ek safar hai suhanaz";
ra2 = "London thumakda";
ra3 = "sakhiyaan";
ra4 = "tu jo mila-raabta";
ra5 = "love nwantiti";

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
    r5.style.display = "block"

}
else if (dp == 5) {
    r1.style.display = "none"
    ng.style.display = "block"
    localStorage.setItem('q', 0)
}

else {
    r1.style.display = "block"
}

function next(n,q) {
    if (q==1) {
        if (n==1) {
            r1.style.display = 'none'
            so[q].style.display = 'inline'
   	        o[q].style.display = 'none'
    localStorage.setItem('q', q)
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
    localStorage.setItem('q', q)
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
    localStorage.setItem('q', q)
    r4.style.display = 'block'
        
        } else {
            dare(3,ra3)         
        }
    }
    else if (q==4) {
        if (n==1) {
            r4.style.display = 'none'
            so[q-1].style.display = 'inline'
    	    o[q-1].style.display = 'none'
            localStorage.setItem('q', q)
            r5.style.display = 'block'
         
        } else {
            dare(4,ra4)
        }
    }
    else{
        if (n==1) {            
            r5.style.display = 'none';
            localStorage.setItem('q', q)
            bck.style.display = 'block'
            ng.style.display = 'block'
        }
        else{
            dare(5,ra5)
        }
    }
}

function nextgame() {
    ng.style.display = 'none'
    bck.style.display = 'none'
    r1.style.display = 'flex'
    localStorage.setItem('q', 0)

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
    localStorage.setItem('page', 2);
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


