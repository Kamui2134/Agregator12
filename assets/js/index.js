'use strict'

// LOADING
window.addEventListener('load', function () {
	const loader = document.querySelector('.loader')
	loader.classList.remove('active')
})

// GAME-RATING
const gameRating = null
if (document.querySelector('.game-rating__stars')) {
	const gameRatings = document.querySelectorAll('.game-rating__stars')
	gameRatings.forEach(gameRating => {
		const rating = parseInt(gameRating.dataset.rating)
		if (rating > 6) {
			rating = 5
		}
		for (let i = 0; i < rating; i++) {
			gameRating.children[i].classList.add('rated')
		}
	})
}

// ROAD-MAP
function RoadMapGeneration() {
	const roadMapLeft = document.querySelector('.road-map__left')
	const roadMapRight = document.querySelector('.road-map__right')
	const roadMapLeftItems = roadMapLeft.querySelectorAll('.road-map__item')
	const roadMapRightItems = roadMapRight.querySelectorAll('.road-map__item')
	const roadMapLine = document.querySelector('.road-map__line')
	roadMapLine.style.height = `${
		roadMapLeft.scrollHeight +
		roadMapLeftItems[1].scrollHeight / 2 -
		roadMapRightItems[1].scrollHeight / 2
	}px`
	let circleMargin = 0
	for (let i = 0; i < roadMapLeftItems.length; i++) {
		if (i > 0) {
			circleMargin +=
				roadMapRightItems[i - 1].scrollHeight / 2 +
				roadMapLeftItems[i].scrollHeight / 2
		}
		const circle1 = document.createElement('div')
		circle1.className = 'road-map__circle'
		circle1.style.top = `${circleMargin - 12}px`
		roadMapLine.appendChild(circle1)
		roadMapRightItems[i].style.marginTop = `${
			roadMapLeftItems[i].scrollHeight / 2
		}px`

		roadMapLeftItems[i].style.marginBottom = `${
			roadMapRightItems[i].scrollHeight / 2
		}px`
		circleMargin += roadMapLeftItems[i].scrollHeight / 2
		const circle2 = document.createElement('div')
		circle2.className = 'road-map__circle'
		circle2.style.top = `${circleMargin}px`
		roadMapLine.appendChild(circle2)
	}
}
RoadMapGeneration()

// FAQ
const questions = document.querySelectorAll('.faq__question')
const questionsBtns = document.querySelectorAll('.faq__question-btn')

// Устанавливаем первоначальные maxHeight для всех вопросов
function setInitialMaxHeight() {
	questions.forEach(question => {
		const headHeight = question.querySelector(
			'.faq__question-head'
		).clientHeight
		question.style.maxHeight = headHeight + 40 + 'px'
	})
}

setInitialMaxHeight()

// Обработчик изменения размера окна
window.addEventListener('resize', () => {
	questions.forEach((question, index) => {
		const isOpen = questionsBtns[index].style.transform === 'rotate(90deg)'
		const headHeight = question.querySelector(
			'.faq__question-head'
		).clientHeight
		question.style.maxHeight = isOpen
			? question.scrollHeight + 'px'
			: headHeight + 40 + 'px'
	})

})

// Функция для переключения видимости вопроса
function questionToggle(index) {
	const question = questions[index]
	const btn = questionsBtns[index]
	const headHeight = question.querySelector('.faq__question-head').clientHeight

	const isOpen = btn.style.transform === 'rotate(90deg)'

	btn.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)'
	question.style.maxHeight = isOpen
		? headHeight + 40 + 'px'
		: question.scrollHeight + 'px'
}

// Добавляем обработчики событий на кнопки
questionsBtns.forEach((btn, i) => {
	btn.addEventListener('click', () => questionToggle(i))
})
