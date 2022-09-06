const wrapper = document.querySelector('.container');
const ticket = document.querySelector('.ticket');

wrapper.addEventListener('mousemove', event =>{
    let xAxis = (event.pageX - window.innerWidth / 2) / 50;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 50;

    ticket.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})