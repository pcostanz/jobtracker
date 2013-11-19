// Create job class

APP.JobModel = Backbone.Model.extend({
    
    url: "/jobs",
    idAttribute: "_id",

    defaults: {
        _id: null,
        company: "",
        position: "",
        link: "",
        notes: "",
        isActive: true
    }
});