APP.Router = Backbone.Router.extend({
    routes: {
        "dashboard" : "dashboard",
        "jobs/add" : "addJob",
        "jobs/:id": "editJob",
        "parent_one": "parent_one",
        "parent_two": "parent_two",
        "*other" : "dashboard", // Using * is called a router splat.
        // This is used as a wildcard to redirect urls that are not
        // matched to a generic location. Alternatively we could
        // send to a 404 or a temporary 404 with a redirect to the
        // default route.

    },

    initialize: function(){
        console.log("router initialized");
    },

    // Trying to test ways to create parent/child views
    parent_one: function() {
        console.log("parent() route fired");
        APP.jobdashboardview = new APP.JobDashboardView();
    },

    // Trying to test ways to create parent/child views
    parent_two: function(){
        console.log("test() route fired");
        // instantiate and display search bar
        APP.searchbar = new APP.SearchBar();
        $('.searchbar').html(APP.searchbar.$el);

        // instantiate and display collection of jobs
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