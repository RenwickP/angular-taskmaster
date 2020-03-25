import { Component } from "@angular/core";
import { Todo } from "./todo";
import { List } from "./list";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "taskmaster-a";

  listValue: string;
  lists: List[];
  todoValue: string;
  todos: Todo[];

  ngOnInit() {
    this.lists = [];
    this.listValue = "";
    this.todos = [];
    this.todoValue = "";
  }

  addList() {
    if (this.listValue !== "") {
      const newItem: List = {
        id: Date.now(),
        value: this.listValue
      };

      this.lists.push(newItem);
    }
    this.listValue = "";
  }
  deleteItem(id: number) {
    this.lists = this.lists.filter(item => item.id !== id);
  }

  addTodo(daddyId) {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        parentList: daddyId,
        id: Date.now(),
        value: this.todoValue,
        status: false
      };
      this.todos.push(newItem);
    }
    this.todoValue = "";
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
  }
}
