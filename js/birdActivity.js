let bird1X=0;
let bird1Y=0;
let bird2X=0;
let bird2Y=0;
const moveRight = (birdNo,speed) => {
    let birdContainer = birdNo == 1 ? document.querySelector('.bird-container') : document.querySelector('.bird-container2');
    let birdImage = birdNo == 1 ? document.querySelector('.bird-container img') : document.querySelector('.bird-container2 img');
    if(birdContainer.offsetLeft  >= document.body.offsetWidth) {
        let leftPosition = 0 - birdImage.offsetWidth ;
        birdContainer.style.left = leftPosition +'px';
        birdNo == 1 ?bird1Y = leftPosition : bird2Y = leftPosition;
    }
    else {
        if (birdContainer.classList.contains('bird-up-right')){
            birdContainer.classList.remove('bird-up-right');
        }
        birdContainer.classList.remove('bird-container-left');
        birdContainer.classList.remove('bird-up-left');
        birdContainer.classList.add('bird-container-right');
        let leftPosition = window.scrollY + birdContainer.getBoundingClientRect().left + speed;
        birdContainer.style.left = leftPosition +"px";
        birdNo == 1 ?bird1Y = leftPosition : bird2Y = leftPosition;
    }
}
const moveLeft = (birdNo,speed) => {
    let birdContainer = birdNo == 1 ? document.querySelector('.bird-container') : document.querySelector('.bird-container2');
    let birdImage = birdNo == 1 ? document.querySelector('.bird-container img') : document.querySelector('.bird-container2 img');
    if (birdContainer.offsetLeft + birdContainer.offsetWidth <= birdImage.offsetWidth) {
        let rightPosition = document.body.offsetWidth - birdImage.offsetWidth;
        birdContainer.style.left = rightPosition + "px";
        birdNo == 1 ? bird1Y= rightPosition : bird2Y = rightPosition;
    }
    else {
        if (birdContainer.classList.contains('bird-up-right')){
            birdContainer.classList.remove('bird-up-right');
        }
        birdContainer.classList.remove('bird-up-left');
        birdContainer.classList.add('bird-container-left');
        birdContainer.classList.remove('bird-container-right');
        let rightPosition = window.scrollY + birdContainer.getBoundingClientRect().left - speed;
        birdContainer.style.left = rightPosition +"px";
        birdNo == 1 ? bird1Y= rightPosition : bird2Y = rightPosition;
    }
}
const moveDown = (birdNo,speed) => {
    let birdContainer = birdNo == 1 ? document.querySelector('.bird-container') : document.querySelector('.bird-container2');
    let birdImage = birdNo == 1 ? document.querySelector('.bird-container img') : document.querySelector('.bird-container2 img');
    if(birdContainer.offsetTop + birdImage.offsetHeight >= document.body.offsetHeight) {
        let downPosition = 0;
        birdContainer.style.top = downPosition;
        birdNo == 1 ? bird1X= downPosition : bird2X = downPosition;
    }
    else {
        if (birdContainer.classList.contains('bird-up-left')){
            birdContainer.classList.remove('bird-up-left');
        }
        else {
            birdContainer.classList.remove('bird-up-right');
        }
        let downPosition = window.scrollX + birdContainer.getBoundingClientRect().top + speed;
        birdContainer.style.top = downPosition +"px";
        birdNo == 1 ? bird1X= downPosition : bird2X = downPosition;
    }
}
const moveTop = (birdNo,speed) => {
    let birdContainer = birdNo == 1 ? document.querySelector('.bird-container') : document.querySelector('.bird-container2');
    let birdImage = birdNo == 1 ? document.querySelector('.bird-container img') : document.querySelector('.bird-container2 img');
    if (birdContainer.offsetTop <= 0) {
        let bottomPosition = document.body.offsetHeight - birdImage.offsetHeight;
        birdContainer.style.top = bottomPosition + "px";
        birdNo == 1 ? bird1X= bottomPosition : bird2X = bottomPosition;
    }
    else {
        if (birdContainer.classList.contains('bird-container-left')) {
            birdContainer.classList.add('bird-up-left')
        }
        else {
            birdContainer.classList.add('bird-up-right')
        }
        let bottomPosition = window.scrollY + birdContainer.getBoundingClientRect().top - speed;
        birdContainer.style.top = bottomPosition +"px";
        birdNo == 1 ? bird1X= bottomPosition : bird2X = bottomPosition;
    }
}
const getBirdPosition = (birdNo) => {
    bird1X = Math.round(bird1X);
    bird1Y = Math.round(bird1Y);
    bird2X = Math.round(bird2X);
    bird2Y = Math.round(bird2Y);
    return birdNo == 1 ? {x : bird1X, y : bird1Y} : {x : bird2X, y : bird2Y};
}