TD.Views.IndexView = Backbone.View.extend({

  render: function () {
    var that = this;

    var div = $("<div id='calendar'></div>");

    _.each(that.collection.models, function (day) {
        var date = day.get("date");
        var id = day.get("id");
        var daydiv = $("<div id='" + id + "'>" + date + "</div>");

        var tasks = day.get("tasks");
        new TD.Routers.TasksRouter(daydiv, tasks);

        div.append(daydiv);
      }
    );

    that.$el.append(div);
    return that;
  }

});