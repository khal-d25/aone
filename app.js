

if(screen.width < 500){
    // rot1(document)
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

        rot(e)
        const content = e.parentElement.nextElementSibling
        console.dir(content)
        content.classList.toggle('screen')
        content.classList.toggle('height')
        
    })
});

