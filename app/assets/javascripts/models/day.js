TD.Collections.Tasks = Backbone.Collection.extend({
  model: TD.Models.Task,
});

TD.Models.Day = Backbone.RelationalModel.extend({

  relations: [{
    type: "HasMany",
    key: "tasks",
    relatedModel: "TD.Models.Task",
    collectionType: "TD.Collections.Tasks",
    reverseRelation: {
      key: "day"
    }
  }]

});

