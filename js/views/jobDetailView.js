APP.JobDetailView = Backbone.View.extend({
    tagName: "div",
    className: "job-detail",

    template: _.template('<span><%= company %> | <%= position %></span>'),

    events: {
        // add event to submit notes
    },

    initialize: function(){

    },

    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        return this;
    },

    edit: function() {
        APP.router.navigate("/jobs/" + this.model.toJSON()._id, {trigger: true});
    },

    delete: function() {
        this.model.destroy({
            success: function(model){
                    $.pnotify({
                    title: "Job Deleted Successfully",
                    text: model.toJSON()._id,
                    type: "success",
                    styling: "bootstrap"
                });
            }
        });
    }
});