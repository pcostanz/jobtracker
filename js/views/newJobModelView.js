APP.NewJobModelView = Backbone.View.extend({
    tagName: "div",
    className: "newjob",

    template: _.template('<h2>Add New Job</h2><form action="/jobs" method="post" class="form" role="form"><div class="row"><div class="col-xs-6 col-md-6"><input id="job-company" class="form-control" name="company" placeholder="Company" type="text" required autofocus /></div><div class="col-xs-6 col-md-6"><input id="job-position" class="form-control" name="position" placeholder="Position" type="text" required /></div></div><input id="job-link" class="form-control" name="link" placeholder="Link" type="text" /><button class="btn btn-lg btn-primary" type="submit" id="save">Save »</button><button class="btn btn-lg" id="discard">Discard</button></form>'),

    events: {
        'click #save': 'save',
        'click #discard': 'discard'
    },

    initialize: function() {
        console.log("VIEW:INIT:NewJobModelView");
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    },

    save: function(e) {
        e.preventDefault();

        APP.job = new APP.JobModel();
        this.model = APP.job;

        // Backbone.Syphon is a plugin designed to help
        // serialize form data into JSON.
        var flatData = Backbone.Syphon.serialize(this);
        this.model.save(flatData, {
            success: function(model) {
                console.log("this.model.save succesfull, rerouting to /#dashboard");
                $.pnotify({
                    title: "Job Added Successfully",
                    text: model.toJSON()._id,
                    type: "success",
                    styling: "bootstrap"
                });
                APP.router.navigate("dashboard", {trigger: true});
            },
            error: function (model, response, options) {
                console.log(response);
            }
        });
        // This is how I was doing this before:
        // Set the window location hash to the dashboard 
        // route, this is effectively a redirect.
        // TODO: What happens if the post isn't successful?
        // window.location.hash = "dashboard";
    },

    discard: function(e) {
        e.preventDefault();

        APP.router.navigate("dashboard", {trigger: true});
    }
});