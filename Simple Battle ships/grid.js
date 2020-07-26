//Global varibles
let hit = 0;
let miss = 0;
let sink = 0;
let ship1hit = 0;
let ship2hit = 0;
let ship3hit = 0;

function createGridArray() {
    //Create and return a grid array
    return [
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 3, 3, 3, 0, 0, 0, 0, 0, 0],
        [0, 3, 0, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            //Create a div for each element in 2d grid 
            let divEl = document.createElement("div");

            //Add appropriate class to each divEl

            if (grid[row][col] == 1) {
                divEl.classList.add("ship");
            }

            //add Data values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //Add an event listener to each divEl
            divEl.addEventListener("click", cellClicked)
            //Add div to container
            document.getElementById("container").append(divEl);
        }
    }

}


function cellClicked() {
    //Define row and column
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    //Check if clicked cell is a hit or a miss, and which ship it belongs to 
    //Ship 1
    if (grid[row][col] == 1) {
        event.target.classList.add("hitship")
        hit++;
        document.getElementById("numHit").innerHTML = hit;
        //Change it to -1 if hit so it being clicked will not count towards sinking
        grid[row][col] = -1;
        ship1hit++;
        //Call upon function
        shipSink(ship1hit, 3, 1)
    } else if (grid[row][col] == 2) {
        event.target.classList.add("hitship")
        hit++;
        document.getElementById("numHit").innerHTML = hit;
        grid[row][col] = -1;
        ship2hit++;
        shipSink(ship2hit, 2, 2)
    } else if (grid[row][col] == 3) {
        event.target.classList.add("hitship")
        hit++;
        document.getElementById("numHit").innerHTML = hit;
        grid[row][col] = -1;
        ship3hit++; 
        shipSink(ship3hit, 5, 3)
    } else if (grid[row][col] == 0){
        event.target.classList.add("missedship");
        miss++;
        document.getElementById("numMiss").innerHTML = miss;
        grid[row][col] = -2;
    }
    if (sink == 3) {
        document.getElementById("displayWin").innerHTML = "YOU WON";
    }
    
}
function shipSink(shipNumHit, shipLength, shipNum) {
    //Length of ship1 is 3, therefore if it's hit 3 time it's sunk
    if (shipNumHit == shipLength) {
        sink++;
        document.getElementById("numSink").innerHTML = sink;
        document.getElementById("displaySink").innerHTML += " YOU SUNK SHIP " + shipNum;
    }
}
