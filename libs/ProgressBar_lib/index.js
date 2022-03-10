const progressBar = document.querySelector("#progressBar_line");
const maxWidthProgressBar = document.body.scrollHeight - window.innerHeight;
window.addEventListener("scroll", () => {
    const actuallyPosition = window.scrollY;
    const percentageWidth = +(
        (actuallyPosition * 100) /
        maxWidthProgressBar
    ).toFixed(1);

    progressBar.style.width = percentageWidth + "%";
});
