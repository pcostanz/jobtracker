APP.JobModelView = Backbone.View.extend({
    tagName: "li",
    className: "job",

    template: _.template('<span><%= company %> | <%= position %></span><button class="btn btn-lg btn-primary" id="edit">Edit</button><button class="btn btn-lg btn-primary" id="delete">Delete</button>'),

    events: {
        'click #edit': 'edit',
        'click #delete': 'delete'
    },

    render: function() {

        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        return this;
    },

    edit: function() {
        alert("clicked edit on " + this.model.toJSON()._id);
    },

    delete: function() {
        this.model.destroy();
    }
});

// Q. What are we doing in this view?

// A. Constructing HTML using JavaScript

// http://backbonejs.org/#View