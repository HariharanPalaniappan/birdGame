let birdSpeed = 10;
document.addEventListener('keydown',function(e){
        if(e.keyCode == 39) {
            moveBird(1,'right',birdSpeed);
        }
        if (e.keyCode == 37) {
            moveBird(1,'left',birdSpeed);
        }
        if(e.keyCode == 40) {
            moveBird(1,'bottom',birdSpeed);
        }
        if (e.keyCode == 38) {
            moveBird(1,'top',birdSpeed);
        }
        if(e.keyCode == 68) {
            moveBird(2,'right',birdSpeed);
        }
        if (e.keyCode == 65) {
            moveBird(2,'left',birdSpeed);
        }
        if(e.keyCode == 83) {
            moveBird(2,'bottom',birdSpeed);
        }
        if (e.keyCode == 87) {
            moveBird(2,'top',birdSpeed);
        }
        if(e.keyCode == 76) {
            stopBird(1);
        } 
        if(e.keyCode == 71) {
            stopBird(2);
        } 
})
let move1 = setInterval(()=>{
    moveBird(1,'right',birdSpeed);
},100);
let move2 = setInterval(()=>{
    moveBird(2,'left',birdSpeed);
},100);
const moveBird =(birdNo,moveDirection,speed) => {
    stopBird(birdNo); 
    if(birdNo == 1){
        move1 = setInterval(() => {
            switchBirdDirection(birdNo,moveDirection,speed)
        }, 100);
    }
    else {
        move2 = setInterval(() => {
            switchBirdDirection(birdNo,moveDirection,speed)
        }, 100);
    }
}
const stopBird = (birdNo) => {
    birdNo == 1 ? clearInterval(move1) : clearInterval(move2);
}
const switchBirdDirection = (birdNo,moveDirection,speed) => {
    switch(moveDirection) {
        case 'top': moveTop(birdNo,speed);
        break;
        case 'bottom': moveDown(birdNo,speed);
        break;
        case 'right': moveRight(birdNo,speed);
        break;
        case 'left': moveLeft(birdNo,speed);
        break;
    }
}
generateTarget();
const bothPosition = () => {
    console.log(getBirdPosition(1),getBirdPosition(2));
    console.log(getTargetPosition());
}
setInterval(bothPosition, 1000);