
function createPlayer(player1, playerName, life, img) {
	let $player1 = document.createElement('div')
	$player1.classList.add(player1)

	let $progressBar = document.createElement('div')
	$progressBar.classList.add('progressbar')

	let $character = document.createElement('div')
	$character.classList.add('character')

	let $life = document.createElement('div')
	$life.classList.add('life')
	$life.style.width = life + '%'


	let $name = document.createElement('div')
	$name.classList.add('name')
	$name.innerText = playerName

	let $img = document.createElement('img')
	$img.src = img




	let $arenas = document.querySelector('.arenas')

	$arenas.appendChild($player1)
	$player1.appendChild($progressBar)
	$player1.appendChild($character)

	$progressBar.appendChild($life)
	$progressBar.appendChild($name)
	$character.appendChild($img)

}

createPlayer('player1', 'Sonya', 90, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif')
createPlayer('player2', 'kitana', 50, 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif')