class Donut {
    constructor() {
        this.donutCount = 0;
        this.autoClicker = 0;
        this.autoClickerCost = 100;
    }
    addDonut() {
        console.log(this.donutCount);
        this.donutCount += 1;
    }
    removeDonut() {
        this.donutCount -= 1;
    }
    getCount() {
        console.log(this.donutCount);
        return this.donutCount;
    }
    getAutoClickerCount(){
        console.log(this.autoClickerCount);
        return this.autoClickerCount;
    }
    addAutoClicker() {
        
        this.autoClickerCount += 1;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost +=10;
        console.log("Test");
        console.log(this.autoClickerCount);
    }

}
