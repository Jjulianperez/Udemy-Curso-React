import {type TodoId, type Todo as TodoType} from '../types'

interface Props extends TodoType{
    onRemoveTodo: ( { id }  : TodoId) => void
    handleCompleted: ({ id, completed } : Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, handleCompleted}) =>{
    return(
        <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={() =>{
                handleCompleted ({id,completed})
              }}
              />
            <label>{title}</label>
            <button 
                className='destroy'
                onClick={()=>{
                    onRemoveTodo( {id} )
                }}
            />
        </div>
    )
}