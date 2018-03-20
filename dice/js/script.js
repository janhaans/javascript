var viewController = (function() {

    return {
        displayDice: function(diceNumber) {
            var dice;
            dice = document.querySelector('.dice');
            dice.classList.remove('dice-1','dice-2','dice-3','dice-4','dice-5','dice-6');
            dice.classList.add('dice-' + diceNumber);
        },

    };
})();


var globalController = (function(viewController) {

    var setupEventListeners = function() {
        document.querySelector('.btn').addEventListener('click', dice);
    };

    var dice = function() {
        //Dice
        var diceNumber;
        diceNumber = Math.floor(Math.random()*6)+1;

        //Show result of dice
        viewController.displayDice(diceNumber);
    };
 
    return {
        init: function() {
            setupEventListeners();
        }
    };
})(viewController);

globalController.init();