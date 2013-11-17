APP.JobCollection = Backbone.Collection.extend({
    model: APP.JobModel,
    url: "/jobs"
});