APP.JobCollectionView = Backbone.View.extend({
    tagName: "ul",
    className: "joblist",

    events: {
        
    },

    render: function() {
        this.collection.each(function(model){
            APP.jobcollection = new APP.JobModelView({
                model: model
            });
            this.$el.append(APP.jobcollection.render().el);
        }, this);
        return this;
    }
});