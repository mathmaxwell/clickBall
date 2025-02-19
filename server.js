const title = document.querySelector('.title')
const ball = document.querySelector('.ball')
const time = document.querySelector('.time')
const difficult = document.querySelector('.difficult')
const button = document.querySelector('.button')
let please = document.querySelector('.please')
let rectPlease = please.getBoundingClientRect()
let score = 0
let dx, dy

button.addEventListener('click', () => {
	if (+time.value > 0) {
		time.style.display = 'none'
		difficult.style.display = 'none'
		button.style.display = 'none'
		ball.style.display = 'block'
		ballClickRandom()
		timing()
	}
})
function stop() {
	title.textContent = `${score} ta bosdingiz`
	time.style.display = 'block'
	difficult.style.display = 'block'
	button.style.display = 'block'
	ball.style.display = 'none'
	time.value = 16
	score = 0
}
function timing() {
	if (time.value > 0) {
		title.textContent = `${time.value}`
		setTimeout(() => {
			timing()
		}, 1000)
	} else {
		stop()
	}
	;+time.value--
}

ball.addEventListener('click', () => {
	if (difficult.value > 1) {
		clearTimeout(timeOutId)
	}
	score++
	ballClickRandom()
})

function ballClickRandom() {
	let randomRadius = Math.floor(Math.random() * 31) + 30
	ball.style.height = `${randomRadius}px`
	ball.style.width = `${randomRadius}px`
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
	if (difficult.value > 1) {
		timeOutId = setTimeout(() => {
			ballClickRandom()
		}, 1000)
	}
	if (difficult.value > 2) {
		moveBall()
	}
}

function moveBall() {
	let angle = Math.random() * 2 * Math.PI
	let speed = 2

	dx = Math.cos(angle) * speed
	dy = Math.sin(angle) * speed

	animate()
}

function animate() {
	let rectBall = ball.getBoundingClientRect()
	let newX = ball.offsetLeft + dx
	let newY = ball.offsetTop + dy

	if (newX < 0 || newX + rectBall.width > rectPlease.width) {
		dx = -dx
	}
	if (newY < 0 || newY + rectBall.height > rectPlease.height) {
		dy = -dy
	}

	ball.style.left = `${ball.offsetLeft + dx}px`
	ball.style.top = `${ball.offsetTop + dy}px`

	requestAnimationFrame(animate)
}
