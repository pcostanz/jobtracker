APP.router = Backbone.Router.extend({
    routes: {
        "dashboard": "dashboard"
    },

    dashboard: function(){
        console.log("dashboard route hit");
    }
});