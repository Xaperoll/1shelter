// Функции для работы с Cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function goTo(name) {
	document.querySelector(name).scrollIntoView({block: "center", behavior: "smooth"});
}

function setPlayerMax(e) {
	let nned =  document.querySelectorAll('div.number-players');
	for (let i = 0; i < nned.length; i++) {
		nned[i].innerText = 'Кол-во игроков ' + e.value
	}
}

function setCode() {
	let codes = document.querySelectorAll('div.select-code > input[type="range"]');
	var code = '';
	for (var i = codes.length - 1; i >= 1; i--) {
		code = codes[i].value + code;
	}
	document.querySelector('div.room-code').innerText = 'Введённый код '+ code;
}

function getCode() {
	let code = 0
	
	code += 100 * Math.floor(Math.random() * 10) + 10 * Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)

	return parseInt(code)
}

function createGame() {
	let gameSettings = {
		"players": document.querySelector('div.select-users input').value,
		"code": getCode(),
	}

	setCookie("game-settings", JSON.stringify(gameSettings), 3)

	window.location.href = "game/"
}

function connect() {
	let codes = document.querySelectorAll('div.select-code > input[type="range"]');
	var code = '';
	for (var i = codes.length - 1; i >= 1; i--) {
		code = codes[i].value + code;
	}
	let gameSettings = {
		"players": document.querySelector('div.select-code input').value,
		"code": code,
	}

	setCookie("game-settings", JSON.stringify(gameSettings), 3)

	window.location.href = "game/"
}