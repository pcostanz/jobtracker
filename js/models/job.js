// Create user class

APP.JobModel = Backbone.Model.extend({
    defaults: {
        company: "",
        position: "",
        link: "",
        notes: "",
        isActive: true
    }
});