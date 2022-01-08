
const r1 = document.querySelector('.riddel1')
const r2 = document.querySelector('.riddel2')
const r3 = document.querySelector('.riddel3')
const r4 = document.querySelector('.riddel4')
const r5 = document.querySelector('.riddel5')
const ng1 = document.querySelector('#ng1')
const r = document.querySelector('section')
const bck = document.querySelector('#background')
const so = document.getElementsByClassName('so')
const darescr = document.querySelector('.dare')
const o = document.getElementsByClassName('options')

ary = JSON.parse(localStorage.getItem('ary'));

ra1 = "egg" ;
ra2 = "Are you asleep yet?" ;

ra3 = "future" ;
ra4 = "age" ;
ra5 = "no staris only";

let dp = 0;
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
    ng1.style.display = "block"
    localStorage.setItem('q', 0)

}
else {
    r1.style.display = "block"

}


function next(n,q) {
    if (q==1) {
        if (n==1) {
            r1.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
            r2.style.display = 'block'
            localStorage.setItem('q', q)

        } else {
            dare(1,ra1);
        }        
    }
    else if (q==2) {
        if (n==1) {
            r2.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
            r3.style.display = 'block'
            localStorage.setItem('q', q)

        } else {
            dare(2,ra2);
            
        }
    }
    else if (q==3) {
        if (n==1) {
            r3.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
            r4.style.display = 'block'
    localStorage.setItem('q', q)
        
        } else {
            dare(3,ra3);
         
        }
    }
    else if (q==4) {
        if (n==1) {
            r4.style.display = 'none'
            so[q-1].style.display = 'inline'
   	        o[q-1].style.display = 'none'
            r5.style.display = 'block'
    localStorage.setItem('q', q)
         
        } else {
            dare(4,ra4);

        }
    }
    else{
        if (n==1) {
            
            r5.style.display = 'none';
            so[q-1].style.display = 'inline'
            o[q-1].style.display = 'none'
            bck.style.display = 'block';
    ng1.style.display = 'block'
        }
        else{
            dare(5,ra5);

        }
    }
}
function nextgame() {
    ng1.style.display = 'none'
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
    dr.innerHTML = `<p>right ans is ${ra}</p><a href="${darepath}" ><button class="btn">click here</button></a>`
    darescr.append(dr)
    localStorage.setItem('page', 1);
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

