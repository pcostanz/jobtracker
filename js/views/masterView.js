APP.MasterView = Backbone.View.extend({
    tagName: "div",
    className: "masterView",

    template: _.template('<input type="text"id="searchbar"/>   <input type="radio" name="tab" value="all" checked> All   <input type="radio" name="tab" value="applied"> Active<div id="masterView" style="width: 100%;height: 800px; background: #EEEEEE; border: 1px solid #C2C2C2"><div id="tabs"></div><div id="collection"></div></div>'),

    events: {
        "change input[name='tab']" : "filterCollection",
        "keyup #searchbar": "search"
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
                    collection: collection
                });
                this.joblist.render();
                $('#collection').html(this.joblist.$el);
            }
        });
    },

    search: function() {
        var keys = $("#searchbar").val();
        // TODO: debounce
        console.log(keys);

        // 
        console.log(APP.jobcollection);

        // Object object Object has no method 'search'
        var searched = APP.jobcollection.search(keys);
        console.log(searched);

        var newCollection = new APP.JobCollection(searched);

        console.log("new collection:")
        console.log(newCollection);

        this.joblist = new APP.JobCollectionView({
            collection: newCollection
        });
        this.joblist.render();
        $('#collection').html(this.joblist.$el);
    },

    filterCollection: function() {
        console.log("EVENT:MasterView Filtered Collection");
        console.log(APP.jobcollection);

        var filtered = APP.jobcollection.filter(function(item){
            return item.get("isActive") === true;
        });

        var newCollection = new APP.JobCollection(filtered);
        console.log(newCollection);

        // Wow...okay, so for whatever reason you can't use underscore
        // functionality by calling _.function(collection, iterator(){})
        // that is seriously lame. See above for correct way.
        //
        // var newCollection = _.filter(APP.jobcollection, function(item){
        //     console.log(item);
        //     return item.get("isActive") === true;
        // });
        

        // This isn't working how I had hoped, it's re-polling
        // the collection from teh database effectively 
        // negating any sorting functionality implemented
        // prior to the server call.
        // this.buildCollection(newCollection);

        this.joblist = new APP.JobCollectionView({
            collection: newCollection
        });
        this.joblist.render();
        $('#collection').html(this.joblist.$el);

        // var test = _.filter(this, function(item){
        //     return item.get("isActive") === true;
        // });
    }
});