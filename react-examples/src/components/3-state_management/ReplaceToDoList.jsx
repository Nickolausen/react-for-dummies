import { useState } from 'react'
import CodeBlockDisplay from '../utility/CodeBlockDisplay'

export default function ReplaceToDoList() {
    const [ todos, setTodos ] = useState([ <li key={0}>Saluta Veneti</li>, <li key={1}>Insulta Vagnini</li> ])
    const [ id, setId ] = useState(todos.length)
    const [ newToDo, setNewToDo ] = useState("")

    return <>
        <form className="w-100 d-flex flex-column gap-2 align-items-center justify-content-center">
            <label htmlFor="todoInput">Scrivi il tuo to-do:</label>
            <input id="todoInput"
                className='w-50 form-control' 
                type="text" 
                placeholder="Digita qui il tuo to-do..." 
                value={newToDo} 
                onChange={(e) => { setNewToDo(e.target.value) }}/>
                
            <button onClick={function handleOnClick(e) {
                e.preventDefault()
                if (newToDo !== "") {
                    let newId = id + 1
                    setTodos([...todos, <li key={newId}>{newToDo}</li>])
                    setId(newId)
                    setNewToDo("")
                }
            }} className='btn btn-primary'>Aggiungi to-do</button>
            <CodeBlockDisplay>
                <span className='fw-bold'>setTodos</span>([...todos, {"<li key={newId}>{newToDo}</li>"}])
            </CodeBlockDisplay>
        </form>

        <p className='fs-5 mb-0 pt-5 text-center text-uppercase'>I miei to-do</p>
        <ul className='border-start border-5 ps-4 pe-5'>
            { todos }
        </ul>
    </>
}