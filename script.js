document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid');
    let width = 16;


    function createCanvas() {
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i);
            grid.appendChild(square);


            // hover over
            square.addEventListener('mouseover', function(e){
                square.style.backgroundColor = "black";
            });

            // square.addEventListener('mouseout', function(e){
            //     square.style.backgroundColor = "white";
            // });

        }
    }



    createCanvas();

})