APP.NewJobModelView = Backbone.View.extend({
    tagName: "div",
    className: "newjob",

    template: _.template('<h2>Add New Job</h2><form action="/jobs" method="post" class="form" role="form"><div class="row"><div class="col-xs-6 col-md-6"><input id="job-company" class="form-control" name="company" placeholder="Company" type="text" required autofocus /></div><div class="col-xs-6 col-md-6"><input id="job-position" class="form-control" name="position" placeholder="Position" type="text" required /></div></div><input id="job-link" class="form-control" name="link" placeholder="Link" type="text" /><input id="job-notes" class="form-control" name="notes" placeholder="Notes" type="text" /><button class="btn btn-lg btn-primary" type="submit" id="save">Save »</button><button class="btn btn-lg" id="discard">Discard</button></form>'),

    events: {
        'click #save': 'save',
        'click #discard': 'discard'
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    },

    save: function(e) {
        e.preventDefault();

        APP.job = new APP.JobModel();
        this.model = APP.job;

        var flatData = Backbone.Syphon.serialize(this);

        // var formData = this.$el.find('form').serializeArray();
        // var flatData = _.map(formData, function(obj){
        //     var obj2 = {};
        //     obj2[obj.name] = obj.value;
        //     return obj2;
        // });
        this.model.save(flatData);
    },

    discard: function(e) {
        e.preventDefault();
    }
});