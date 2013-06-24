TD.Views.IndexView = Backbone.View.extend({

  events: {
    "dblclick #header": "makeNewDay"
  },

  render: function () {
    var that = this;

    var tasks = that.collection

    var div = $("<div id='calendar'></div>");

    _.each(that.collection.models, function (day) {
      var date = day.get("date");
      var id = day.get("id");
      var dayDiv = $("<div class='day' id='" + id + "'><h2>" + date + "</h2></div>");
      var dayView = new TD.Views.DayView({
        model: day
      }).render().el;

      dayDiv.append(dayView);
      div.append(dayDiv);
    });

    var header = $("<div id='header'><h1>To do:</h1></div>");

    console.log(that);
    var newDayView = new TD.Views.NewDayView().render().el;

    that.$el.append(div);
    that.$el.prepend(header);
    that.$el.append(newDayView);
    return that;
  },

  makeNewDay: function () {
    if ($(".newday").hasClass("is-off")) {
      $(".newday").removeClass("is-off");
    } else {
      $(".newday").addClass("is-off");
    }

    console.log("doubleclicked");
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