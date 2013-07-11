var app = app || {};
app.Card = Backbone.Model.extend({
    defaults: {
        id: null,
        title: null,
        description: null,
        thumbnail: null
    },
    initialize: function(){}
});