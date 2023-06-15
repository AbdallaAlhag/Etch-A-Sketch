document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid');
    let width = 16;
    const btnClear = document.querySelector('#clear');
    btnClear.addEventListener('click', () => {
        resetBoard();
    });

    let rainbow = false;
    const btnRainbow = document.querySelector('#rainbow');
    const btnColor = document.querySelector('#color');

    btnColor.addEventListener('click', () => {
        rainbow = false;
        hoverOver();
    });

    btnRainbow.addEventListener('click',() => {
        rainbow = true;
        hoverOver();
    });

    const slider = document.getElementById("myRange");
    let output = document.getElementById("size");
    output.textContent = slider.value + "x" + slider.value;
    
    slider.oninput = function() {
        output.textContent = this.value + "x" + this.value;
        //createCanvas();
        let newWidth = slider.value;
        clearCanvas();
        createCanvas(newWidth);
    }

    function createCanvas(width) {
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', i);
            let recalutedNum = (672-(2*width)) / width;
            square.style.height = recalutedNum + 'px';
            square.style.width = recalutedNum + 'px';
            grid.appendChild(square);

            //hover over
            //hoverOver(square);
            // square.addEventListener('mouseover', function(e){
            //     square.style.backgroundColor = "black";
            // });
        }
    }

    function clearCanvas() {
        while(grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
    }

    createCanvas(width);
    hoverOver();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function randomColor(){
        let red = getRandomInt(256);
        let green = getRandomInt(256);
        let blue = getRandomInt(256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    function hoverOver() {
        if(rainbow === false) {
            grid.addEventListener('mouseover', function(e){
                if(e.target.classList.contains('square')){
                    e.target.style.backgroundColor = "black";
                }
            
        });
        }
        else {
            grid.addEventListener('mouseover', function(e){
                if(e.target.classList.contains('square')){
                    e.target.style.backgroundColor = randomColor();
                }
            });
        }
        
    }

    function resetBoard(){

        const squares = grid.querySelectorAll('.square');
        squares.forEach((square) => {
            square.style.backgroundColor = 'white';
        });

        // for (let i = 0; i < width*width; i++){
        //     const element = document.getElementById(i);
        //     element.style.backgroundColor = "white";
        // }
        
    }

});

