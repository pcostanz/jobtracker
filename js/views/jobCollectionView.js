APP.JobCollectionView = Backbone.View.extend({
    tagName: "ul",
    className: "joblist",

    events: {

    },

    initialize: function() {
        // Watch the models within this collection for
        // a destroy event, rerender when this event fires.
        // TODO: Might want to change this to "all", or
        // add a separate 'change' event.
        this.collection.on('destroy', this.render, this);
    },

    render: function() {
        // Dump the container element before rendering.
        // This solves a bug related to rerendering the 
        // collection when individual models change.
        this.$el.empty();
        this.collection.each(function(model){
            APP.jobviewinstance = new APP.JobModelView({
                model: model
            });
            this.$el.append(APP.jobviewinstance.render().el);
        }, this);
        return this;
    }
});