// import{gsap}from'gsap';
// import{ScrollTrigger}from"gsap/scrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const container = document.querySelector('.scroll');
// const sections = gsap.utils.toArray('.scroll .scroll_ul > li');

// let scrollTween = gsap.to(sections, {
// 	xPercent: -100 * (sections.length - 1), 
// 	ease: "none",
// 	scrollTrigger: ".scroll",
// 	pin: true,
// 	scrub: 1,
// 	end: "+=3000"
// });

gsap.registerPlugin(ScrollTrigger);

const pro = document.querySelector(".scroll_ul");
let proWidth = pro.offsetWidth;
let amountToScroll = proWidth - window.innerWidth;

const tween = gsap.to(pro, {
	x: -amountToScroll,
	duration: 3,
	ease: "none"

});

ScrollTrigger.create({
	trigger: ".scrollWrapper",
	start:"top top",
	end: "+=" + amountToScroll,
	pin: true,
	animation: tween,
	scrub: 1

});

// gsap.to(".scroll_ul", {
// 	scrollTrigger: {
// 		trigger: ".scrollWrapper",
// 		start: "top top",
// 		end: "+=" + amountToScroll,
// 		animation: tween,
// 		scrub: 1,
// 		pin: ".content_div",
// 		markers: {
// 			startColor: "purple",
// 			endColor: "fuchsia",
// 			fontSize: "3em",
// 		}, 
// 	}
// })


// ScrollTrigger.create({
// 	trigger: "#about",
// 	start: "top top",
// 	end: "bottom bottom",
// 	scrub: 1,
// 	markers: true;
// });

// const pro = document.querySelector(".scroll_ul");

// function getScrollAmount() {
// 	let proWidth = pro.scrollWidth;
// 	return -(proWidth - window.innerWidth);
// }

// const tween = gsap.from(pro, {
// 	x: getScrollAmount,
// 	duration: 20,
// 	ease: "none"

// });

// ScrollTrigger.create({
// 	trigger: ".scrollWrapper",
// 	start: "top top",
// 	end: () => '+=${getScrollAmount() * -1}',
// 	pin: true,
// 	animation: tween,
// 	scrub: 1,
// 	invalidateOnRefresh: true

// });

// scroll_1();


// const contact = document.querySelector(".contact_ul");
// let contactWidth = contact.offsetWidth;
// let contactToScroll = contactWidth - window.innerWidth;

// const tween_2 = gsap.to(contact, {
// 	x: -contactToScroll,
// 	duration: 3,
// 	ease: "none"

// });

// ScrollTrigger.create({
// 	trigger: ".contactWrapper",
// 	start:"top top",
// 	end: "+=" + contactToScroll,
// 	pin: true,
// 	animation: tween_2,
// 	scrub: 1

// });

// scroll_2();