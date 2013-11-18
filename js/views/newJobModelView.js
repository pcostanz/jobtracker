APP.NewJobModelView = Backbone.View.extend({
    tagName: "div",
    className: "newjob",

    template: _.template('<h2>Add New Job</h2><form action="/jobs" method="post" class="form" role="form"><div class="row"><div class="col-xs-6 col-md-6"><input class="form-control" name="company" placeholder="Company" type="text" required autofocus /></div><div class="col-xs-6 col-md-6"><input class="form-control" name="position" placeholder="Position" type="text" required /></div></div><input class="form-control" name="link" placeholder="Link" type="text" /><input class="form-control" name="notes" placeholder="Notes" type="text" /><button class="btn btn-lg btn-primary" type="submit" id="save">Save »</button><button class="btn btn-lg" id="discard">Discard</button></form>'),

    events: {
        'click #save': 'save',
        'click #discard': 'discard'
    },

    render: function() {

        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        return this;
    },

    save: function(e) {
        e.preventDefault();
        var formData = this.$el.find('form').serializeArray();
        console.log(formData);
        console.log(this.model.toJSON());
        this.model.set({company: "durp"});
        console.log(this.model.toJSON());
        // need to serialize everything in the form and package it up to be submitted as a new item
    },

    discard: function(e) {
        e.preventDefault();
    }
});