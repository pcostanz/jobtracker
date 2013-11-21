APP.JobDashboardView = Backbone.View.extend({
    tagName: "div",
    className: "job-dashboard",

    template: _.template('<div style="background: red; height: 600px; width: 800px"><div id="test-container"></div></div>'),

    initialize: function() {
        console.log("JobDashboardView initialized");
        // set the view element html to the template above
        this.$el.html(this.template());
        $(".jumbotron").html(this.$el);
        this.render();
    },

    render: function() {
        // render a child view
        // instantiate collection
        APP.jobcollection = new APP.JobCollection();
        // fetch the collection from the server
        APP.jobcollection.fetch({
            success: function(collection){
                APP.jobcollectionview = new APP.JobCollectionView({
                    collection: collection
                });
                APP.jobcollectionview.render();
                $('#test-container').html(APP.jobcollectionview.$el);
            }
        });
    }
});