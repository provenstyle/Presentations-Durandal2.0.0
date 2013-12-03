define(['plugins/router', 'durandal/app'], function (router, app) {

    return {
        router: router,                            
        activate: function () {
            router.map([
                { route: '', title:'Flash Card Library', moduleId: 'viewmodels/library', nav: true },
                { route: 'cards(/:deck)', moduleId: 'viewmodels/cards', hash: '#cards', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});