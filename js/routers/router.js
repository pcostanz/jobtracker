APP.Router = Backbone.Router.extend({
    routes: {
        "dashboard" : "dashboard",
        "masterview": "masterView",
        "masterview/:filter": "filter",
        "jobs/add" : "addJob",
        "jobs/:id": "editJob",
        "*other" : "dashboard"
    },

    initialize: function(){
        console.log("router initialized");
    },

    masterView: function() {
        console.log("masterView() route fired");
        APP.masterview = new APP.MasterView();
    },

    addJob: function(){
        console.log("addJob() route fired");
        APP.jobview = new APP.NewJobModelView();
        // render the view
        APP.jobview.render();
        // append it to the dom
        $('.jumbotron').html(APP.jobview.$el);
    },

    // You can pass in the id from the url and then consume it later instead of
    // pulling it from the url directly 
    editJob: function(id){
        // Create an instance of the job model, which initially
        // only contains the id field that was generated in the
        // first step. Backbone then uses this id as a reference
        // when it executes fetch to identify which model data
        // to pull from the server. Within the success function
        // we then reference this model within the view instance
        // and then render and append this new view.
        APP.jobmodel = new APP.JobModel({_id: id});
        APP.jobmodel.fetch({
            success: function(){
                APP.jobmodelview = new APP.JobModelView({
                    model: APP.jobmodel,
                });
                APP.jobmodelview.render();
                $('.jumbotron').html(APP.jobmodelview.$el);
            }
        });
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