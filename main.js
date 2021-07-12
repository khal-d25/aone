const down = document.querySelector('#btt')
const header = document.querySelector('#header').style

function rot(){
    document.querySelector('#btt').classList.toggle('rot')

}

count = 1;

down.addEventListener('click',()=>{
    
    rot()
    if (count%2 === 1){
        header.transform = 'translateY(0)'
        count++;
    }
    else{
        if (screen.width > 700){

            header.transform = 'translateY(-40%)'
        }
        else{
            header.transform = 'translateY(-50%)'
        }
        count++;

    }
})

var x = 1;

// window.addEventListener('wheel',(e)=>{
//     console.log(e.deltaY)
//     if (e.deltaY > 0){
//         document.querySelector('#container').scrollBy(0,800)
//     }
//     else{
//         document.querySelector('#container').scrollBy(0,-800)
//     }
// })