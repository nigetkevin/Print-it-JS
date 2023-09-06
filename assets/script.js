const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dotsContainer = document.querySelector(".dots")


let currentI = 0

slides.forEach(() => {
    const dot = document.createElement("div")
    dot.classList.add("dot")   

    dotsContainer.appendChild(dot)
})

function updateSlide(i) {
    const slideImage = document.querySelector(".banner-img")
    const slideText = document.querySelector("#banner p")
    
    slideImage.src = "./assets/images/slideshow/" + slides[i].image
    slideText.innerHTML = slides[i].tagLine
}

arrowLeft.addEventListener("click", function() {
    console.log("fleche de gauche")
    currentI = (currentI - 1 + slides.length) % slides.length
    activeDot(currentI)
    updateSlide(currentI)
})

arrowRight.addEventListener("click", function() {
    console.log("fleche de droite")
    currentI = (currentI + 1) % slides.length
    activeDot(currentI)
    updateSlide(currentI)
})

function activeDot(i) {        
    const dots = document.querySelectorAll(".dot")
    dots.forEach(dot => dot.classList.remove("dot_selected"))
    dots[i].classList.add("dot_selected")    
}
