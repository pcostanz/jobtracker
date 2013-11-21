// Create job class

APP.JobModel = Backbone.Model.extend({
    // Need to set the urlRoot so models know where
    // to save themselves when used outside of a
    // colllection.
    urlRoot: "/jobs",
    idAttribute: "_id",

    defaults: {
        _id: null,
        company: "",
        position: "",
        link: "",
        notes: [],
        isActive: true
    }
});