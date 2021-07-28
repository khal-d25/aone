const logo = document.querySelector('#logoimg')
const home = document.querySelector('#home')
const foot = document.querySelector('#footer')

let ld = logo.getBoundingClientRect().top
let hd = home.getBoundingClientRect().top
let fd = foot.getBoundingClientRect().top


window.addEventListener('scroll',(e)=>{
    ld = logo.getBoundingClientRect().top
    hd = home.getBoundingClientRect().top
    fd = foot.getBoundingClientRect().top

    if(ld-hd > 200){
        logo.style.opacity = '0'
        
    }
    else{
        logo.style.opacity = '1'

    }

    
    
})


const show = document.querySelectorAll('.show')

show.forEach((e)=>{
    e.addEventListener('click',()=>{

        if(e.style.width === '60%'){
            show.forEach((f)=>{
                f.style.width = '20%'
            })
        }
        else{
            show.forEach((g)=>{
                g.style.width = '10%'
            
            })
            e.style.width = '60%'

        }
        

    })
})


var lastScrollTop = 0;
var scroll = 100;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      window.scrollBy(0,100)
   } else {
      // upscroll code
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);











