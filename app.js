

if(screen.width < 500){
    rot(document.querySelector('#home_btn'))
    document.querySelector('#home_screen').classList.toggle('screen')
    document.querySelector('#home_screen').classList.toggle('height')
}

const arrow = document.querySelectorAll('.btns')
console.log(arrow)

function rot(v){
    v.classList.toggle('rot')

}
arrow.forEach(e => {
   
    
    e.addEventListener('click',()=>{
        // let screens = document.querySelectorAll('.screen')
        // screens.classList.toggle('rot')
        // screens.classList.toggle('screen')
        rot(e)
        const content = e.parentElement.nextElementSibling
        console.dir(content)
        content.classList.toggle('screen')
        content.classList.toggle('height')
        // document.querySelectorAll('mtabs').classList.toggle('oppa')

        
        
    })
});

