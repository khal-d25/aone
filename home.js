const pages = document.querySelectorAll('.page')
var x;
pages.forEach((e)=>{
    x = e.offsetHeight;
    e.getElementsByClassName.height = `${x}px`
})


const n = document.querySelector('#n')
const p = document.querySelector('#p')
const catcat =document.querySelector('#catcat')

var x =0 ;

n.addEventListener('click',()=>{
    if(x<11){
        x = x+1;
        catcat.style.transform = `translate(-${x}00vw,0)`;
        
    }
    
})

p.addEventListener('click',()=>{
    if(x>0){
        x = x-1;
        catcat.style.transform = `translate(-${x}00vw,0)`;

    }
    
})



