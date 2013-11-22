APP.MasterView = Backbone.View.extend({
    tagName: "div",
    className: "masterView",

    template: _.template('<input type="radio" name="tab" value="all" checked> All   <input type="radio" name="tab" value="applied"> Active<div id="masterView" style="width: 100%;height: 800px; background: #EEEEEE; border: 1px solid #C2C2C2"><div id="tabs"></div><div id="collection"></div></div>'),

    events: {
        "change input[name='tab']" : "filterCollection"
    },

    initialize: function() {
        console.log("VIEW:INIT:MasterView");

        // Set the element html to this view's template
        this.$el.html(this.template());

        console.log("appending master view template to the DOM");
        $(".jumbotron").html(this.$el);

        this.render();
        // create references to child views?
    },

    render: function() {
        APP.jobcollection = new APP.JobCollection();

        this.buildCollection(APP.jobcollection);

    },

    buildCollection: function(collection){
        
        collection.fetch({
            success: function(){
                this.joblist = new APP.JobCollectionView({
                    collection: APP.jobcollection
                });

                this.joblist.render();
                $('#collection').html(this.joblist.$el);
            }
        });
    },

    filterCollection: function() {
        console.log("EVENT:MasterView Filtered Collection");
        console.log(APP.jobcollection);
        var newCollection = _.filter(APP.jobcollection, function(item){
            return item.get("isActive") === true;
        });
        console.log(newCollection);
        console.log(APP.jobcollection);
        this.buildCollection(newCollection);
    }
});