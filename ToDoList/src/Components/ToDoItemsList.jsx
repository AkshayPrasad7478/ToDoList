
function ToDoItemsList(props) {
    return (
      <>
        <li>
            <input type="checkbox"></input>
          {props.itemList}
          <span>
          <button id="btn-edit" onClick={props.handleEdit} >Edit</button>
            <button id="btn-delete" onClick={props.handleDelete}>Delete</button>
            
          </span>
        </li>
      </>
    );
  }
  
  export default ToDoItemsList;