APP.JobModelView = Backbone.View.extend({
    tagName: "li",
    className: "jobCard",

    template: _.template('<span><%= company %> | <%= position %></span><div style="float: right"><button class="btn btn-primary" id="edit">Details</button>  <button class="btn btn-danger" id="delete">Delete</button><div>'),

    events: {
        'click #edit': 'edit',
        'click #delete': 'delete'
    },

    initialize: function(){
        console.log("VIEW:INIT:JobModelView");
        // Attempting to rerender the collection view
        // when a model is destroyed.
        // this.model.on('destroy', this.render, this);
    },

    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        return this;

        // 
        // This is my failed attempt at getting handlebars
        // templating working by referencing an external
        // file.
        //
        // var source = $("#hbs-jobCard").html();
        // console.log(source);
        // var template = Handlebars.compile(source);
        // var content = template(attributes);
        // console.log(content);
        // this.$el.html(content);

    },

    edit: function() {
        // alert("clicked edit on " + this.model.toJSON()._id);
        APP.router.navigate("/jobs/" + this.model.toJSON()._id, {trigger: true});
    },

    delete: function() {
        this.model.destroy({
            success: function(model){
                    $.pnotify({
                    title: "Job Deleted Successfully",
                    text: model.toJSON()._id,
                    type: "success",
                    styling: "bootstrap"
                });
            }
        });
    }
});