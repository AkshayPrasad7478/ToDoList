
import './App.css'
import Header from './Components/Header';
// import Items from './Components/Items';
import ToDoItems from './Components/ToDoItems';
import ToDoItemsList from './Components/ToDoItemsList';

function App() {
  return (
    <>
    <div id='header'>
      <Header/>
    </div>

    <div id="todo-container">
        <ToDoItems />
      </div>
      
    </>

)
}

export default App
