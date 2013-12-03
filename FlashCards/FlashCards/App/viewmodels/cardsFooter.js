define(['services/logger', 'services/selectedDeck'], function (logger, deck) {

    var random = ko.observable(false),
        randomChanged = function () {
            logger.log("Random checkbox value: " + random());
            deck.pickRandom(random());
            return true;
        };

    return {
        random: random,
        randomChanged: randomChanged
    };
});