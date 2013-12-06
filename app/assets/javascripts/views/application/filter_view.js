FilterView = Backbone.View.extend({
    events: {
        'click #from_followed': 'toggleFromFollowed',
        'change #radius_select': 'changeRadius'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html('');
        this.$el.html(render('application/filter'));
    },

    toggleFromFollowed: function (e) {
        Filter.set('from_followed', $(e.target).prop('checked'));
    },

    changeRadius: function (e) {
        Filter.set('radius', e.target.value);
    }

});