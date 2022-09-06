const container = document.querySelector('.container');
const ticket = document.querySelector('.ticket');
const titulo = document.querySelector('.vite-data h2');
const userBox = document.querySelector('.user-box');

container.addEventListener('mousemove', event =>{
    let xAxis = (event.pageX - window.innerWidth / 2) / 50;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 50;

    ticket.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    titulo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) perspective(500px) translateZ(50px)`;
    userBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) perspective(500px) translateZ(50px)`;
})