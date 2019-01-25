document.addEventListener("DOMContentLoaded", function() {
    let boundaries = document.querySelectorAll(".grid-item");
    let start = document.querySelectorAll("#start");
    let end = document.querySelectorAll("#end");
    let win = true;
    let status = document.querySelectorAll("status");
    let gridItems = document.getElementsByClassName("grid-item");
    let square = document.getElementsByClassName("square");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mouseover", function() {
            console.log(this);
            console.log(this.getElementsByClassName('fill'));
            
            if (this.classList.contains('fill')) {
                console.log("lose");
                document.getElementById("status").innerHTML = "YOU LOSE!";
                    // alert("YOU LOST! TRY AGAIN!");
            }
            
            else if (this.classList.contains('win')) {
                console.log("win");
                document.getElementById("status").innerHTML = "YOU WIN!";
                    // alert("YOU WIN! CONGRATULATIONS!");
            }        
        });
    } 
}) // DOMCoontentLoaded

// this.setPosition = function(x,y) {
    //     this.X = x;
    //     this.Y = y;
    // }

    // this.moveLeft = function(theX) {
    //     if((this.X + this.width < width)&& this.isMoving) {
    //         this.setPosition(theX - this.width/2, this.Y);
    //     }
    // }

    // this.moveRight = function(theX) {
    //     if((e.X + this.width < width)&& this.isMoving) {
    //         this.setPosition(theX - this.width/2, this.Y);
    //     }
    // }

    // document.onmousemove = function(e) {
    //     if(square.X - 20) {
    //         player.moveLeft(e.pageX);
    //     } else if(square.X - 20) {
    //         player.moveRight(e.pageX);
    //     }
    // };

// else (this.classList.contains('grid-item')) {
                
                
            // }


// gridContainer.addEventListener("mouseover", function() {
    //     document.getElementById("status").innerHTML = "Move your mouse to begin.";
    //     for (let i = 0; i < boundaries.length; i++) {
    //         boundaries[i].addEventListener("mouseover", function(){
    //             win = false;
    //             alert("START AGAIN! YOU LOSE!");
    //             document.getElementById("status").innerHTML = "YOU LOSE!"
    //             stopPropagation
    //         });
    //     }
    // })





// function keyDownHandler(event) {
//     if(event.keyCode == 39) {
//         right = true;
//     }
//     else if(event.keyCode == 37) {
//         left = true;
//     }
//     if(event.keyCode == 40) {
//     	down = true;
//     }
//     else if(event.keyCode == 38) {
//     	up = true;
//     }
// }



 // function starClick() {
    //     var x = document.getElementsByClassName("grid-item");

    //     for (let i = 0; i < x.length; i++) {
    //         x[i].style.backgroundColor = "#FFFFFF";
    //         if (x[i].style.backgroundColor !="red") {
    //             var s = document.getElementById("status").innerHTML = "Move your mouse to begin."
    //         }
    //     }
    // }

    // function overBoundary() {
    //     var x = document.getElementsByClassName("")        
    // }