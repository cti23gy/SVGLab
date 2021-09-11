

//class contains logic for game
class Game {
    //attributes
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#7700AA";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor() {
        //make circles
        for(var i = 0; i < 25; i++) {
            //create circle
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            //circle style class
            newCircle.classList.add("gameCircle");
            newCircle.setAttribute("cx", Math.random() * 200);
            newCircle.setAttribute("cy", Math.random() * 200);

            //randomly hidden color
            if (Math.random() < .3) {
                newCircle.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            } else {
                newCircle.dataset.hiddenColor = this.normalColor;
            }

            //mouse events
            newCircle.addEventListener("mouseover", (event) => {event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCircle.addEventListener("mouseout", (event) => {event.target.style.fill = "#000";
            })

            newCircle.addEventListener("click", (event) => {
                if (event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();
                    this.foundCircles++;
                    
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            //add circle to screen
            this.gameZone.appendChild(newCircle);
        }
    }
}


class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}


let g = new Game();




