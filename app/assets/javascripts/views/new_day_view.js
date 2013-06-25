TD.Views.NewDayView = Backbone.View.extend({

  render: function (today) {
    var that = this;
    var newDay = new TD.Models.Day();

    var renderedContent = JST["days/new"]({
      day: newDay,
      today: today
    });

    that.$el.append(renderedContent);
    return that;
  }

});