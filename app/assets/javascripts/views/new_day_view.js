TD.Views.NewDayView = Backbone.View.extend({

  render: function () {
    var that = this;
    var newDay = new TD.Models.Day();

    var renderedContent = JST["days/new"]({
      day: newDay
    });

    that.$el.append(renderedContent);
    return that;
  }

});