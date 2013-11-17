APP.Router = Backbone.Router.extend({
    routes: {
        "dashboard": "dashboard"
    },

    dashboard: function(){
        console.log("dashboard route hit");
        APP.jobcollection = new APP.JobCollection();
        APP.jobcollection.fetch({
            success: function(){
                APP.jobcollectionview = new APP.JobCollectionView({
                    collection: APP.jobcollection
                });

                APP.jobcollectionview.render();
                $('.jumbotron').children().remove();
                $('.jumbotron').append(APP.jobcollectionview.$el);
            }
        });
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});