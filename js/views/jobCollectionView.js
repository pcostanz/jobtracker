APP.JobCollectionView = Backbone.View.extend({
    tagName: "ul",
    className: "joblist",

    events: {

    },

    initialize: function() {
        // Watch the models within this collection for
        // a destroy event, rerender when this event fires.
        this.collection.on('destroy', this.render, this);

        // TODO: do I need to watch this for change? Probably if editing ends up working how I would like it to work.
    },

    render: function() {
        // Dump the container element before rendering.
        // This solves a bug related to rerendering the 
        // collection when individual models change.
        this.$el.empty();
        this.collection.each(function(model){
            APP.jobcollection = new APP.JobModelView({
                model: model
            });
            this.$el.append(APP.jobcollection.render().el);
        }, this);
        return this;
    }
});