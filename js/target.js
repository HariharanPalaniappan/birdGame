let randomY= 0;
let randomX= 0;
const generateTarget = () => {
    randomY = Math.round((Math.random()*document.body.offsetWidth) + 1);
    randomX = Math.round((Math.random()*document.body.offsetHeight) + 1);
    let targetImg = document.createElement('img');
    document.querySelector('.game-bg').appendChild(targetImg);
    targetImg.setAttribute('src','../images/apple3.gif');
    targetImg.setAttribute('class','random-target');
    document.querySelector('.random-target').style.left = randomY +'px';
    document.querySelector('.random-target').style.top = randomX +'px';
}
const removeTarget = () => {
    document.querySelector('.random-target') ? document.querySelector('.random-target').remove(): null;
}
const getTargetPosition = () => {
    return {x : randomX, y : randomY}
}