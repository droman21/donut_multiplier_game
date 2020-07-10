const donut_counter = document.querySelector('.donut_counter');
const donut_multiplier_counter = document.querySelector('.donut_multiplier_counter');
const donut_autoclicker_counter = document.querySelector('.donut_autoclicker_counter');
const donut_multiplier_cost = document.querySelector('.donut_multiplier_cost');
const donut_autoclicker_cost = document.querySelector('.donut_autoclicker_cost');
const donutAddElement = document.querySelector('.donut_add');
const donutRemoveElement = document.querySelector('.donut_remove');
const donut_autoclicker_add = document.querySelector('.donut_autoclicker_add');
const donut_multiplier_add = document.querySelector('.donut_multiplier_add');
var resetButton = document.querySelector("#reset");

const donut = new Donut();
let isCounterActive = false;
let intervalId = null;

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

var a = 0;
var resetButton = function() {
    resetButton.addEventListener('click', function(){
        
    })
	a = 0;
	document.getElementById('Value').innerHTML = 0;
}

const addDonutsIfAutoClicking = function(){
    if(donut.isAutoClicking && !isCounterActive){
        donutCounterActive();
    }
    else if(!donut.isAutoClicking() && isCounterActive){
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
    donut_autoclicker_cost.innerText = "AutoClicker Cost: " + donutObject.getAutoClickerCost();
    donut_multiplier_cost.innerText = "Multiplier Cost: " + donutObject.getMultiplierCost();
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
resetButton.addEventListener("click", function(){
    reset();
})
updateDonutCount(donut);
resetButton(donut);