define(['services/selectedDeck'], function (selectedDeck) {

    var activate = function (deck) {
        if(deck)
            selectedDeck.setSelectedDeck(deck);
        else {
            selectedDeck.setSelectedDeck('Multiplication');
        }
    };

    var attached = function() {
        window.scrollTo(0, 1);
    };

    return {
        activate: activate,
        attached: attached                
    };
});