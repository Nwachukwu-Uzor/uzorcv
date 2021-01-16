const images = [
    {src: './images/carousel1.jpg', title: "At a friend's wedding"},
    {src: './images/carousel2.jpg', title: "At a friend's wedding"},
    {src: './images/carousel3.jpg', title: "With a friend during NYSC"},
    {src: './images/carousel4.jpg', title: "Final project defense"},
    {src: './images/carousel5.jpg', title: "At a friend's wedding"},
    {src: './images/carousel6.jpg', title: "With fellow corp member during NYSC monthly clearance"},
    {src: './images/carousel7.jpg', title: "Just another selfie"},
    {src: './images/carousel8.jpg', title: "Serious faced selfie"},
    {src: './images/carousel10.jpg', title: "Serious faced selfie"
    },
    { src: './images/carousel11.jpg', title: "At a friend's wedding"},
    {src: './images/carousel12.jpg', title: "With my NYSC mama"},
]



console.log(images.length)

const carouselImage = document.querySelector("#carousel-image");
const carouselDescription = document.querySelector("#carousel-description")
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRight = document.querySelector('.fa-arrow-right');

// carouselImage.src = images[current].src;
// carouselDescription.textContent = images[current].title

let current = 0;

const moveLeft = () => {
    if (current > 0) {
        current -= 1;
    } else {
        current = images.length - 1
    }
    console.log(current)
    carouselImage.src = images[current].src;
    carouselDescription.textContent = images[current].title
    console.log(carouselImage.src, carouselDescription.textContent)
}

arrowLeft.addEventListener('click', () => moveLeft());
arrowRight.addEventListener('click', () => {
    if (current < images.length) {
        current += 1;
    } else {
        current = 0
    }
    console.log(current)
    carouselImage.src = images[current].src;
    carouselDescription.textContent = images[current].title
})
