document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid');
    let width = 16;
    const btnClear = document.querySelector('#clear');
    btnClear.addEventListener('click', () => {
        resetBoard();
    });

    const slider = document.getElementById("myRange");
    let output = document.getElementById("size");
    output.textContent = slider.value + "x" + slider.value;
    

    slider.oninput = function() {
        output.textContent = this.value + "x" + this.value;
        //createCanvas();
        let newWidth = slider.value;
        //recreateCanvas();
    }

    

    function createCanvas() {
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i);
            grid.appendChild(square);

            // hover over
            hoverOver(square);
            // square.addEventListener('mouseover', function(e){
            //     square.style.backgroundColor = "black";
            // });
        }
    }

   
    createCanvas();
    
    function hoverOver(block) {
        block.addEventListener('mouseover', function(e){
            square.style.backgroundColor = "black";
        });
    }

    function resetBoard(){
        for (let i = 0; i < width*width; i++){
            const element = document.getElementById(i);
            element.style.backgroundColor = "white";
        }
        
    }

})

