TD.Views.IndexView = Backbone.View.extend({

  render: function () {
    var that = this;

    var tasks = that.collection

    var div = $("<div id='calendar'></div>");

    _.each(that.collection.models, function (day) {

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


// TD.Views.IndexView = Backbone.View.extend({
//
//   render: function () {
//     var that = this;
//     var days = that.collection.models;
//     // console.log(days[0].get("date"));
//
//     var renderedDayList = JST["days/list"]({
//       days: days
//     });
//
//     that.$el.html(renderedDayList);
//     return that;
//   }
//
// });