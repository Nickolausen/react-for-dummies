import { useState } from 'react'
import CodeBlockDisplay from '../utility/CodeBlockDisplay'
import Note from '../utility/Note'

export default function MutateToDoList() {
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

                let newId = id + 1
                if (newToDo !== "") {
                    todos.push(<li key={newId}>{newToDo} <span className='text-success-emphasis'>—— Mysterious behaviour!</span></li>)
                    setId(newId)
                }

            }} className='btn btn-primary'>Aggiungi to-do
            </button>
            <CodeBlockDisplay>
                todos.<span className='fw-bold'>push</span>({"<li key={newId}>newToDo</li>"})
            </CodeBlockDisplay>
        </form>

        <p className='fs-5 mb-0 pt-5 text-center text-uppercase'>I miei to-do</p>
        <ul className='border-start border-5 ps-4 pe-5'>
            { todos }
        </ul>
        <div className='text-center py-4'>
            <Note>
                <a 
                    href="https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-secondary text-decoration-none'>
                Link della credibilità &gt;;(    
                </a>
            </Note>
        </div>
    </>
}