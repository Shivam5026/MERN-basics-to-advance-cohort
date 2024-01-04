import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-8",
    completed: false
  },
  {
    title: "Study DSA",
    description: "Study DSA from 10-12",
    completed: true
  }])

  function addTodos(){
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <>
      <button onClick={addTodos}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo> */}
      {/* <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo> 
      })}
    </>
  )
}

function Todo(props){
  return <>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </>
}

export default App
