APP.Router = Backbone.Router.extend({
    routes: {
        "" : "dashboard",
        "dashboard" : "dashboard",
        "jobs/add" : "addJob"
    },

    initialize: function(){
        console.log("router initialized");
    },

    // add a job (duh)
    addJob: function(){
        console.log("addJob() route fired");
        APP.jobview = new APP.NewJobModelView();
        // render the view
        APP.jobview.render();
        // append it to the dom
        $('.jumbotron').html(APP.jobview.$el);
    },

    home: function(){

    },

    dashboard: function(){
        console.log("dashboard() route fired");
        APP.jobcollection = new APP.JobCollection();
        APP.jobcollection.fetch({
            success: function(){
                APP.jobcollectionview = new APP.JobCollectionView({
                    collection: APP.jobcollection
                });

                APP.jobcollectionview.render();
                // $('.jumbotron').children().remove();
                $('.jumbotron').html(APP.jobcollectionview.$el);
            }
        });
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});