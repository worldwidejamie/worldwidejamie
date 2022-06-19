import anime from "animejs";

anime({
	targets: "svg text",
	rotate: -20,
	delay: 500,
	easing: "spring",
})

function rotateText() {
anime({
	targets: "svg text",
	rotate: 360,
	duration: 4000,
	easing: "spring"
})
}
function reverseText() {
	anime({
		targets: "svg text",
		rotate: -20,
		duration: 4000,
		easing: "spring"
	})
}
const svgContainer = document.querySelector(".title-path");
console.log(svgContainer)
svgContainer.addEventListener("mouseover", rotateText);
svgContainer.addEventListener("mouseout", reverseText);