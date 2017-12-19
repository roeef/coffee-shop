function Drink(price, beanRequirement) {
    this.price = price;
    this.beanRequirement = beanRequirement;
}

let coffeeShop = {
    beans: 40,
    money: 200,
    beansPrice: 1,


    drinks: {
        latte: new Drink(15,10),
        americano: new Drink(15,5),
        doubleShot: new Drink(15,15),
        frenchPress: new Drink(15,12)
    },

    isDrinkKnown: function (drinkType) {
        // Only allows you make a drink if it's a drink in the drinks object. Otherwise alert: "Sorry, we don't make DRINKNAME".
        return drinkType in this.drinks;

    },
    /**
     * @param drinkType
     * @returns boolean or not you have enough beans to meet the drink requirments for a drink type
     */
    isDrinkRequiermentsMet: function(drinkType) {
        return (this.beans >= this.drinks[drinkType].beanRequirement);
    },

    makeDrink: function (drinkType) {
        if (!this.isDrinkKnown(drinkType)) {
            alert("Sorry, we don't make " + drinkType);
            return;
        }


        //If the drink is part of the drinks object, reduce the amount of beans by the number of beans required for that drink.
        if (this.isDrinkRequiermentsMet(drinkType)) {
            this.beans -= this.drinks[drinkType].beanRequirement;
            console.log("Drink Made:" + drinkType);
        } else {
            // If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".
            alert("Sorry, we're all out of beans!");
        }

    },

    /**
     * buySupplies method. It should reduce the amount of money depending on how many beans are purchased.
     */
    buySupplies: function (howMuchBeans) {
        let beansCost = howMuchBeans * this.beansPrice;
        if (beansCost<=this.money) {
            this.money -= beansCost;
            this.beans += howMuchBeans;
            console.log("Purchase beans");
            return true;
        } else {
            console.log("not enough money to purchase that many beans");
            return false;
        }

    },

    /**
     * buyDrink method that increases the amount of money the coffeeShop has (depending on the drink's price) and invokes the makeDrink method.
     */

    buyDrink: function (drinkType) {
        if (!this.isDrinkKnown(drinkType) || !this.isDrinkRequiermentsMet(drinkType)) {
            alert("Sorry, we currently don't make " + drinkType);
            return;
        }

        this.money += this.drinks[drinkType].price;
        this.makeDrink(drinkType);

    }

};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buySupplies(10000);
console.log("Money:" + coffeeShop.money + " - Beans:" + coffeeShop.beans);
coffeeShop.buySupplies(40);
console.log("Money:" + coffeeShop.money + " - Beans:" + coffeeShop.beans);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
console.log("Money:" + coffeeShop.money + " - Beans:" + coffeeShop.beans);
