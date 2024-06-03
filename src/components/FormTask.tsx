import React, { FC, useState } from "react"
import TodoList from "./TodoList"

const FormTask: FC = () => {

    const [todos, setTodos] = useState<string[]>([])
    const [inputValue, setInputValue] = useState('')

    const addTask = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    const removeTodo = (index: number) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos)
    }

    const onInputChange = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value)
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addTask();
    }

    return (

        <div>
            <form action="" onSubmit={onSubmit}>
                <div className="input-container bg-transparent">
                    <input type="text" placeholder="" id="input" className="focus:outline-none bg-transparent" value={inputValue} onChange={onInputChange}></input>
                    <label htmlFor="input">Put a task</label>
                </div>
            </form>
            <p>Aqui se ira listando las tareas por hacer las cuales estaran pendientes para posteriormente <var className = 'text-cyan-500'>eliminarlas cuando se completen.</var></p>
            <br />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    )
}

export default FormTask