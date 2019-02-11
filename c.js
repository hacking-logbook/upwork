/* eslint-disable quote-props, no-unused-vars, no-undef */
/**
 * Used names:
 * variable: 	configSlotMachine777theMostUniqueName
 * ID: 		canvasSlotMachine777theMostUniqueName
 * class:	appSlotMachine777theMostUniqueName
 * files: 	configSlotMachine777theMostUniqueName.js
 * 		appSlotMachine777theMostUniqueName.js
 * attribute:	data-state
 * cookies:	jackpot
 * 		name
 */
(() => {
	const insertScript = (src) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	};
	/* Change file link */
	insertScript('appSlotMachine777theMostUniqueName.js?v=1.1');
})();

/* CONFIG */
const configSlotMachine777theMostUniqueName = () => {
	const pictures = {

		/* Uncomment these links or insert your own links */
		wrapper: 'images/Covers.jpg?v=1.1',
		title: 'images/casino.svg?v=1.1',
		pin: 'images/pin.png?v=1.1',
		table: 'images/wheel_1-min.png?v=1.1',
		spin: 'images/start_button.png?v=1.1',
		spinAfterClick: 'images/logo.png?v=1.1',
	};

	const pop = {

		/* These samples are downloaded from a sound hosting. Put your own if you want */
		while: 'sounds/ticks10s.mp3?v=1.1',
		after: '/* sounds/clap4.mp3?v=1.1 */',
		segment: '/* sounds/tick.mp3?v=1.1 */',
	};

	/* Sets the fixed height of the container
	For example:
		tableHeight = '140px'; mean 140 pixels (at least 140 pixels)
		tableHeight = '';  mean fullscreen
		tableHeight = '80%' mean height is 80% of the width. */
	const tableHeight = ''/* '50%' *//* '140px' */;

	const segments = [

		/* Replace 'text' with your own.
		'win': true setting Winning Prizes
		'win': false forbid
		 */
		{ 'text': 'Orlando 3 nights', 'win': true },
		{ 'text': 'Mazatlan 5 nights', 'win': true },
		{ 'text': 'Mazatlan 5 nights', 'win': true },
		{ 'text': 'Daythona beach 3 nights', 'win': true },
		{ 'text': 'Daythona beach 3 nights', 'win': true },
		{ 'text': 'Nuevo Vallarta 5 nights', 'win': false },
		{ 'text': 'Cancun 5 nights', 'win': false },
		{ 'text': 'Myrtle Beach 3 nights', 'win': true },
		{ 'text': 'Puerto Penasca 5 nights', 'win': false },
		{ 'text': 'Las Vegas 3 nights', 'win': false },
		{ 'text': 'Acapulco 5 nights', 'win': false },
		{ 'text': 'Orlando 3 nights', 'win': true },
	];

	const title = /* true */false;

	const prestartSpinning = /* true */false;

	/* Link to the page with a salute.
	Replace links with your links. */
	const salute = 'salute/3.html?v=1.1'/* 'salute/5.html?v=1.1' *//* 'salute/7.html?v=1.1' */;

	/* Form Filling Page
	re-comment so that the window pops up on the current page */
	const postType = /* 'new page' */ 'current page';

	/* in seconds */
	const winDelay = 7;

	/* Form Filling Page link */
	const contactForm = 'popup/index.html?v=1.1';

	const canvasSize = 777;
	const popupSize = 0.5;
	const sPinSize = 0.24;

	/* Other settings */
	const power = 'LOW'/* 'MED' *//* 'HIGH' */;

	return {
		pictures,
		tableHeight,
		segments,
		pop,
		postType,
		salute,
		contactForm,
		power,
		winDelay,
		title,
		prestartSpinning,
		canvasSize,
		popupSize,
		sPinSize,
	};
};
