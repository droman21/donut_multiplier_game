const donutCountElement = document.querySelector('.donut_counter');
const donutAddElement = document.querySelector('.donut_add');
const donutRemoveElement = document.querySelector('.donut_remove');
const donutClickerAddElement = document.querySelector('.donut_autoclicker_add');

const donut = new Donut();

const updateDonutCount = function(donutObject){
    donutCountElement.innerText = donutObject.getCount();
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
