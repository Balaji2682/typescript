import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((response) => {
  const todo = response.data as Todo;
  console.log(todo.id);
});
