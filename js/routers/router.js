APP.Router = Backbone.Router.extend({
    routes: {
        "dashboard": "dashboard"
    },

    dashboard: function(){
        console.log("dashboard route hit");
    }
});

APP.router = new APP.Router();
Backbone.history.start({root: "/"});