const tooltip = document.querySelectorAll(".tooltip");
tooltip.forEach((e) => {
    e.addEventListener("mouseenter", (ev) => {
        let newSpan = document.createElement("span");
        let text = ev.target.dataset.tooltip;
        newSpan.innerText = text;
        newSpan.style.right = ev.target.offsetWidth;
        e.appendChild(newSpan);
    });
    e.addEventListener("mouseleave", (ev) => {
        ev.target.children[0] && ev.target.removeChild(ev.target.children[0]);
    });
});
