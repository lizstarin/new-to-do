TD.Collections.Tasks = Backbone.Collection.extend({
  model: TD.Models.Task,

  initialize: function (models, options) {
    var that = this;
    that.dayId = options.dayId;
  },

  url: function () {
    var that = this;
    return "/days/" + that.dayId + "/tasks";
  }

});

TD.Models.Day = Backbone.RelationalModel.extend({

  initialize: function () {
    console.log("INITIALIZING DAY MODEL");
    var that = this;

    var tasks = that.get("tasks");

    tasks.fetch({
      async: false
    });

    console.log("TASKS FETCHED");
  },

  relations: [{
    type: "HasMany",
    key: "tasks",
    relatedModel: "TD.Models.Task",
    collectionType: "TD.Collections.Tasks",
    collectionOptions: function (day) {
      return { dayId: day.id }
    },
    reverseRelation: {
      key: "day"
    }
  }]

});

