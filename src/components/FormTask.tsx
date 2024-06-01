import { ReactElement, ReactEventHandler, useState } from "react";

const FormTask = () => {

    interface Item {
        id: number,
        task: string
    }

    const [inputValue, setInputValue] = useState('');
    const [id, setId] = useState(0)

    const [objeto, setObjeto] = useState<Item[]>([])

    const onInputChange = ({ target, timeStamp }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
        setId(parseInt(timeStamp.toFixed()));
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setObjeto([...objeto, { id, task: inputValue }])
        console.log(objeto)
    }


    return (

        <form action="" onSubmit={onSubmit}>
            <div className="input-container bg-transparent">
                <input type="text" placeholder="" id="input" className="focus:outline-none bg-transparent" value={inputValue} onChange={onInputChange}></input>
                <label htmlFor="input">Put a task</label>
                <p></p>
            </div>
        </form>
    )
}

export default FormTask