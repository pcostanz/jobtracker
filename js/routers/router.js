APP.Router = Backbone.Router.extend({
    routes: {
        "dashboard": "dashboard"
    },

    dashboard: function(){
        console.log("dashboard route hit");
        // I need to revisit pluralization
        APP.jobs = new APP.Job();
        APP.users.fetch({
            success: function(){
                APP.job3 = APP.jobs.get(3);
                APP.alljobs = APP.jobs;
            }
        });
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});