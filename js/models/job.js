// Create user class

APP.Job = Backbone.Model.extend({
    defaults: {
        company: "",
        position: "",
        link: "",
        notes: "",
        isActive: true
    }
});