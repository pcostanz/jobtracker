// Create user class

APP.UserModel = Backbone.Model.extend({
    // Need to set the urlRoot so models know where
    // to save themselves when used outside of a
    // colllection.
    urlRoot: "/user",
    idAttribute: "_id",

    defaults: {
        _id: null,
        isEmployed: false,
        masterResume: null,
        jobs: [],
        
    }
});