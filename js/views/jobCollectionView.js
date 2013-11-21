APP.JobCollectionView = Backbone.View.extend({
    tagName: "ul",
    className: "joblist",

    events: {

    },

    initialize: function() {
        console.log("JobCollectionView Initialized");
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
    },

    // new function to use _filter or _findwhere in underscore to filter
    // through the collection and only render the ones that match
});