const timeBar = document.getElementById('timeBar');
const healthBar = document.getElementById('healthBar');
const energyBar = document.getElementById('energyBar');
const saturationBar = document.getElementById('saturationBar');

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const line5 = document.getElementById('line5');

const slotLine1 = document.getElementById('slot1');
const slotLine2 = document.getElementById('slot2');
const slotLine3 = document.getElementById('slot3');
const slotLine4 = document.getElementById('slot4');
const slotLine5 = document.getElementById('slot5');

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
	hp: 100,
	energy: 200,
	level: 1,
	skillPoints: 0,
	skill: {
		strength: 0,
		agility: 0,
		luck: 0,
		resistance: 0,
		vitality: 0,
	},
	inventory: {
		slot1: null,
		slot2: null,
		slot3: null,
		slot4: null,
		slot5: null,
	},
	saturation: 100,
	location: 'cave',
	goingDown: true,
	depth: 0,
	parameters: {
		attack: 5,
		maxEnergy: 200,
		regenEnergy: 1, // per second
		maxHealth: 100,
		regenHealth: 1, // per second
		update: function() {
			player.parameters.attack = player.skill.strength * 2 + 5;
			player.parameters.maxEnergy = player.skill.agility * 20 + 200;
			player.parameters.maxHealth = player.skill.resistanse * 10 + 100;
			player.parameters.regenHealth = player.skill.vitality + 1;
			if (player.hp < player.parameters.maxHealth) {
				player.hp += player.parameters.regenHealth;
			}
			if (player.energy < player.parameters.maxEnergy) {
				player.energy += player.parameters.regenEnergy;
			}
		},
		updateInterval: setInterval(player.parameters.update, 1000);
	},
};

let enemy = {

};

function Item(name) {
	switch (name) {
		case 'soup':
			this.effects.saturation = 40;
			this.effects.regen = 10;
			break;
		case 'smallMedicine':
			this.effects.regen = 10;
			this.effects.restoring = 5;
			break;
		case 'medicine':
			this.effects.regen = 25;
			this.effects.restoring: 15;
			break;
		case 'bigMedicine':
			this.effects.regen = 50;
			this.effects.restoring: 35;
			break;
		case 'strangePotion':
			this.effects.regen = Math.floor(Math.random() * 40);
			this.effects.restoring = Math.floor(Math.random() * 30);
			break;
	}
}

function Item(name, effects, usable, onUseMsg, onDropMsg, throwable, onThrowMsg, special) {
	this.name = name;
	this.effects = effects; // like {saturation: 10, regen: 10}
	this.effects.forciblyTreats = false; // after the treatment of the character, he may have more health than the maximum health
	this.usable = usable;
	this.onUseMsg = onUseMsg;
	this.onDropMsg = onDropMsg;
	this.throwable = throwable;
	this.onThrowMsg = onThrowMsg;
	if (!special.includes('undroppable')) {
		Object.defineProperty(this, droppable, {value: true, writable: false});
	} else {
		this.droppable = false;
	}
}

function addLine(str) {
	line1.value = line2.value;
	line2.value = line3.value;
	line3.value = line4.value;
	line4.value = line5.value;
	line5.value = str;
}

function addToInventory(item_) {
	if (inventory)
}

function updateScreen() {
	if (player.goingDown) {
		timeBar.value = `Going down.. (${player.depth}m)`;
	} else {
		timeBar.value = `Going up.. (${player.depth}m)`;
	}
	healthBar.value = `Health: ${player.hp}/${player.parameters.maxHealth}`;
	energyBar.value = `Energy: ${player.energy}/${player.parameters.maxEnergy}`;
	saturationBar.value = `Saturation: ${player.saturation}%`;

}

function onload() {

}

addEventListener('DOMContentLoaded', onload);
setInterval(function() {if (player.goingDown) {player.depth++} else {player.depth--}}, 750);
setInterval(updateScreen, 10);
