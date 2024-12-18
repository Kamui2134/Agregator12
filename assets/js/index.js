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
