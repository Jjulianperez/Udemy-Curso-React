import { type ListOfTodo, type TodoCompleted, type TodoId , type Todo as TodoType} from "../types"
import {Todo} from '../components/Todo'

interface Props {
    todos: ListOfTodo
    onRemoveTodo: (id:TodoId) => void
    onToggleCompleted: ({ id, completed } : Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) =>{
    return(
        <ul className="todo-list">
        {todos.map(todo => (
            <li 
            key={todo.id} 
            className={`${todo.completed ? 'completed' : ''} `}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo = {onRemoveTodo}
              handleCompleted = {onToggleCompleted}
            />
            </li>
        ))}
        </ul>
    )
}