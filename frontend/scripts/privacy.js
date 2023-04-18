const bottom = document.querySelector(".bottom");
const count = 110;
const size = 50;
for (let i = 0; i <= count; i += 1) {
const dot = document.createElement("div");
dot.classList.add("dot");
bottom.appendChild(dot);
}
const dots = Array.from(document.querySelectorAll(".dot"));


const reset = () => {
dots.forEach((dot, i) => {
const x = (i / count) * (190 + size) - size / 2;
const y = Math.random(1) * 52 - size / 2;
dot.style.width = `${size}px`;
dot.style.height = `${size}px`;
dot.style.left = `${x}px`;
dot.style.top = `${y}px`;
dot.style.opacity = 1;
dot.style.transform = "scale(1)";
});
};
reset();