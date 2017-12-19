var coffeeShop = {
    beans: 40,
    money: 100,


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
        var drinkRequirement = this.drinkRequirements[drinkType];
        if (drinkRequirement <= this.beans) {
            this.beans -= drinkRequirement;
        } else {
            // If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".
            alert("Sorry, we're all out of beans!");
        }

    }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");