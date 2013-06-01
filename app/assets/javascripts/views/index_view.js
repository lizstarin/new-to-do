TD.Views.IndexView = Backbone.View.extend({

  // events: {
  //   "dblclick header": "makeNewTask"
  // },

  render: function () {
    var that = this;

    var tasks = that.collection

    var div = $("<div id='calendar'></div>");

    _.each(that.collection.models, function (day) {

      var date = day.get("date");
      var id = day.get("id");
      var daydiv = $("<div class='day' id='" + id + "'><h2>" + date + "</h2></div>");
      var dayView = new TD.Views.DayView({
        model: day
      }).render().el;

      daydiv.append(dayView);
      div.append(daydiv);
    });

    var header = $("<div id='header'><h1>To do:</h1></div>")

    that.$el.append(div);
    that.$el.prepend(header);
    return that;
    }// ,
//
//     makeNewTask: function () {
//       $("#newtask").toggle();
//     },


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