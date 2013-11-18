APP.Router = Backbone.Router.extend({
    routes: {
        "" : "home",
        "dashboard": "dashboard",
        "jobs/add" : "addJob"
    },

    initialize: function(){
        console.log("router initialized");
    },

    // add a job (duh)
    addJob: function(){
        // create an instance of the JobModel class
        APP.job = new APP.JobModel();
        // instantiate a view
        APP.job.fetch({
            success: function(){
                APP.jobview = new APP.NewJobModelView({
                    model: APP.job
                });
                // render the view
                APP.jobview.render();
                // append it to the dom
                $('.jumbotron').html(APP.jobview.$el);
            }
        });
    },

    home: function(){
        console.log(this);

        // instantiate a model or collection
        // instantiate a view
        // render it 
        // append it to the dom

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
                // $('.jumbotron').children().remove();
                $('.jumbotron').html(APP.jobcollectionview.$el);
            }
        });
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});