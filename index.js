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

    if(ld-hd > 100){
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
        else
        show.forEach((f)=>{
            f.style.width = '10%'
        })
        e.style.width = '60%'

    })
})









