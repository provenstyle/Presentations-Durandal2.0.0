﻿define(['durandal/app', 'services/selectedDeck', 'services/logger'], function (app, deck, logger) {

    var attached = function() {
            window.scrollTo(0, 1);
        };

    var next = function() {
            deck.next();
            updateCard();
        },
        previous = function() {
            deck.previous();
            updateCard();
        };
    
    var card = ko.observable(deck.currentCard()),
        activate = function () {
            updateCard();
        },
        flip = function () {
            $('.card').toggleClass('flip');
        },
        updateCard = function () {
            if ($('.card').hasClass('flip')) {
                setTimeout(function () {
                    card(deck.currentCard());
                }, 400);
            } else {
                card(deck.currentCard());
            }
            $('.card').removeClass('flip');
        },
        cardCount = ko.computed(function () {
            var current = deck.currentCardId() + 1;
            return current + " of " + deck.cardCount();
        }, this);        
    
    var random = ko.observable(false),
        randomChanged = function () {
            logger.log("Random checkbox value: " + random());
            app.trigger("random", random());
            return true;
        };

    return {        
        attached: attached,
        
        previous: previous,
        next: next,
        hasPrevious: deck.hasPrevious,
        hasNext: deck.hasNext,
        
        activate: activate,
        deckName: deck.deckName,
        card: card,
        flip: flip,
        cardCount: cardCount,
        
        random: random,
        randomChanged: randomChanged
    };
});