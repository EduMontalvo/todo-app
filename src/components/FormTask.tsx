import { ReactElement, ReactEventHandler, useState } from "react";

const FormTask = () => {


    const [task, setTask] = useState({ id: 1, taskItem: '' });

    const { taskItem } = task;

    const onInputChange = ({ target, timeStamp }: React.ChangeEvent<HTMLInputElement>) => {
        
        const idCreate = parseInt(timeStamp.toFixed());
        const taskCreate = target.value;
        setTask({ ...task, id: idCreate, taskItem: taskCreate })

        console.log(task);
    }

    const onSendLocalStore = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setTask({id:1,taskItem:''})

    }

    return (

        <form action="" onSubmit={onSendLocalStore}>
            <div className="input-container bg-transparent">
                <input type="text" placeholder="" id="input" className="focus:outline-none bg-transparent" value={taskItem} onChange={onInputChange}></input>
                <label htmlFor="input">Put a task</label>
            </div>
        </form>
    )
}

export default FormTask