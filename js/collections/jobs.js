APP.JobCollection = Backbone.Collection.extend({
    model: APP.JobModel,
    url: "/jobs",


    search: function(keys) {
        if (keys === "") {return this;}

        var pattern = new RegExp(keys, "gi");
        return this.filter(function(data){
            return pattern.test(data.get("company"));
        });

    }

});