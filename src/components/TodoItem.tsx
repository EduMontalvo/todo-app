import { FC } from "react"
interface TodoItemProps {
    todo: string,
    index: number,
    removeItem: (index: number) => void
}
const TodoItem: FC<TodoItemProps> = ({ todo, index, removeItem }) => {
    return (
        <div className="border-2 text-center p-3 flex justify-between items-center my-1">
            {todo}
            <button className="text-white rounded-full bg-red-500 py-auto px-2" onClick={() => removeItem(index)}>X</button>
        </div>
    )
}

export default TodoItem