const title = document.querySelector('.title')
const startButton = document.querySelector('.button')
let time
const input = document.querySelector('.time')
const button = document.querySelector('.button')
const ball = document.querySelector('.ball')
let score = 0

startButton.addEventListener('click', () => {
	if (document.querySelector('.time').value > 0) {
		ball.style.display = 'block'
		input.style.display = 'none'
		button.style.display = 'none'
		time = document.querySelector('.time')
		ballClick()
		timing()
	}
})
function timing() {
	title.textContent = time.value
	if (time.value > 0) {
		setTimeout(timing, 1000)
	}
	if (time.value == 0) {
		title.textContent = `vaqt tugadi, sizning natijangiz ${score - 1} ta`
	}
	time.value--
}

function ballClick() {
	let randomRadius = Math.floor(Math.random() * (60 - 30 + 1)) + 30
	ball.style.height = `${randomRadius}px`
	ball.style.width = `${randomRadius}px`
	score++

	let randomLeft = Math.floor(Math.random() * 101)
	let randomTop = Math.floor(Math.random() * 101)
	if (randomLeft > 85) {
		randomLeft = 85
	}
	if (randomTop > 85) {
		randomTop = 85
	}
	ball.style.left = `${randomLeft}%`
	ball.style.top = `${randomTop}%`
}
ball.addEventListener('click', () => {
	ballClick()
})
