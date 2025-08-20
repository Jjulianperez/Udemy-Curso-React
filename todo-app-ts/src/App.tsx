import { useState, type JSX } from "react"
import { Todos} from "./components/Todos";
import type { FilterValue, TodoId, Todo} from "./types";
import type { TodoTitle } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
const mockTodos = [
  {
    id: "1",
    title: 'todo1',
    completed: true
  },
  {
    id: "2",
    title: 'todo2',
    completed: false
  },
  {
    id: "3",
    title: 'todo3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos,setTodos] = useState(mockTodos);
  const [filterSelected, setFiltersSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
  
  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !==id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed } : Pick<Todo, 'id' | 'completed'>
  ): void => {
      
      const newTodos = todos.map(todo =>{
        if (todo.id === id) {
          return{
            ...todo,
            completed: !completed
          }
        }
        return todo
      })

      setTodos(newTodos)

  }

  const handleFilterChange = (filter: FilterValue): void =>{
    setFiltersSelected(filter)
  }

  const handleRemoveAllCompleted = (): void =>{
    const newTodo = todos.filter(todo => !todo.completed)
    setTodos(newTodo)
  }

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })


  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount 

  const handleAddTodo = ({title}: TodoTitle): void =>{
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
        todos = {filteredTodos}
        onRemoveTodo = {handleRemove}
        onToggleCompleted = {handleCompleted}
        />
      <Footer
      onClearCompleted={handleRemoveAllCompleted}
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      />  
    </div>
  )
}

export default App
