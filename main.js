const divGhost = document.createElement("div");
const textWrap = document.getElementById("textWrap");
const actionGhost = textWrap.lastElementChild;

divGhost.innerHTML = "I am a ghost...";
divGhost.classList.add("ghost");

actionGhost.addEventListener("mouseover", () => {
    textWrap.appendChild(divGhost);
})

actionGhost.addEventListener("mouseleave", () => {
    textWrap.removeChild(divGhost);
})