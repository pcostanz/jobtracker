APP.JobModelView = Backbone.View.extend({
    tagName: "li",
    className: "job",

    template: _.template('<h3><%= company %> | <%= position %></h3>'),

    events: {
        'click': 'highlight'
    },

    render: function() {
        
        var attributes = this.model.toJSON();
        // I need to figure out what $el refers to before calling render
        this.$el.html(this.template(attributes));
        return this;
    },

    highlight: function() {
        
        alert("Clicked Job");
        //this.$el.toggleClass('queueDelete');
    }
});

// Q. What are we doing in this view?

// A. Constructing HTML using JavaScript

// http://backbonejs.org/#View