// import {LocalStorage} from 'backbone.localstorage';

const app = {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: "",
    finished: false
  }
});

todo1 = new app.Todo({ title: "Have a baby", finished: false });
console.log(Backbone.LocalStorage);

app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Backbone.LocalStorage("todo-list-storage")
})

const TodoView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML
  //      content will be rendered.
  el: "#container",
  // It's the first function called when this view it's instantiated.
  initialize: function() {
    this.render();
  },
  template: _.template("<h1><%=Greeting%></h1>"),
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions
  //       to push content. Like the Hello World in this case.
  render: function() {
    this.$el.html(this.template({ Greeting: "HELLO MY BABY" }));
  }
});
let todoList = new app.TodoList()
todoList.create({title: "Be A FullStack"})
new TodoView();
