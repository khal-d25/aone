let x = 30;
const logo =document.querySelector('#logo')

setInterval(()=>{

    logo.style.transform = `rotateY(${x}deg)`;
    x = x+30;
    // console.log(x)
},500)