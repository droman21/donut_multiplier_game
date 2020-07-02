const donutCountElement = document.querySelector('.donut_counter');
const donutAddElement = document.querySelector('.donut_add');
const donutRemoveElement = document.querySelector('.donut_remove');
const donutClickerAddElement = document.querySelector('.donut_autoclicker_add');
const donutMultiplierElement = document.querySelector('.donut_multiplier_add');

const donut = new Donut();
let isCounterActive = false;
let intervalId = null;

const donutCounterActive = function(){
console.log('set interval is active')
intervalId = setInterval(function(){
    donut.addDonut();
    updateDonutCount();
    isCounterActive = true;
    }, 1000);
}


const updateDonutCount = function(donutObject){
    donutCountElement.innerText = donutObject.getCount();
    donutClickerAddElement.disabled = !donut.canEnableAutoClicker();
    donutMultiplierElement.disabled = !donut.canEnableMultiplier();
}

updateDonutCount(donut);

donutAddElement.addEventListener("click", function(){
    donut.addDonut();
    updateDonutCount(donut);
})
donutRemoveElement.addEventListener("click", function(){
    donut.removeDonut();
    updateDonutCount(donut);
})
donutClickerAddElement.addEventListener("click", function(){
    donut.addAutoClicker();
    updateDonutCount(donut);
})
