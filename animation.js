const $ = selector => document.querySelector(selector)

const container = $('body')
const wrapper = $('.wrapper')
const ticket = $('.ticket')

const { width, height } = document.querySelector(".wrapper").getBoundingClientRect()

const halfWidth  = width / 2
const halfHeight = height / 2

container.addEventListener('mousemove', event =>{
    const {offsetX, offsetY} = event

    const rotationX  = ((offsetX - halfWidth) / halfWidth) * 8
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 8

    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
})