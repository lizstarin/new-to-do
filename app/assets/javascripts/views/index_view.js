TD.Views.IndexView = Backbone.View.extend({

  render: function () {
    var that = this;
    console.log("RENDERING INDEX VIEW");
    var tasks = that.collection

    var div = $("<div id='calendar'></div>");

    _.each(that.collection.models, function (day) {
      console.log("IN INDEX VIEW RENDER LOOP");
      var date = day.get("date");
      var id = day.get("id");
      var daydiv = $("<div id='" + id + "'>" + date + "</div>");
      var dayView = new TD.Views.DayView({
        model: day
      }).render().el;

      daydiv.append(dayView);
      div.append(daydiv);
    });

    that.$el.append(div);
    return that;
  }

});