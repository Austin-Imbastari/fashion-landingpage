'use strict';

new hoverEffect({
	parent: document.querySelector('.distortion'),
	intensity: 0.2,
	image1: './images/girl.png',
	image2: './images/girl2.png',
	displacementImage: './images/smoke.png',
	imagesRatio: 380 / 300
});

TweenMax.from('.text h1 .hidetext', 1.5, {
	delay: 1,
	y: '100%',
	ease: Expo.easeInOut
});

TweenMax.from('.text h3 .hidetext', 1.5, {
	delay: 1.3,
	x: '200%',
	ease: Expo.easeInOut
});

TweenMax.from('.text p .hidetext', 1.5, {
	delay: 1.5,
	x: '-200%',
	ease: Expo.easeInOut
});

TweenMax.from('.text h2', 1.5, {
	delay: 1,
	opacity: 0,
	y: '50%',
	ease: Expo.easeInOut
});

TweenMax.from('.sponsor img', 1.5, {
	delay: 1.5,
	opacity: 0,
	y: '20',
	ease: Expo.easeInOut
});

TweenMax.from('.sponsor p', 1.5, {
	delay: 1.5,
	opacity: 0,
	y: '20',
	ease: Expo.easeInOut
});

TweenMax.from('.distortion', 1.5, {
	delay: 2,
	opacity: 0,
	y: '20',
	ease: Expo.easeInOut
});

TweenMax.staggerFrom(
	'.navbar div',
	2,
	{
		delay: 1.5,
		opacity: 0,
		y: '20',
		ease: Expo.easeInOut
	},
	0.08
);

TweenMax.to('.first', 1.5, {
	delay: 0.5,
	top: '-100%',
	ease: Expo.easeInOut
});

TweenMax.to('.second', 1.5, {
	delay: 0.7,
	top: '-100%',
	ease: Expo.easeInOut
});

TweenMax.to('.third', 1.5, {
	delay: 0.9,
	top: '-100%',
	ease: Expo.easeInOut
});
