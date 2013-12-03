define(['durandal/app', 'services/selectedDeck'], function (app, deck) {

    var next = function () {
        deck.next();
        app.trigger('updateCard');
    },
    previous = function () {
        deck.previous();
        app.trigger('updateCard');
    };

    return {
        previous: previous,
        next: next,
        hasPrevious: deck.hasPrevious,
        hasNext: deck.hasNext,
    };
});