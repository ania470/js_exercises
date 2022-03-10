function Lottery(config) {
    var drawBtn = document.querySelector("#drawBtn");
    var counter = 0;
    var drawedNumbers = [];
    // var config = {
    //     min: 1,
    //     max: 49,
    //     amountNumbers: 6,
    //     drawingSpeed: 500,
    // };

    var addElToDom = (num) => {
        var p = document.createElement("p");
        p.innerText = num;
        document.querySelector(".result").appendChild(p);
    };
    var getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    drawBtn.addEventListener("click", () => {
        drawedNumbers = [];
        drawBtn.disabled = true;
        var number = setInterval(() => {
            var drawNumber = getRandomNumber(config.min, config.max);

            while (drawedNumbers.includes(drawNumber)) {
                drawNumber = getRandomNumber(config.min, config.max);
            }
            drawedNumbers.push(drawNumber);
            addElToDom(drawNumber);

            counter++;

            if (counter === config.amountNumbers) {
                document.querySelector("#reset").style.display = "";
                clearInterval(number);
            }
        }, config.drawingSpeed);
    });

    var resetBtn = document.querySelector("#reset");

    resetBtn.addEventListener("click", () => {
        drawedNumbers = [];
        var res = document.querySelector(".result");
        while (res.firstChild) {
            res.removeChild(res.firstChild);
        }
        resetBtn.style.display = "none";
        drawBtn.disabled = false;
        counter = 0;
    });
}
