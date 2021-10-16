
function querySelector(selector) {
	const $selector = document.querySelector(selector);
	return $selector;
}

function createElement(tag, className) {
	const $tag = document.createElement(tag);
	if (className) {
		$tag.classList.add(className);
	}
	return $tag;
}

function createPlayer(player_object) {
	const $player = createElement('div', 'player' + player_object.player);
	const $progressbar = createElement('div', 'progressbar');
	const $life = createElement('div', 'life');
	const $name = createElement('div', 'name');
	const $character = createElement('div', 'character');
	const $img = createElement('img');

	$life.style.width = player_object.hp + '%';
	$name.innerText = player_object.name;
	$img.src = player_object.img;

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);

	return $player;
}

function changeHP(player_object) {
	const $playerLife = querySelector('.player' + player_object.player + ' .progressbar .life');
	const hpminus = Math.ceil(Math.random() * 20);
	player_object.hp -= hpminus;
	if (player_object.hp <= 0) {
		player_object.hp = 0;
	}
	$playerLife.style.width = player_object.hp + '%';
	console.log(player_object.name + ' lose ' + hpminus + ' hp, ' + player_object.hp + ' left.');
}


function playerLose(player_lose_name, player_win_name, allLose,) {
	const $loseTitle = createElement('div', 'loseTitle');
	if (allLose) {
		$loseTitle.innerText = 'All players lose';
		console.log('All players lose');
		alert('All players lose');
	}
	else {
		$loseTitle.innerText = player_win_name + ' win';
		console.log(player_lose_name + ' lose and ' + player_win_name + ' win');
		alert(player_lose_name + ' lose');
	}
	$randButton.disabled = true;
	console.log('button "random" disabled');
	return $loseTitle;
}

const $arenas = querySelector('.arenas');
const $randButton = querySelector('.button');

const player1 = {
	player: 1,
	name: 'kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['weapon1', 'weapon2', 'weapon3', 'weapon4', 'weapon5'],
	attack: function () {
		console.log(player1.name + 'Fight...');
	}
};

const player2 = {
	player: 2,
	name: 'Sonya',
	hp: 100,
	img: 'https://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['weapon1', 'weapon2', 'weapon3', 'weapon4', 'weapon5'],
	attack: function () {
		console.log(player2.name + 'Fight...');
	}
};

$randButton.addEventListener('click', function () {
	console.log('button "random" clicked');
	changeHP(player1);
	changeHP(player2);
	if (player1.hp === 0 && player2.hp === 0) {
		$arenas.appendChild(playerLose('', '', true));
	}
	else if (player1.hp === 0) {
		$arenas.appendChild(playerLose(player1.name, player2.name));
	}
	else if (player2.hp === 0) {
		$arenas.appendChild(playerLose(player2.name, player1.name));
	}
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));