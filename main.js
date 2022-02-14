const timeBar = document.getElementById('timeBar');
const healthBar = document.getElementById('healthBar');
const energyBar = document.getElementById('energyBar');
const saturationBar = document.getElementById('saturationBar');

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const line5 = document.getElementById('line5');

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const slot4 = document.getElementById('slot4');
const slot5 = document.getElementById('slot5');

const use1 = document.getElementById('use1');
const drop1 = document.getElementById('drop1');
const throw1 = document.getElementById('throw1');
const use2 = document.getElementById('use2');
const drop2 = document.getElementById('drop2');
const throw2 = document.getElementById('throw2');
const use3 = document.getElementById('use3');
const drop3 = document.getElementById('drop3');
const throw3 = document.getElementById('throw3');
const use4 = document.getElementById('use4');
const drop4 = document.getElementById('drop4');
const throw4 = document.getElementById('throw4');
const use5 = document.getElementById('use5');
const drop5 = document.getElementById('drop5');
const throw5 = document.getElementById('throw5');

const level = document.getElementById('level');
const skillPoints = document.getElementById('skillPoints');
const agility = document.getElementById('agility');
const plusa = document.getElementById('plusa');
const luck = document.getElementById('luck');
const plusl = document.getElementById('plusl');
const resistanse = document.getElementById('resistanse');
const plusr = document.getElementById('plusr');
const strength = document.getElementById('strength');
const pluss = document.getElementById('pluss');
const vitality = document.getElementById('vitality');
const plusv = document.getElementById('plusv');

const prev1 = document.getElementById('prev1');
const next1 = document.getElementById('next1');
const prev2 = document.getElementById('prev2');
const next2 = document.getElementById('next2');
const cook = document.getElementById('cook');

let player = {
	level: 1,
	skillPoints: 0,
	skill: {

	},
	inventory: {

	},
	saturation: 100,
	location: 'cave',
	goingDown: true,
	depth: 0,
};

function updateScreen() {
	if (player.goingDown) {
		timeBar.value = `Going down.. (${player.depth}m)`;
	} else {
		timeBar.value = `Going up.. (${player.depth}m)`;
	}
}

function onload() {

}

addEventListener('DOMContentLoaded', onload);
setInterval(function() {if (player.goingDown) {player.depth++} else {player.depth--}}, 750);
setInterval(updateScreen, 1);
