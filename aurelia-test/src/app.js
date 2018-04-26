import {Todo} from './test-app';


export class App {

  constructor() {
    this.heading = 'Aurelia Test App';
    this.todos = [];
    this.todoDescription = '';
    console.log('construct')
  }
  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
      console.log('add ap1 ')
    }
    console.log('add app')
  }

  removeTodo(todo){
    let index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  


  }

}
