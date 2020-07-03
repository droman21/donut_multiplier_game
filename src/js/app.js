const donut_counter = document.querySelector('.donut_counter');
const donut_multiplier_counter = document.querySelector('.donut_multiplier_counter');
const donut_autoclicker_counter = document.querySelector('.donut_autoclicker_counter');
const donutAddElement = document.querySelector('.donut_add');
const donutRemoveElement = document.querySelector('.donut_remove');
const donut_autoclicker_add = document.querySelector('.donut_autoclicker_add');
const donut_multiplier_add = document.querySelector('.donut_multiplier_add');


const donut = new Donut();
let isCounterActive = false;
let intervalId = null;


const addDonutsIfAutoClicking = function(){
    if(car.isAutoClicking && !isCounterActive){
        donutCounterActive();
    }
    else if(!car.isDriving() && isCounterActive){
        console.log(`clearing id=${intervalId}`)
        clearInterval(intervalId);
        isCounterActive = false;
    }
}
const donutCounterActive = function(){
    console.log('set interval is active')
    intervalId = setInterval(function(){
        donut.addDonut();
        updateDonutCount(donut);
        isCounterActive = true;
    }, 1000);
}
const updateDonutCount = function(donutObject){
    
    donut_counter.innerText = "Donuts: " + donutObject.getCount();  
    donut_multiplier_counter.innerText = "Multiplier Count: " + donutObject.getMultiplierCount();
    donut_autoclicker_counter.innerText = "AutoClicker Count: " + donutObject.getAutoClickerCount();
    donut_autoclicker_add.disabled = !donut.canEnableAutoClicker();
    donut_multiplier_add.disabled = !donut.canEnableMultiplier();
}
donutAddElement.addEventListener("click", function(){
    donut.addDonut();
    updateDonutCount(donut);
})

donutRemoveElement.addEventListener("click", function(){
    donut.removeDonut();
    updateDonutCount(donut);
})
donut_autoclicker_add.addEventListener("click", function(){
    donut.addAutoClicker();
    isCounterActive = true;
   
        donutCounterActive();
    updateDonutCount(donut);
})
donut_multiplier_add.addEventListener("click", function(){
    donut.addMultiplier();
    updateDonutCount(donut);
})

updateDonutCount(donut);