APP.JobCollection = Backbone.Collection.extend({
    model: APP.JobModel,
    url: "/jobs",

    // filter : function(arg) {
    //     console.log(this);

        // var test = _.filter(this, function(item){
        //     return item.get("isActive") === true;
        // });

    //     console.log(test);

    //     return this.filter(function(item){
    //         return item.get('isActive');
    //     });
    // }
});