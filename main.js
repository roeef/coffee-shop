var coffeeShop = {
    beans: 40,
    money: 100,
    beansPrice: 5,


    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {

        // Only allows you make a drink if it's a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don't make DRINKNAME".
        if (!(drinkType in this.drinkRequirements)) {
            alert("Sorry, we don't make " + drinkType);
            return;
        }

        //If the drink is part of the drinkRequirements object, reduce the amount of beans by the number of beans required for that drink.
        let drinkRequirement = this.drinkRequirements[drinkType];
        if (drinkRequirement <= this.beans) {
            this.beans -= drinkRequirement;
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

    }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");