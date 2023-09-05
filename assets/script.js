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
			//  etape 1
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

			// etape 2
arrowLeft.addEventListener("click", () => {
    console.log("fleche de gauche")
})


arrowRight.addEventListener("click", () => {
    console.log("fleche de droite")
})


const dotsContainer = document.querySelector(".dots")

console.log(dotsContainer)

//  etape 3

slides.forEach((slide, i) => {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    
    dot.addEventListener('click', () => {
        console.log(`Bullet point ${i + 1} clicked`)
    })
    
    dotsContainer.appendChild(dot)
})

// etape 4

function slide(i) {
    const slideImage = document.querySelector('.banner-img')
    const slideText = document.querySelector('#banner p')
    
    slideImage.src = "./assets/images/slideshow/" + slides[i].image
    slideText.innerHTML = slides[i].tagLine
}

arrowLeft.addEventListener("click", function() {
    currentI = (currentI - 1 + slides.length) % slides.length
    activeDot(currentI)
    slide(currentI)
})

arrowRight.addEventListener("click", function() {
    currentI = (currentI + 1) % slides.length
    activeDot(currentI)
    slide(currentI)
})

let currentI = 0

function activeDot(i) {
    const dots = document.querySelectorAll('.dot')
    dots.forEach(dot => dot.classList.remove('dot_selected'))
    dots[i].classList.add('dot_selected')
}
