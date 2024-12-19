'use strict'

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

for (let i = 0; i < roadMapLeftItems.length; i++) {
	roadMapRightItems[i].style.marginTop = `${
		roadMapLeftItems[i].scrollHeight / 2
	}px`
	const circle = document.createElement('div')
	circle.className = 'road-map__circle'
	roadMapLeftItems[i].style.marginBottom = `${
		roadMapRightItems[i].scrollHeight / 2
	}px`
}
