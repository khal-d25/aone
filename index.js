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






