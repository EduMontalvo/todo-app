import { FC } from "react"
import TodoItem from "./TodoItem"

interface TodoListProps{
    todos: string[],
    removeTodo: (index:number) => void
}


const TodoList:FC<TodoListProps> = ({todos,removeTodo}) => {
    return (
        <div>
            {todos.map((todo,index) => (
                <TodoItem key={index} todo={todo} index={index} removeItem={removeTodo}></TodoItem>
            ))}
        </div>
    )
}

export default TodoList