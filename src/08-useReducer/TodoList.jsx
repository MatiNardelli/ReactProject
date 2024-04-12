import { TodoItem } from "./TodoItem"

export const TodoList = ({todo=[],onDeleteTodo,onToggleTodo}) => {



    return (
      <ul className="list-group">
          {/* ul: order list */}
          {todo.map( todo => (
              // todo item
              // si no le mando el key aca y lo dejo en todoItem no lo tomo como unique
                    <TodoItem 
                      key={todo.id} 
                      todo={todo} 
                      onDeleteTodo={id=>onDeleteTodo(id)}
                      onToggleTodo={onToggleTodo}
                    />
              ))
          }    
      </ul>
                      
    )
  }
  