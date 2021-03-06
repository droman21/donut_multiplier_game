class Donut {

    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 50;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
    }

    addDonut() {
        var multiplierValue = Math.pow(1.2, this.donutMultiplierCount);
        if (multiplierValue > 0) {
            multiplierValue = 1 * multiplierValue;
            console.log("multiplier value is: " + multiplierValue);
        }
        else {
            multiplierValue += 1;
        }

        this.donutCount += multiplierValue;
        console.log(this.donutCount);
    }

    removeDonut() {
        this.donutCount -= 1;
    }
    getCount() {
        console.log("Donut count is:" + this.donutCount);
        return Math.round(this.donutCount);
    }
    isAutoClicking()
    {
        return this.autoClickerCount > 0;
    }
    canEnableAutoClicker() {

        var isMinBalanceReached = this.donutCount >= this.autoClickerCost;
        console.log(isMinBalanceReached);

        return isMinBalanceReached;
    }
    addAutoClicker() {

        this.autoClickerCount += 1;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost += 10;
        console.log(this.autoClickerCount);
    }
    getAutoClickerCount() {
        console.log(this.autoClickerCount);
        return this.autoClickerCount;
    }
    getAutoClickerCost(){
        console.log(this.autoClickerCost)
        return this.autoClickerCost;
    }
    getMultiplierCount() {
        console.log(this.donutMultiplierCount);
        return this.donutMultiplierCount;
    }
    getMultiplierCost(){
        console.log(this.donutMultiplierCost)
        return this.donutMultiplierCost;
    }
    addMultiplier() {

        this.donutMultiplierCount += 1;
        this.donutCount -= this.donutMultiplierCost;
        this.donutMultiplierCost = (this.donutMultiplierCost * 1.10);
        console.log("Multiplier count is: " + this.donutMultiplierCount);
    }
    canEnableMultiplier() {

        var isMinBalanceReached = this.donutCount >= this.donutMultiplierCost;
        console.log(isMinBalanceReached);

        return isMinBalanceReached;
    }

}