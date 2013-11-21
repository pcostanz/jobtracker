APP.SearchBar = Backbone.View.extend({
    tagName: "div",
    className: "searchbar",

    template: _.template('<form class="navbar-search pull-left dropdown"><input id="searchText" type="search" class="search-query dropdown-toggle" placeholder="Search" autocomplete="off"></form>'),

    events: {

    },

    initialize: function(){
        this.$el.html(this.template());
        return this;
    },

    render: function() {

    }
});