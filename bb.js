// import {LocalStorage} from 'backbone.localstorage';

let app = {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: "",
    completed: false
  }
});

app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Backbone.LocalStorage("todo-list-storage")
});

app.todoList = new app.TodoList();

const TodoView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML
  //      content will be rendered.
  tagName: "li",
  // It's the first function called when this view it's instantiated.
  initialize: function() {
    this.render();
  },
  template: _.template($("#item-template").html()),
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions
  //       to push content. Like the Hello World in this case.
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});

app.AppView = Backbone.View.extend({
  el: "#todoapp",
  initialize: function() {
    this.input = $("input#new-todo");
    console.log(this.input);
    
    app.todoList.on("add", this.addAll, this);
    app.todoList.on("reset", this.addAll, this);
    app.todoList.fetch();
  },
  events: {
    'keypress #new-todo': 'createTodoOnEnter'
  },

  createTodoOnEnter: function(e) {
    console.log(e);
    
    if (e.which !== 13 || !this.input.val().trim()) {
      // ENTER_KEY = 13
      return;
    }
    app.todoList.create(this.newAttributes());
    this.input.val(""); // clean input box
  },
  addOne: function(todo) {
    let view = new TodoView({ model: todo });
    $("#todo-list").append(view.render().el);
  },

  addAll: function() {
    this.$("#todo-list").html("");
    todoList.each(this.addOne, this);
  },

  newAttributes: function() {
    return {
      title: this.input.val().trim(),
      completed: false
    };
  }
});

app.appView = new app.AppView();
